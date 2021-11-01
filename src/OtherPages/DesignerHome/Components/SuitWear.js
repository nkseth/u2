import { Link } from "react-router-dom";
import { IconButton, useMediaQuery } from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import CustomSection from "../../../utils/Custom Section/section";
import CustomDivider from "../../../utils/Custom Divider/divider";
import { suitWears } from "../../../Redux/actions/designerHomePage";
import { LazyLoadingComp } from "../../../utils/LazyLoading";
import ImageWhiteBgCard from "../../../Commons/Cards/ImageWhiteBgCard/ImageWhiteBgCard";
import defaultFunctions from "../../../Configurations/defaultFunctions";

import styles from "../Style/SuitWear.module.scss";

const { getRedirectPath } = defaultFunctions;

const SuitWear = () => {
  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width:450px)");

  const match = useMediaQuery("(max-width:630px)");
  const iPade = useMediaQuery("(max-width:900px)");
  const large = useMediaQuery("(max-width:1330px)");
  const CustomView = useMediaQuery("(max-width:400px)");

  const customSlideStyle = CustomView
    ? { marginRight: "10px", marginLeft: "10px" }
    : { marginRight: "20px", marginLeft: "20px" };

  const visibleSlides = mobile
    ? 1.9
    : match
    ? 1.4
    : iPade
    ? 2.5
    : large
    ? 3
    : 4;

  const customStyle = {
    background: "#938368",
    padding: !mobile ? "5rem 3rem 4rem 3rem" : "",
  };

  const customImg = { borderTopRightRadius: 5, borderTopLeftRadius: 5 };
  const { suitWearItems } = useSelector((state) => state.root.suitWears);

  useEffect(() => {
    dispatch(suitWears());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!suitWearItems) {
    return null;
  }

  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div
          className={styles.SuitWear_header}
          style={{ color: "#fff", paddingBottom: "10px" }}
        >
          Suit Wear
          <CustomDivider style={{ height: "1px", background: "#fff" }} />
        </div>
        <CarouselProvider
          visibleSlides={visibleSlides}
          totalSlides={
            match ? suitWearItems?.length + 0.3 : suitWearItems?.length
          }
          isIntrinsicHeight
        >
          {!mobile ? (
            <Slider>
              {suitWearItems?.map((item, i) => (
                <Slide
                  index={i}
                  key={item.id.toString()}
                  style={customSlideStyle}
                  className={styles.items}
                >
                  <LazyLoadingComp>
                    <Link
                      to={{
                        pathname: getRedirectPath(item.slug),
                      }}
                    >
                      <div>
                        <div className={styles.SuitWear}>
                          <div className={styles.SuitWear_Items}>
                            <img
                              src={item.cover_image}
                              alt={item.id}
                              style={customImg}
                            />
                            <Link to={getRedirectPath(item.slug)}>
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </LazyLoadingComp>
                </Slide>
              ))}
            </Slider>
          ) : (
            <div class="container">
              <div class="row">
                <div class="col">
                  <Slider>
                    {suitWearItems?.map((item, i) => (
                      <Slide index={i} key={item.id.toString()}>
                        <LazyLoadingComp>
                          <ImageWhiteBgCard
                            redirectToPath={getRedirectPath(item.slug)}
                            itemName={item.name}
                            coverImage={item.cover_image}
                            itemId={item.id}
                          />
                        </LazyLoadingComp>
                      </Slide>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          )}
          <DotGroup style={{ display: "flex", marginTop: "2rem" }} />
          <div className={styles.NavigationContainer}>
            <div className={styles.Carousel_SliderButtonBox}>
              <ButtonBack className={styles.Carousel_SliderButtons}>
                <IconButton size="small" className={styles.Carousel_iconBtn}>
                  <NavigateBeforeIcon />
                </IconButton>
              </ButtonBack>
              <ButtonNext className={styles.Carousel_SliderButtons}>
                <IconButton size="small" className={styles.Carousel_iconBtn}>
                  <NavigateNextIcon />
                </IconButton>
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </CustomSection>
    </div>
  );
};

export default SuitWear;
