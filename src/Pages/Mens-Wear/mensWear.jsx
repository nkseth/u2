import React, { useEffect, useState } from 'react';
import MUICarousel from 'react-material-ui-carousel';
import { Carousel } from 'react-responsive-carousel';
import Container from '../../utils/Container/container';
import { Grid, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import CustomSection from '../../utils/Custom Section/section';
import CategoriesToBagCard from './components/Categories-Carousel-Card/card';
import Breadcrumb from '../../utils/Breadcrumb/breadcrumb';
import { Link } from 'react-router-dom';
import styles from './mensWear.module.scss';
//Carousel Images
import shirt from './Images/shirt.png';
import Tshirt from './Images/T-shirt.png';
import blazer from './Images/blazer.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Sections

import ForHimSection from './components/Sections/for-him/forHim';
import NewCollectionSection from './components/Sections/new-collection/newCollection';
import ExploreTopDesignersSection from './components/Sections/explore-top-designers/exploreTopDesigners';
import StylishRecommendationSection from './components/Sections/stylish-recommendation/stylishRecommendation';
import MostLovedStyleSection from './components/Sections/most-loved-style/mostLovedStyle';
import AllThatYouWantSection from './components/Sections/all-that-you-want/allThatYouWant';
import TopOffersOfTheSeasonSection from './components/Sections/top-offer-of-the-season/topOffersOfTheSeason';
import CelebrityStyleSection from './components/Sections/celebrity-style/celebrityStyle';

import {
  getBanner,
  get_mens_wear_cat,
  get_mens_wear_slider,
} from '../../Redux/actions/mensWear';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { LazyLoadingComp } from '../../utils/LazyLoading';

export default function MensWear({ match }) {
  const {
    params: { type },
  } = match;

  const mobileView = useMediaQuery('(max-width:550px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const customView = useMediaQuery('(max-width:1125px)');
  const customView2 = useMediaQuery('(max-width:910px)');
  SwiperCore.use([Pagination]);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    mens_wear_slider,
    mens_wear_cat,
    loading,
    banner: { id, name, description, cover_image },
  } = useSelector(state => state.root.main);

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('xs'));
  const iPade = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(get_mens_wear_slider(type));
    dispatch(get_mens_wear_cat(`${type}-fashion`));
    dispatch(getBanner(type));
  }, [type, dispatch]);

  return (
    <Container footerOnAllView>
      <section className={styles.heroSection}>
        {/* <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus={false}
          showArrows={false}
        >

          {banner?.map(({ id, title, description, image }, i) => {
            return (
              <div
                className={styles.carouselItem}
                key={id}
                style={{ backgroundImage: `url(${image})` }}
              >
                <div>
                  <span>{title}</span>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </Carousel> */}
        {/* <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        > */}
        {/* {banner?.slice(0, 1).map(({ id, title, description, image }, i) => { */}
        {/* return ( */}
        {/* // <SwiperSlide className={styles.swiper_slide}> */}
        <div
          className={styles.carouselItem}
          key={id}
          style={{ backgroundImage: `url(${cover_image})` }}
        >
          <div>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        </div>
        {/* // </SwiperSlide> */}
        {/* ); */}
        {/* })} */}
        {/* </Swiper> */}
      </section>
      <CustomSection style={{ padding: '2rem 1rem' }}>
        <Breadcrumb
          style={{ paddingTop: tabView && '2rem 0' }}
          path='Designer Home /'
          activePath={
            type === 'mens'
              ? 'Men’s wear'
              : type === 'womens'
              ? 'Women’s wear'
              : 'Kid’s wear'
          }
        />
      </CustomSection>
      <section className={styles.categoriesToBagSection}>
        <span className={styles.categoriesToBagHeader}>Categories to Bag</span>

         <GRIDLAPTOP
          data={mens_wear_cat}
          mobileView={mobileView}
          tabView={tabView}
          customView={customView}
          customView2={customView2}
          type={type}
        />


        <CarouselProvider
          naturalSlideWidth={100}
          visibleSlides={small ? 1 : customView ? 2 : iPade ? 1 : 3}
          totalSlides={mens_wear_cat.length}
          infinite
          isIntrinsicHeight
          className={styles.carousel}
        >
          <Slider>
            {mens_wear_cat.map((item, index) => {
              const { name, slug, cover_image: image } = item;
              return (
                <Slide index={item.name + index} style={{ marginRight: '4em' }}>
                  <LazyLoadingComp>
                    <CategoriesToBagCard
                      image={image}
                      slug={slug}
                      title={name}
                    />
                  </LazyLoadingComp>
                </Slide>
              );
            })}
          </Slider>
          <DotGroup style={{ display: 'flex', display: 'none' }} />

          <div className={styles.sliderBtnDiv}>
            <ButtonBack className={styles.sliderBtnPrev}>
              <IconButton size='small' className={styles.iconBtn}>
                <NavigateBeforeIcon />
              </IconButton>
            </ButtonBack>
            <ButtonNext className={styles.sliderBtnNext}>
              <IconButton size='small' className={styles.iconBtn}>
                <NavigateNextIcon />
              </IconButton>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </section>
      <ForHimSection type={type} loading={loading} />
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
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <CategoriesToBagCard image={image} slug={slug} type={type} title={name} />
    </Grid>
  );
}

function GRIDLAPTOP({
  mobileView,
  type,
  tabView,
  customView,
  customView2,
  data,
}) {
  return (
    <MUICarousel
      animation='slide'
      indicators={false}
      className={styles.menswear_categories}
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      fullHeightHover={false}
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
          color: '#000',
          height: '100px',
          width: '10px',
          marginTop: '0em',
        },
      }}
    >
      <Grid
        container
        // style={{ width: '100%', margin: 'auto' }}
        justifyContent={'center'}
        // justifyContent={!customView ? 'center' : 'space-evenly'}
        wrap={'nowrap'}
        spacing={0}
      >
        {!customView2 ? (
          data?.length > 2 ? (
            <GRID
              name={data[2].name}
              slug={data[2].slug}
              type={type}
              image={data[2].cover_image}
              mobileView={mobileView}
            />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        {data?.length > 0 ? (
          <GRID
            name={data[0].name}
            type={type}
            slug={data[0].slug}
            image={data[0].cover_image}
            mobileView={mobileView}
          />
        ) : (
          <></>
        )}
        {!customView ? (
          <>
            {data?.length > 3 ? (
              <GRID
                name={data[4].name}
                type={type}
                slug={data[4].slug}
                image={data[4].cover_image}
                mobileView={mobileView}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </Grid>

      <Grid
        container
        // style={{ width: "100%", margin: "auto" }}
        justifyContent={!customView ? 'center' : 'space-evenly'}
        wrap={'nowrap'}
        spacing={0}
      >
        {!customView2 ? (
          data?.length > 3 ? (
            <GRID
              name={data[3].name}
              type={type}
              slug={data[3].slug}
              image={data[3].cover_image}
              mobileView={mobileView}
            />
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        {data?.length > 1 ? (
          <GRID
            name={data[1].name}
            slug={data[1].slug}
            type={type}
            image={data[1].cover_image}
            mobileView={mobileView}
          />
        ) : (
          <></>
        )}
        {!customView ? (
          <>
            {data?.length > 5 ? (
              <GRID
                name={data[5].name}
                slug={data[5].slug}
                type={type}
                image={data[5].cover_image}
                mobileView={mobileView}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </Grid>
    </MUICarousel>
  );
}
