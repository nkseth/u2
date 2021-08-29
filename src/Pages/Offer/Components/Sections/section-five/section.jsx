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
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./section.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//Images
import img1 from "../section-three/Components/Slide/Images/card1.png"
import img2 from "../section-three/Components/Slide/Images/card6.png"
import img3 from "../section-three/Components/Slide/Images/card14.png"
import img4 from "../section-three/Components/Slide/Images/card8.png"
import img5 from "../section-three/Components/Slide/Images/card9.png"
import img6 from "../section-three/Components/Slide/Images/card3.png"
import img7 from "../section-three/Components/Slide/Images/card5.png"
import img8 from "../section-three/Components/Slide/Images/card13.png"
export default function SectionFive() {
  return (
    <CustomSection class="offers_buy_and_get" style={{ paddingTop: "5rem", paddingBottom: "7rem" }}>
      <div className={styles.header}>Buy 1 and Get 1</div>
      <CarouselProvider
        className="buy_get_slidee"
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0}>
            <CarouselSlide img1={img5} img2={img6} img3={img7} img4={img8} title1={'Wrogn'} title2={'Benstokes'} title3={'Wrogn'} title4={'Benstokes'} />

          </Slide>
          <Slide index={1}>
            <CarouselSlide img1={img1} img2={img2} img3={img3} img4={img4} title1={'Wrogn'} title2={'Benstokes'} title3={'Wrogn'} title4={'Benstokes'} />
          </Slide>
        </Slider>
        <DotGroup style={{ display: "flex" }} />
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
    </CustomSection>
  );
}
