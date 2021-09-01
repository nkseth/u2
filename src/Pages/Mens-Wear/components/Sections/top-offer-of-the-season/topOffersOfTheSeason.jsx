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
import CustomDivider from "../../../../../utils/Custom Divider/divider";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./topOffersOfTheSeason.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//images
import TOP1 from "./Images/TOP1.jpg"
import TOP2 from "./Images/TOP2.jpg"
import TOP3 from "./Images/TOP3.jpg"
import TOP4 from "./Images/TOP4.jpg"


export default function TopOffersOfTheSeasonSection() {
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const CustomView = useMediaQuery("(max-width:1050px)");
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
        totalSlides={mobileView ? 6 : 2}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0} style={{ marginRight: "1em" }} >
            <CarouselSlide image1={TOP1} image2={TOP2} image3={TOP3} image4={TOP4} title={'Mens Wear'} />
          </Slide>
          <Slide index={1} style={{ marginRight: "1em" }}  >
            <CarouselSlide image1={TOP1} image2={TOP2} image3={TOP3} image4={TOP4} title={'Mens Wear'} />
          </Slide>
          {mobileView ?
            <>
              <Slide index={2} style={{ marginRight: "1em" }} >
                <CarouselSlide image1={TOP1} image2={TOP2} image3={TOP1} image4={TOP4} title={'kurtas , Shirts'} />
              </Slide>
              <Slide index={3} style={{ marginRight: "1em" }}  >
                <CarouselSlide image1={TOP1} image2={TOP2} image3={TOP2} image4={TOP4} title={'Sweashirts'} />
              </Slide>
              <Slide index={4} style={{ marginRight: "1em" }} >
                <CarouselSlide image1={TOP1} image2={TOP2} image3={TOP3} image4={TOP4} title={'Mens Wear'} />
              </Slide>
              <Slide index={5} style={{ marginRight: "1em" }}  >
                <CarouselSlide image1={TOP1} image2={TOP2} image3={TOP4} image4={TOP4} title={'TShirts and Jeans'} />
              </Slide>
            </>
            :
            <></>

          }
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
