import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
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
import CustomDivider from "../../../../../utils/Custom Divider/divider";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./topOffersOfTheSeason.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useDispatch } from "react-redux";
import { topSeasonOffers } from "../../../../../Redux/actions/designerHomePage";

export default function TopOffersOfTheSeasonSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(topSeasonOffers());
  }, []);

  return (
    <CustomSection
      style={{
        paddingTop: "2rem",
        paddingBottom: "3rem",
        backgroundColor: "#9d8e73",
      }}
    >
      <div className={styles.header}>
        Top offer of the season
        <CustomDivider style={{ backgroundColor: "#fff" }} />
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0}>
            <CarouselSlide />
          </Slide>
          <Slide index={1}>
            <CarouselSlide />
          </Slide>
        </Slider>
        <DotGroup style={{ display: "flex" }} />
        <div className={styles.carouselNavigationDiv}>
          <Link to="/offers">SEE All</Link>
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
