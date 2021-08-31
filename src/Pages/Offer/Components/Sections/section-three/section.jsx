import React from "react";
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
import styles from "./section.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//images
import img1 from "../section-three/Components/Slide/Images/card1.png"
import img2 from "../section-three/Components/Slide/Images/card6.png"
import img3 from "../section-three/Components/Slide/Images/card14.png"
import img4 from "../section-three/Components/Slide/Images/card8.png"
import img5 from "../section-three/Components/Slide/Images/card9.png"
import img6 from "../section-three/Components/Slide/Images/card3.png"
import img7 from "../section-three/Components/Slide/Images/card5.png"
import img8 from "../section-three/Components/Slide/Images/card13.png"
//Brand Images
import brand1 from "../section-three/Components/Slide/Images/logo/logo1.png"
import brand2 from "../section-three/Components/Slide/Images/logo/logo2.png"
import brand3 from "../section-three/Components/Slide/Images/logo/logo3.png"
import brand4 from "../section-three/Components/Slide/Images/logo/logo4.png"
import brand5 from "../section-three/Components/Slide/Images/logo/logo5.png"
import brand6 from "../section-three/Components/Slide/Images/logo/logo6.png"
import brand7 from "../section-three/Components/Slide/Images/logo/logo7.png"
import brand8 from "../section-three/Components/Slide/Images/logo/logo8.png"




export default function SectionThree() {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <CustomSection
      class={styles.offer_section_three}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        backgroundColor: "#9d8e73",
      }}
    >
      <div className={styles.container}>
        <span className={styles.header}>Best Offer on Designer Wear</span>
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={2}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            <Slide index={0}>
              <CarouselSlide img1={img1} img2={img2} img3={img3} img4={img4} brand1={brand1} brand2={brand2} brand3={brand3} brand4={brand4} />
            </Slide>
            <Slide index={1} style={{ marginLeft: 10 }}>
              <CarouselSlide img1={img5} img2={img6} img3={img7} img4={img8} brand1={brand5} brand2={brand6} brand3={brand7} brand4={brand8} />

            </Slide>
          </Slider>
          <DotGroup style={{ display: "flex", color: "#fff" }} />
          <div className={styles.carouselNavigationDiv}>
            <Link to='/'>SEE All</Link>
            <div className={styles.sliderBtnDiv}>
              <ButtonBack className={styles.sliderBtn}>
                <IconButton size='small' className={styles.iconBtn}>
                  <NavigateBeforeIcon />
                </IconButton>
              </ButtonBack>
              <ButtonNext className={styles.sliderBtn}>
                <IconButton size='small' className={styles.iconBtn}>
                  <NavigateNextIcon />
                </IconButton>
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </CustomSection>
  );
}
