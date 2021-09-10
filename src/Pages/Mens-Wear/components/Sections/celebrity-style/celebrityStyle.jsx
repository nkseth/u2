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
//Images 
import cs1 from "./Images/cs1.jpg"
import cs2 from "./Images/cs2.jpg"
import cs3 from "./Images/cs3.jpg"
import cs4 from "./Images/cs4.jpg"
import { useDispatch, useSelector } from "react-redux";


import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./celebrityStyle.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { get_celibrity_style } from "../../../../../Redux/actions/mensWear";

export default function CelebrityStyleSection({ type }) {

  const dispatch = useDispatch()

  const { celibrity_style } = useSelector(state => state.root.main)

  console.log(celibrity_style)

  useEffect(() => {
    dispatch(get_celibrity_style(`${type}-fashion`))
  }, [type])


  return (
    <CustomSection style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className={styles.header}>
        <span>Celebrity</span>&nbsp;&nbsp;
        <span>Style</span>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        className="celebrity_style_slider"
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0} style={{ marginLeft: "0.2em" }} >
            <CarouselSlide image1={cs4} image2={cs2} image3={cs3} image4={cs1} />
          </Slide>
          <Slide index={1} style={{ marginLeft: "0.2em" }} >
            <CarouselSlide image1={cs4} image2={cs2} image3={cs3} image4={cs1} />
          </Slide>
        </Slider>
        <DotGroup style={{ display: "flex" }} />
        <div className={styles.carouselNavigationDiv}>
          <Link to="/product-description">SEE All</Link>
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
