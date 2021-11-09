import { useSelector } from 'react-redux';
import styles from '../Style/TopCategoryMobile.module.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import Skeleton from '@material-ui/lab/Skeleton';

const TopCategoryMobile = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
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
                {loading ? (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      margin: '.5rem auto',
                      gap: '5px',
                    }}
                  >
                    <Skeleton
                      variant='circle'
                      width={'50px'}
                      height={'50px'}
                      animation='wave'
                    />
                    <Skeleton variant='text' height='15px' />
                  </div>
                ) : (
                  <Link to={cat.to} className={styles.category}>
                    <img src={cat.image} alt={cat.name} />
                    <p>{cat.name}</p>
                  </Link>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TopCategoryMobile;
