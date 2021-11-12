import { useSelector } from 'react-redux';
import styles from '../Style/TopCategoryMobile.module.scss';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import Men from '../Images/TopCategoryMobile/mens.svg';
import women from '../Images/TopCategoryMobile/women.svg';
import newIn from '../Images/TopCategoryMobile/newIn.svg';
import kids from '../Images/TopCategoryMobile/kids.svg';
import offers from '../Images/TopCategoryMobile/offers.svg';
import trending from '../Images/TopCategoryMobile/trending.svg';
const TopCategoryMobile = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const category = [
    {
      name: 'New In',
      image: newIn,
      to: '/',
    },
    {
      name: 'Men',
      image: Men,
      to: '/wear/mens',
    },
    {
      name: 'Women  ',
      image: women,
      to: '/wear/women',
    },
    {
      name: 'Kids',
      image: kids,
      to: '/wear/kids',
    },
    {
      name: 'Offers',
      image: offers,
      to: '/offers',
    },
    {
      name: 'Trending',
      image: trending,
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
        <Swiper slidesPerView={4 + 0.8} spaceBetween={10}>
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
