import { useSelector } from 'react-redux';
import styles from '../Style/TopCategoryMobile.module.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const TopCategoryMobile = () => {
  const category = [
    {
      name: 'New In',
      image: 'https://dhaatri.info/storage/images/6143555e3e729.jpg',
      to: '/',
    },
    {
      name: 'Men',
      image: 'https://dhaatri.info/storage/images/6143555e3e729.jpg',
      to: '/wear/mens',
    },
    {
      name: 'Women  ',
      image: 'https://dhaatri.info/storage/images/6143555e3e729.jpg',
      to: '/wear/women',
    },
    {
      name: 'Kids',
      image: 'https://dhaatri.info/storage/images/6143555e3e729.jpg',
      to: '/wear/kids',
    },
    {
      name: 'Offers',
      image: 'https://dhaatri.info/storage/images/6143555e3e729.jpg',
      to: '/offers',
    },
    {
      name: 'Trending',
      image: 'https://dhaatri.info/storage/images/6143555e3e729.jpg',
    },
  ];

  return (
    <>
      {/* <div className={styles.main}>
        {category.map(cat => {
          return (
            <div className={styles.category}>
              <img src={cat.image} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div> */}
      <div>
        <Swiper slidesPerView={4} spaceBetween={10}>
          {category.map(cat => {
            return (
              <SwiperSlide>
                <Link to={cat.to} className={styles.category}>
                  <img src={cat.image} alt={cat.name} />
                  <p>{cat.name}</p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TopCategoryMobile;
