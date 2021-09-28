import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { get_mens_wear_slider } from '../../../Redux/actions/mensWear';
import styles from '../Style/DesignerWear.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../Style/common.scss';
const DesignerWear = () => {
  SwiperCore.use([Pagination]);
  const dispatch = useDispatch();
  const backgroundURL =
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80';

  const { mens_wear_slider, mens_wear_cat } = useSelector(
    state => state.root.main
  );
  useEffect(() => {
    dispatch(get_mens_wear_slider());
  }, []);

  const history = useHistory();

  return (
    <>
      <section className={styles.DesignerWear}>
        {/* <Carousel
          animation='slide'
          infiniteLoop
          showStatus={false}
          showArrows={false}
        >
          {mens_wear_slider.map(item => {
            return (
              <div
                // onClick={() => history.push(item.link)}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className={styles.carouselItem}
              >
                <div className={styles.itemDetails}>
                  <h1>{item.title || 'Categories'}</h1>
                  <p>{item.sub_title}</p>
                </div>
              </div>
            );
          })}
        </Carousel> */}
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className=''
        >
          {mens_wear_slider.map(item => {
            return (
              <SwiperSlide>
                <div
                  // onClick={() => history.push(item.link)}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className={styles.carouselItem}
                >
                  <div className={styles.itemDetails}>
                    <h1>{item.title || 'Categories'}</h1>
                    <p>{item.sub_title}</p>
                  </div>
                  <Button className={styles.button}>
                    Switch To Branded <ArrowRightAltIcon />{' '}
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default DesignerWear;
