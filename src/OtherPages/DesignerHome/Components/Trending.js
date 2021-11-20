import { Crop32Rounded, Crop32Sharp } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import CustomDivider from '../../../utils/Custom Divider/divider';
import styles from '../Style/Trending.module.scss';
import { topTrending } from '../../../Redux/actions/designerHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadingComp, LazyLoadingImg } from '../../../utils/LazyLoading';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import Carousel_Component from './Carousel_Component';
import Carousel_Component from '../../../utils/Carousel_Component/Carousel_Component';
import SkeletonLoaderCarousel from '../../../utils/skeletons/SkeletonLoaderCarousel';

const Trending = () => {
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:1000px)');
  const tab = useMediaQuery('(max-width:890px)');
  const mobile = useMediaQuery('(max-width:479px)');
  const large = useMediaQuery('(max-width:1330px)');

  const CustomView = useMediaQuery('(max-width:400px)');
  const dispatch = useDispatch();
  const imageSrc =
    'https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  const baseStyle = {
    padding: '101px 3rem 5rem 3rem',
    background: '  #F3F1EE',
  };

  // const { push } = useLocation();
  const { push } = useHistory();
  const mobileView = useMediaQuery('(max-width:1024px)');

  const { items, loading } = useSelector(state => state.root.trending);
  console.log('🚀 ~ file: Trending.js ~ line 44 ~ Trending ~ loading', loading);

  useEffect(async () => {
    dispatch(topTrending());
  }, []);

  const visible = 4;
  if (items) {
    return (
      <div className={styles.trending_content} style={baseStyle}>
        <div
          className={`${styles.Trending_header} common-headings--1`}
          style={{ color: '#1A202C' }}
        >
          Trending
          <CustomDivider style={{ height: '1px', background: '#857250' }} />
        </div>
        {!tab ? (
          loading ? (
            <SkeletonLoaderCarousel />
          ) : (
            <CarouselProvider
              visibleSlides={
                match ? 1.5 : tab ? 1.9 : iPade ? 2.5 : large ? 3 : visible
              }
              naturalSlideWidth={100}
              totalSlides={items.length}
              isIntrinsicHeight
            >
              <Slider>
                <>
                  {items?.map((item, i) => {
                    return (
                      <Carousel_Component
                        item={item}
                        i={i}
                        name={'homepage-trending-wear'}
                        pathName={''}
                      />
                    );
                  })}
                </>
              </Slider>
              <DotGroup
                style={{ display: 'flex', marginTop: '2rem' }}
                className='trending-carousel--dot'
              />
              <div className={styles.NavigationContainer}>
                <div className={styles.Carousel_SliderButtonBox}>
                  <ButtonBack className={styles.Carousel_SliderButtons}>
                    <IconButton
                      size='small'
                      className={styles.Carousel_iconBtn}
                    >
                      <NavigateBeforeIcon />
                    </IconButton>
                  </ButtonBack>
                  <ButtonNext className={styles.Carousel_SliderButtons}>
                    <IconButton
                      size='small'
                      className={styles.Carousel_iconBtn}
                    >
                      <NavigateNextIcon />
                    </IconButton>
                  </ButtonNext>
                </div>
              </div>
            </CarouselProvider>
          )
        ) : (
          <div className={styles.Trending}>
            {items?.map(item => (

              <>
                {loading ? (
                  <Skeleton
                    variant='rect'
                    width='100%'
                    height='210px'
                    style={{ margin: '0.5rem' }}
                    animation='wave'
                  />
                ) : (
                  <Link
                    to={{ pathname: `/designers-product-page/${item.slug}` }}
                  >
                    <div key={item.name} className={styles.Trending_Items}>
                      <img src={item.cover_image} />

                      <div>
                        <p className='carousel-items--text'> {item.name}</p>
                      </div>
                    </div>
                  </Link>
                )}
              </>

              <Link to={{ pathname: `/designers-product-page/${item.slug}` }}>
                <div key={item.name} className={styles.Trending_Items}>
                  <LazyLoadingImg image={item.cover_image} />
                  <div>
                    <p className='carousel-items--text'> {item.name}</p>
                  </div>
                </div>
              </Link>

            ))}
          </div>
        )}
        {/* <div className={`${styles.Trending_Button}`}>
          <Link to='/designers-product-page/blazers-and-coats'>
            <Button>View all</Button>
          </Link>
        </div> */}
      </div>
    );
  } else {
    return null;
  }
};

export default Trending;
