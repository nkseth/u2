import React from 'react';
import { IconButton, useMediaQuery } from '@material-ui/core';
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

import Skeleton from '@material-ui/lab/Skeleton';
import styles from './Skeleton.module.scss';
const SkeletonLoaderCarousel = ({ mobile }) => {
  const dummyArray = [1, 3, 4, 5];
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:900px)');
  const large = useMediaQuery('(max-width:1330px)');
  const CustomView = useMediaQuery('(max-width:400px)');
  const mobileScreen = useMediaQuery('(max-width:450px)');

  return (
    <>
      {mobile ? (
        <div class='container' style={{ marginTop: '1.5rem' }}>
          <div class='row row-cols-2'>
            {dummyArray?.map((item, i) => (
              <div className='col' style={{ marginBottom: '1rem' }}>
                <Skeleton
                  variant='rect'
                  width={150}
                  height={180}
                  animation='wave'
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <CarouselProvider
            visibleSlides={match ? 1.4 : iPade ? 2.5 : large ? 3 : 4}
            totalSlides={match ? dummyArray?.length + 0.3 : dummyArray?.length}
            isIntrinsicHeight
          >
            <Slider>
              {dummyArray.map(item => {
                return (
                  <Slide>
                    <Skeleton
                      variant='rect'
                      width={
                        mobileScreen
                          ? 210
                          : match
                          ? 210
                          : iPade
                          ? 210
                          : large
                          ? 250
                          : 290
                      }
                      height={
                        mobileScreen
                          ? 190
                          : match
                          ? 220
                          : iPade
                          ? 250
                          : large
                          ? 300
                          : 350
                      }
                      animation='wave'
                    />
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>

          {/* <>
            <DotGroup style={{ display: 'flex', marginTop: '2rem' }} />
            <div className={styles.NavigationContainer}>
              <div className={styles.Carousel_SliderButtonBox}>
                <ButtonBack className={styles.Carousel_SliderButtons}>
                  <IconButton size='small' className={styles.Carousel_iconBtn}>
                    <NavigateBeforeIcon />
                  </IconButton>
                </ButtonBack>
                <ButtonNext className={styles.Carousel_SliderButtons}>
                  <IconButton size='small' className={styles.Carousel_iconBtn}>
                    <NavigateNextIcon />
                  </IconButton>
                </ButtonNext>
              </div>
            </div>
          </> */}
        </>
      )}
    </>
  );
};

export default SkeletonLoaderCarousel;
