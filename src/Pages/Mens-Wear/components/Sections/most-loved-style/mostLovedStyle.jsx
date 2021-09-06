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
import styles from "./mostLovedStyle.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { get_most_loved } from "../../../../../Redux/actions/mensWear";
import { useDispatch, useSelector } from "react-redux";

export default function MostLovedStyleSection({ type }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_most_loved(`${type}-fashion`))
  }, [type])

  const { most_loved } = useSelector(state => state.root.main)

  return (
    <CustomSection
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        backgroundColor: "#9d8e73",
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          {most_loved.map((item, index) => {
            return (
              <Slide index={index}>
                <CarouselSlide item={item} />
              </Slide>
            )
          })}
          {/* <Slide index={0}>
            <CarouselSlide />
          </Slide>
          <Slide index={1}>
            <CarouselSlide />
          </Slide> */}
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
