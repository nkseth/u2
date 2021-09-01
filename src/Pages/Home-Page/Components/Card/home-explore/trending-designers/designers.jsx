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
import CustomSection from "../../../../../../utils/Custom Section/section";
import CarouselSlide from "../Slide/slide";
import styles from "./designer.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";


export default function CelebrityStyleSection() {
  return (
    <CustomSection style={{ paddingTop: "0.5rem", paddingBottom: "3rem", background:"#F3F1EE" }}>
        <div style={{ marginTop:30, fontFamily:"DM Serif Display",letterSpacing: "0.03em"}}>
            <h1 style={{fontSize:"34px", fontWeight:400}}>Trending Designers</h1>
            <h4 style={{fontFamily:"DM Sans", color: "#3B3B3B"}}> Don't miss anything from trends</h4>
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
        <DotGroup style={{ display: "flex" , color:"#857250"}} />
        <div className={styles.carouselNavigationDiv}>
          <Link style={{color:"#857250"}} to="/product-description">SEE All</Link>
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
