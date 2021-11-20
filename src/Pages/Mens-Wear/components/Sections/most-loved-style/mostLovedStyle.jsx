import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, useMediaQuery, useTheme } from "@material-ui/core";

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
import dottedBg from "./Components/Images/background.svg"

export default function MostLovedStyleSection({ type }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const [visible, setvisible] = useState(3);
  const theme = useTheme();

  const match = useMediaQuery("(max-width:630px)");
  const iPade = useMediaQuery(theme.breakpoints.down("sm"));
  const large = useMediaQuery(theme.breakpoints.down("1330px"));
  const CustomView = useMediaQuery("(max-width:400px)");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_most_loved(`${type}`));
  }, [type]);

  const { most_loved } = useSelector((state) => state.root.main);

  return (
    <div>
      {
        !mobileView ? (
          <CustomSection
            style={{
              padding: "5em",
              backgroundColor: "#9d8e73",
            }}
          >
            <CarouselProvider
              visibleSlides={match ? 1.4 : iPade ? 2 : large ? 3 : visible}
              // naturalSlideWidth={100}
              totalSlides={most_loved.length}
              isIntrinsicHeight
            >
              {/* {mobileView ? (
                <div className={styles.headerMobile}>
                  <p>
                    <span className={styles.italic}>Most Loved</span>
                    <span> Style</span>
                  </p>
                </div>
              ) : (
                <></>
              )} */}

              <Slider>
                <CarouselSlide most_loved={most_loved} type={type} />
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
        ) : (
          <CustomSection
          style={{ backgroundImage: `url("${dottedBg}")`, marginTop: "14px",paddingTop:"2rem",paddingBottom:"1rem" }}>
            <CarouselProvider
              visibleSlides={match ? 1.4 : iPade ? 2 : large ? 3 : visible}
              // naturalSlideWidth={100}
              totalSlides={most_loved.length}
              isIntrinsicHeight
            >
              <Slider>
                <CarouselSlide most_loved={most_loved} type={type} />
              </Slider>
            </CarouselProvider>
          </CustomSection>
        )
      }
    </div>

  );
}
