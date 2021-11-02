import React, { useEffect } from "react";
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
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./exploreTopDesigners.module.scss";
import { useDispatch, useSelector } from "react-redux";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { get_top_designers } from "../../../../../Redux/actions/mensWear";
import { topDesigner } from "../../../../../Redux/actions/designerHomePage";
export default function ExploreTopDesignersSection({ type }) {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const width550 = useMediaQuery("(max-width:550px)");
  const width768 = useMediaQuery("(max-width:768px)");
  const width835 = useMediaQuery("(max-width:835px)");
  const width910 = useMediaQuery("(max-width:910px)");
  const width1125 = useMediaQuery("(max-width:1125px)");

  const getVisibleCardCount = () => {
    return extraSmall
      ? 1
      : small
      ? 1.5
      : width550
      ? 2
      : width768
      ? 2
      : width835
      ? 2
      : width910
      ? 3
      : width1125
      ? 3
      : 4;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(get_top_designers());
    dispatch(topDesigner());
  }, []);

  // const { top_designers } = useSelector((state) => state.root.main);
  const { designers } = useSelector((state) => state.root.topDesigner);
  // console.log(top_designers);

  return (
    <CustomSection
      class="explore_top_designer"
      style={{ paddingTop: "4rem", paddingBottom: "3rem" }}
    >
      <div className={styles.header}>Explore Top Designers</div>
      <CarouselProvider
        visibleSlides={getVisibleCardCount()}
        naturalSlideWidth={100}
        totalSlides={Object.keys(designers).length}
        isIntrinsicHeight
      >
        <Slider>
          {designers?.map(({ id, cover_image, name, marchent_id }, index) => {
            return (
              <Slide index={index}>
                <div className={styles.Top_Designer}>
                  <div className={styles.Top_Designer_Items}>
                    <Link to={`/designer-products/${marchent_id}`}>
                      <img src={cover_image} alt={id} />
                      <div style={{ marginTop: "25px" }}>{name}</div>
                    </Link>
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
        <DotGroup style={{ display: "flex" }} />
        <div className={styles.carouselNavigationDiv}>
          <Link style={{ visibility: "hidden" }}>SEE All</Link>
          <div className={styles.sliderBtnDiv}>
            <ButtonBack className={styles.sliderBtn}>
              <IconButton size="small" className={styles.iconBtn}>
                <NavigateBeforeIcon />
              </IconButton>
            </ButtonBack>
            <ButtonNext className={styles.sliderBtn}>
              <IconButton size="small" className={styles.iconBtn}>
                <NavigateNextIcon />
              </IconButton>
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </CustomSection>
  );
}
