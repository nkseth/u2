import { Link } from "react-router-dom";
import { IconButton, useMediaQuery, useTheme } from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CustomSection from "../../../utils/Custom Section/section";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/HandMade_Clothes.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handMadeClothes } from "../../../Redux/actions/designerHomePage";
import { LazyLoadingComp } from "../../../utils/LazyLoading";
import ImageWhiteBgCard from "../../../Commons/Cards/ImageWhiteBgCard/ImageWhiteBgCard";
import defaultFunctions from "../../../Configurations/defaultFunctions";

const { getRedirectPath } = defaultFunctions;
const customImg = { borderTopRightRadius: 5, borderTopLeftRadius: 5 };

const HandMade_Clothes = () => {
  const dispatch = useDispatch();
  const { clothes } = useSelector((state) => state.root.handMadeClothes);

  const mobile = useMediaQuery("(max-width:450px)");

  const theme = useTheme();
  const match = useMediaQuery("(max-width:630px)");
  const iPade = useMediaQuery(theme.breakpoints.down("sm"));
  const large = useMediaQuery(theme.breakpoints.down("1330px"));
  const CustomView = useMediaQuery("(max-width:400px)");

  const customStyle = {
    padding: "5rem 3rem 4rem  3rem",
    background: "#938368",
  };

  const visibleSlides = mobile
    ? 1.9
    : match
    ? 1.4
    : iPade
    ? 2
    : large
    ? 3
    : 4;
    
  useEffect(() => {
    dispatch(handMadeClothes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!clothes) {
    return null;
  }

  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div className={`${styles.SuitWear_header}`} style={{ color: "#fff" }}>
          Hand Made Clothes
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>
        <CarouselProvider
          visibleSlides={visibleSlides}
          totalSlides={clothes?.length + 0.8}
          isIntrinsicHeight
        >
          {!mobile ? (
            <Slider>
              {clothes?.map(({ id, cover_image, name, slug }, i) => (
                <Slide
                  index={i}
                  key={id}
                  style={
                    CustomView
                      ? { marginRight: "40px", marginLeft: "10px" }
                      : { marginRight: "20px", marginLeft: "20px" }
                  }
                  className={styles.items}
                >
                  <LazyLoadingComp>
                    <div className={styles.SuitWear}>
                      <div className={styles.SuitWear_Items}>
                        <img src={cover_image} alt={id} style={customImg} />
                        <Link to={`/designers-product-page/${slug}`}>
                          <a>{name}</a>
                        </Link>
                      </div>
                    </div>
                  </LazyLoadingComp>
                </Slide>
              ))}
            </Slider>
          ) : (
            <div class="container">
              <div class="row">
                <div class="col">
                  <Slider>
                    {clothes?.map(({ id, cover_image, name, slug }, i) => (
                      <Slide index={i} key={id.toString()}>
                        <LazyLoadingComp>
                          <ImageWhiteBgCard
                            redirectToPath={getRedirectPath(slug)}
                            itemName={name}
                            coverImage={cover_image}
                            itemId={id}
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

export default HandMade_Clothes;