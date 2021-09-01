import React from "react";
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
import CustomSection from "../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./celebrityStyle.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function CelebrityStyleSection() {
  return (
    <CustomSection style={{ paddingTop: "0.5rem", paddingBottom: "3rem" }}>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider style={{color:"#857250"}} >
          <Slide style={{color:"#857250"}} index={0}>
            <CarouselSlide />
          </Slide>
          <Slide style={{color:"#857250"}} index={1}>
            <CarouselSlide />
          </Slide>
        </Slider>
        <DotGroup style={{ display: "flex",color:"#857250" }} />
        <div className={styles.carouselNavigationDiv}>
          <Link to="/product-description" style={{color:"#857250"}}>See All</Link>
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
