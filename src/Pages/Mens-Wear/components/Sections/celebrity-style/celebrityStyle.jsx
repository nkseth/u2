import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton, useMediaQuery, Grid,Button } from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
//Images
import cs1 from "./Images/cs1.jpg";
import cs2 from "./Images/cs2.jpg";
import cs3 from "./Images/cs3.jpg";
import cs4 from "./Images/cs4.jpg";
import { useDispatch, useSelector } from "react-redux";
import DesignersCard from "./Components/designers-card/card";

import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./celebrityStyle.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { get_celibrity_style } from "../../../../../Redux/actions/mensWear";
import CustomDivider from "../../../../../utils/Custom Divider/divider";
import dottedBg from "./Images/background.svg"
import ProductCard from "../../../../Designers-Product-Page/Components/product-card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { ReactComponent as Icon } from "./Images/icon.svg"

export default function CelebrityStyleSection({ type }) {
  const dispatch = useDispatch();

  const { celibrity_style } = useSelector((state) => state.root.main);
  const LaptopView = "(max-width:1210px)";
  const tabViewPro = useMediaQuery("(max-width:769px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  useEffect(() => {
    dispatch(get_celibrity_style(`${type}-fashion`));
  }, [type]);

  return (
    <div>
      {
        !mobileView ? (
          <CustomSection style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <div className={styles.header}>
              <span>Celebrity</span>&nbsp;&nbsp;
              <span>Style</span>
            </div>
            <CarouselProvider
              naturalSlideWidth={100}
              totalSlides={celibrity_style.length / 4}
              infinite
              className="celebrity_style_slider"
              isIntrinsicHeight
            >
              <Slider>
                {celibrity_style?.map((item) => {
                  return (
                    <>
                      <Slide index={0} style={{ marginLeft: "0.2em" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent:
                              mobileView || tabViewPro
                                ? "space-around"
                                : "flex-start",
                            gap: "1rem",
                            padding: "2rem 0em",
                          }}
                        >
                          <DesignersCard item={item} image={item.feature_image} />
                        </div>
                      </Slide>
                    </>
                  );
                })}
              </Slider>
              <DotGroup style={{ display: "flex" }} />
              <div className={styles.carouselNavigationDiv}>
                <Link to={`/designers-product-page/${type}/celebritystyle`}>
                  SEE All
                </Link>
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
          <CustomSection style={{ backgroundImage: `url("${dottedBg}")`, marginTop: "14px" }}>
            <div className={styles.title}>
              <h4>Celebrity Style</h4>
              <CustomDivider style={{ marginLeft: "5px", height: '1px', background: '#ffff' }} />
            </div>
            <div>
              <Swiper slidesPerView={2}>
                {
                  celibrity_style?.map((item) => {
                    return (
                      <SwiperSlide style={{ margin: "1rem" }}>
                        <DesignersCard item={item} image={item.feature_image} />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Button className={styles.moreButton}>View more</Button>
              <Icon style={{ marginLeft: "12px" ,color:"white !important"}} />
            </div>
          </CustomSection>
        )
      }
    </div>

  );
}
