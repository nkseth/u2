import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IconButton } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./newCollection.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//BackGroud Image
import bg from "../../../Images/bg.png"



export default function NewCollectionSection() {
  return (
    <CustomSection
      style={{
        backgroundColor: "#9d8e73",
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "4rem",
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0}>
            <CarouselSlide>
              <div className={styles.sliderBtnDiv}>
                <ButtonBack className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateBeforeIcon />
                  </IconButton>
                </ButtonBack>
                <ButtonNext className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateNextIcon />
                  </IconButton>
                </ButtonNext>
              </div>
            </CarouselSlide>
          </Slide>
          <Slide index={1}>
            <CarouselSlide>
              <div className={styles.sliderBtnDiv}>
                <ButtonBack className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateBeforeIcon />
                  </IconButton>
                </ButtonBack>
                <ButtonNext className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateNextIcon />
                  </IconButton>
                </ButtonNext>
              </div>
            </CarouselSlide>
          </Slide>
        </Slider>
      </CarouselProvider>
    </CustomSection>
  );
}
