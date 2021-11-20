import React, { useEffect, useState } from "react";
import MUICarousel from "react-material-ui-carousel";
import { Carousel } from "react-responsive-carousel";
import Container from "../../utils/Container/container";
import { Grid, IconButton, useMediaQuery, useTheme } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CustomSection from "../../utils/Custom Section/section";
import CategoriesToBagCard from "./components/Categories-Carousel-Card/card";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import { Link } from "react-router-dom";
import styles from "./mensWear.module.scss";
//Carousel Images
import shirt from "./Images/shirt.png";
import Tshirt from "./Images/T-shirt.png";
import blazer from "./Images/blazer.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//Sections

import ForHimSection from "./components/Sections/for-him/forHim";
import NewCollectionSection from "./components/Sections/new-collection/newCollection";
import ExploreTopDesignersSection from "./components/Sections/explore-top-designers/exploreTopDesigners";
import StylishRecommendationSection from "./components/Sections/stylish-recommendation/stylishRecommendation";
import MostLovedStyleSection from "./components/Sections/most-loved-style/mostLovedStyle";
import AllThatYouWantSection from "./components/Sections/all-that-you-want/allThatYouWant";
import TopOffersOfTheSeasonSection from "./components/Sections/top-offer-of-the-season/topOffersOfTheSeason";
import CelebrityStyleSection from "./components/Sections/celebrity-style/celebrityStyle";

import {
  getBanner,
  get_mens_wear_cat,
  get_mens_wear_slider,
} from "../../Redux/actions/mensWear";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { LazyLoadingComp } from "../../utils/LazyLoading";
import parse from "html-react-parser";
import ForHimMobile from "./components/Sections/for-him/ForHimMobile";
export default function MensWear({ match }) {
  const {
    params: { type },
  } = match;

  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const customView = useMediaQuery("(max-width:1125px)");
  const customView2 = useMediaQuery("(max-width:910px)");
  SwiperCore.use([Pagination]);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    mens_wear_slider,
    mens_wear_cat,
    banner: { id, name, description, cover_image, background_image },
  } = useSelector((state) => state.root.main);
  const { banner } = useSelector((state) => state.root.main);

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("xs"));
  const iPade = useMediaQuery(theme.breakpoints.down("sm"));
  const mobile = useMediaQuery("(max-width:420px)");

  useEffect(() => {
    dispatch(get_mens_wear_slider(type));
    dispatch(get_mens_wear_cat(`${type}`));
    dispatch(getBanner(type));
  }, [type, dispatch]);

  return (
    <Container footerOnAllView>
      {mobile && (
        <Swiper slidesPerView={3} style={{ padding: "0.5rem 0" }}>
          {banner?.categories ? (
            banner?.categories.map((cat) => {
              return (
                <SwiperSlide style={{ margin: "0.1rem" }}>
                  <Link
                    to={`${
                      type === "kids"
                        ? `/designers-product-page/${cat.slug}`
                        : `/designers-product-page/${type}/${cat.slug}`
                    }`}
                    className={styles.ban_category}
                  >
                    <p>{cat.name.split(" ")[0]}</p>
                  </Link>
                </SwiperSlide>
              );
            })
          ) : (
            <p>Loading</p>
          )}
        </Swiper>
      )}
      <section className={styles.heroSection}>
        <div
          className={styles.carouselItem}
          key={id}
          style={{ backgroundImage: `url(${background_image})` }}
        >
          <div>
            <span>{name}</span>
            {parse(description || "")}
          </div>
        </div>
      </section>
      <CustomSection style={{ padding: "2rem 1rem" }}>
        <Breadcrumb
          style={{ paddingTop: tabView && "2rem 0" }}
          path="Designer Home /mens"
          crum={[{label:'Designer home',path:'/'},
          {label: type === "mens"?'Men’s wear': 
          type === "womens" ? "Women’s wear":
          type === 'kids'? "Kid’s wear":
          type === 'designers'?"designer wear":
          type==='offers'?"Offers":
          type==='contemporary'?"Contemporary":null
          ,
          path: type === "mens"?'/wear/men': 
          type === "womens" ? '/wear/women':
          type === 'kids'? '/wear/kids':
          type === 'designers'?'/wear/designer':
          type==='offers'?'/wear/offers':
          type==='contemporary'?'/wear/contemporary':null},
        

        ]}
          activePath={
            type === "mens"
              ? "Men’s wear"
              : type === "womens"
              ? "Women’s wear"
              : "Kid’s wear"
          }
        />
      </CustomSection>
      {!mobile && (
        <section className={styles.categoriesToBagSection}>
          <span className={styles.categoriesToBagHeader}>
            Categories to Bag
          </span>

          <CarouselProvider
            naturalSlideWidth={100}
            visibleSlides={small ? 1.2 : customView ? 1.5 : iPade ? 1.5 : 3.1}
            totalSlides={mens_wear_cat.length + 0.45}
            // infinite
            isIntrinsicHeight
            className={styles.carousel}
          >
           
            <Slider style={{marginLeft: "12px"}}>
              {mens_wear_cat.map((item, index) => {
                const { name, slug, cover_image: image } = item;
                return (
                  <Slide
                    index={item.name + index}
                    style={{ marginRight: "1em" }}
                  >
                    <LazyLoadingComp>
                      <CategoriesToBagCard
                        image={image}
                        slug={slug}
                        title={name}
                        type={type}
                      />
                    </LazyLoadingComp>
                  </Slide>
                );
              })}
            </Slider>
            
            <DotGroup style={{ display: "flex", display: "none" }} />

            <div className={styles.sliderBtnDiv}>
              <ButtonBack className={styles.sliderBtnPrev}>
                <IconButton size="small" className={styles.iconBtn}>
                  <NavigateBeforeIcon />
                </IconButton>
              </ButtonBack>
              <ButtonNext className={styles.sliderBtnNext}>
                <IconButton size="small" className={styles.iconBtn}>
                  <NavigateNextIcon />
                </IconButton>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </section>
      )}
      {mobile ? (
        <ForHimMobile type={type} coverImage={cover_image} />
      ) : (
        <ForHimSection type={type} coverImage={cover_image} />
      )}
      <NewCollectionSection type={type} />
      <ExploreTopDesignersSection type={type} />
      <StylishRecommendationSection type={type} />
      <MostLovedStyleSection type={type} />
      <AllThatYouWantSection type={type} />
      <TopOffersOfTheSeasonSection type={type} />
      <CelebrityStyleSection type={type} />
    </Container>
  );
}

function GRID({ name, image, type, slug, mobileView }) {
  return (
    <Grid
      item
      md={mobileView ? 3 : 4}
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <CategoriesToBagCard image={image} slug={slug} type={type} title={name} />
    </Grid>
  );
}
