import React, { useEffect } from "react";
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
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

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
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <div className={styles.header}>Explore Top Designers</div>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        isIntrinsicHeight
      >
        <Slider>
          {designers?.map(
            ({ id, cover_image, get_merchant, marchent_id }, index) => {
              return (
                <Slide index={index}>
                  <div className={styles.Top_Designer}>
                    <Link to={`/designer-products/${marchent_id}`}>
                      <div className={styles.Top_Designer_Items}>
                        <img src={cover_image} alt={id} />
                        <span>{get_merchant?.name}</span>
                      </div>
                    </Link>
                  </div>
                </Slide>
              );
            }
          )}
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
