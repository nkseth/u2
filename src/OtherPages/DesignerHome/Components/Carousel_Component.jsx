import React from 'react';
import styles from '../Style/Carousel_Component.module.scss';
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
import { LazyLoadingComp } from '../../../utils/LazyLoading';
import { Link } from 'react-router-dom';

const Carousel_Component = ({ items, name }) => {
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:900px)');
  const tab = useMediaQuery('(max-width:768px)');
  const mobile = useMediaQuery('(max-width:479px)');

  const large = useMediaQuery('(max-width:1330px)');
  const CustomView = useMediaQuery('(max-width:400px)');

  const visible = items.length > 4 ? 4.3 : 4;
  return (
    <CarouselProvider
      visibleSlides={
        match ? 1.5 : tab ? 1.9 : iPade ? 2.5 : large ? 3 : visible
      }
      totalSlides={match ? items?.length + 0.3 : items?.length + 1}
      isIntrinsicHeight
    >
      <Slider>
        {items?.map((item, i) => (
          <Slide
            index={i}
            key={item.id.toString()}
            className={styles.items}
            style={
              CustomView
                ? { marginRight: '10px', marginLeft: '10px' }
                : { marginRight: '10px', marginLeft: '10px' }
            }
          >
            <LazyLoadingComp>
              <Link
                to={{
                  pathname: `/designers-product-page/${item.slug}`,
                }}
              >
                <div>
                  <div className={styles.Carousel_Wear}>
                    <div className={styles.Carousel_Items}>
                      <img
                        src={item.cover_image}
                        alt={item.id}
                        // style={customImg}
                      />
                      <Link
                        to={`/designers-product-page/${item.slug}`}
                        className='carousel-items--text'
                      >
                        {item.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </LazyLoadingComp>
          </Slide>
        ))}
      </Slider>
      {!mobile && (
        <>
          <DotGroup
            style={{ display: 'flex', marginTop: '2rem' }}
            className={`${name}-carousel--dot`}
          />
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
        </>
      )}
    </CarouselProvider>
  );
};

export default Carousel_Component;
