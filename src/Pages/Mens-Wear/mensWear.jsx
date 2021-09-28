import React, { useEffect, useState } from 'react';
import MUICarousel from 'react-material-ui-carousel';
import { Carousel } from 'react-responsive-carousel';
import Container from '../../utils/Container/container';
import { Grid, useMediaQuery } from '@material-ui/core';
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

export default function MensWear({ match }) {
  const {
    params: { type },
  } = match;

  const mobileView = useMediaQuery('(max-width:550px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const customView = useMediaQuery('(max-width:1125px)');
  const customView2 = useMediaQuery('(max-width:910px)');

  const dispatch = useDispatch();
  const history = useHistory();
  const { mens_wear_slider, mens_wear_cat, banner } = useSelector(
    state => state.root.main
  );

  useEffect(() => {
    dispatch(get_mens_wear_slider());
    dispatch(get_mens_wear_cat(`${type}-fashion`));
    dispatch(getBanner(type, 1));
  }, [type, dispatch]);

  return (
    <Container footerOnAllView>
      <section className={styles.heroSection}>
        <Carousel
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
        </Carousel>
      </section>
      <CustomSection style={{ padding: tabView && '0 1rem' }}>
        <Breadcrumb
          style={{ paddingTop: tabView && '0' }}
          path='Designer Home /'
          activePath={
            type == 'mens'
              ? 'Men’s wear'
              : type == 'womens'
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
        />
      </section>
      <ForHimSection type={type} />
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

function GRID({ name, image, slug, mobileView }) {
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
      <CategoriesToBagCard image={image} slug={slug} title={name} />
    </Grid>
  );
}

function GRIDLAPTOP({ mobileView, tabView, customView, customView2, data }) {
  return (
    <MUICarousel
      animation='slide'
      autoPlay={true}
      indicators={false}
      className={styles.menswear_categories}
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      navButtonsAlwaysInvisible={mobileView}
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
