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
import styles from "../Style/Trending.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topTrending } from "../../../Redux/actions/designerHomePage";
import { LazyLoadingComp } from "../../../utils/LazyLoading";
import ImageWhiteBgCard from "../../../Commons/Cards/ImageWhiteBgCard/ImageWhiteBgCard";

const Trending = () => {
  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width:450px)");

  const baseStyle = {
    padding: !mobile ? "5rem 3rem" : "",
    background: "#F3F1EE",
    maginTop: "-3em",
    paddingTop: !mobile ? "" : "2rem",
  };

  const customImg = { borderTopRightRadius: 5, borderTopLeftRadius: 5 };

  const { items } = useSelector((state) => state.root.trending);
  const trendingItems = items;


  const match = useMediaQuery("(max-width:630px)");
  const iPade = useMediaQuery("(max-width:900px)");
  const large = useMediaQuery("(max-width:1330px)");
  const CustomView = useMediaQuery("(max-width:400px)");

  useEffect(async () => {
    dispatch(topTrending());
  }, []);

  if (!trendingItems) {
    return null;
  }

  return (
    <div>
      <CustomSection className={styles.trending_content} style={baseStyle}>
        <div
          className={`${styles.Trending_header}`}
          style={{ color: '#1A202C' }}
        >
          Trending
          <CustomDivider style={{ height: '1px', background: '#857250' }} />
        </div>
        <CarouselProvider
          visibleSlides={match ? 1.4 : iPade ? 2.5 : large ? 3 : 4}
          totalSlides={
            match ? trendingItems?.length + 0.3 : trendingItems?.length
          }
          isIntrinsicHeight
        >
          {!mobile ? (
            <Slider>
              {trendingItems?.map((item, i) => (
                <Slide
                  index={i}
                  key={item.id.toString()}
                  style={
                    CustomView
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : { marginRight: "20px", marginLeft: "20px" }
                  }
                  className={styles.items}
                >
                  <LazyLoadingComp>
                    <Link
                      to={{
                        pathname: `/designers-product-page/${item.slug}`,
                      }}
                    >
                      <div>
                        <div className={styles.Trending}>
                          <div className={styles.Trending_Items}>
                            <img
                              src={item.cover_image}
                              alt={item.id}
                              style={customImg}
                            />
                            <Link to={`/designers-product-page/${item.slug}`}>
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
            <div class="container" style={{ marginTop: "1.5rem" }}>
              <div class="row row-cols-2">
                {trendingItems?.map((item, i) => (
                  <div className="col" style={{ marginBottom: "1rem" }}>
                    <ImageWhiteBgCard
                      redirectToPath={`/designers-product-page/${item.slug}`}
                      itemName={item.name}
                      coverImage={item.cover_image}
                      itemId={item.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {!mobile && (
            <>
              <DotGroup style={{ display: "flex", marginTop: "2rem" }} />
              <div className={styles.NavigationContainer}>
                <div className={styles.Carousel_SliderButtonBox}>
                  <ButtonBack className={styles.Carousel_SliderButtons}>
                    <IconButton
                      size="small"
                      className={styles.Carousel_iconBtn}
                    >
                      <NavigateBeforeIcon />
                    </IconButton>
                  </ButtonBack>
                  <ButtonNext className={styles.Carousel_SliderButtons}>
                    <IconButton
                      size="small"
                      className={styles.Carousel_iconBtn}
                    >
                      <NavigateNextIcon />
                    </IconButton>
                  </ButtonNext>
                </div>
              </div>
            </>
          )}
        </CarouselProvider>
      </CustomSection>
    </div>
  );
};

export default Trending;
