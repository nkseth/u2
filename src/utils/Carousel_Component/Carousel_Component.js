import React from 'react';
import styles from './Carousel_Component.module.scss';
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
import './carouselCommon.scss';
import { Link } from 'react-router-dom';
import { LazyLoadingComp } from '../LazyLoading';
const Carousel_Component = ({ item, i, name, pathName }) => {
  console.log('🚀 ~ file: Carousel_Component.js ~ line 18 ~ name', name);
  const CustomView = useMediaQuery('(max-width:400px)');
  return (
    <Slide
      index={i}
      // key={item.id.toString()}
      // className={styles.items}
      style={
        CustomView && i !== i
          ? { marginRight: '10px', marginLeft: '10px' }
          : { marginRight: '5px', marginLeft: '5px' }
      }
    >
      {/* <LazyLoadingComp> */}
      <Link
        to={{
          pathname: `${pathName}`,
        }}
      >
        <div className={`${styles.Carousel_Wear} ${name}`}>
          <div className={styles.Carousel_Items}>
            <img
              src={item.cover_image || item.image}
              alt={item.id}
              // style={customImg}
            />
            <Link to={`${pathName}`} className='carousel-items--text'>
              {item.name || item.title}
            </Link>
          </div>
        </div>
      </Link>
      {/* </LazyLoadingComp> */}
    </Slide>
  );
};

export default Carousel_Component;
