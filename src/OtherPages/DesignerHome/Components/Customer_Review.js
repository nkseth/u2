import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';
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
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';

import CustomSection from '../../../utils/Custom Section/section';
import CustomDivider from '../../../utils/Custom Divider/divider';
import { getCustomerReviews } from '../../../Redux/actions/designerHomePage';
import { LazyLoadingComp } from '../../../utils/LazyLoading';
import CardCustomerReview from '../../../Commons/Cards/CardCustomerReview/CardCustomerReview';

import styles from '../Style/Customer_Review.module.scss';

const Customer_Review = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector(state => state.root.customerReviews);

  const mobile = useMediaQuery('(max-width:450px)');

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('xs'));
  const iPade = useMediaQuery('(max-width:1100px)');

  const visibleSlides = mobile ? 1.4 : match ? 1 : iPade ? 2 : 3;

  const customStyle = {
    padding: '5rem 3rem',
    background: '#fff',
  };

  useEffect(() => {
    dispatch(getCustomerReviews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='customer_review_content'>
      <CustomSection class={styles.customerreview} style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.Customer_Review_header} common-headings--1`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Customer's Reviews
          <CustomDivider
            style={{
              height: '1px',
              background: '#6A5B40',
              marginLeft: 10,
              marginTop: 5,
            }}
          />
        </div>

        <CarouselProvider
          visibleSlides={visibleSlides}
          totalSlides={reviews.length}
          isIntrinsicHeight
        >
          {!mobile ? (
            <Slider>
              {reviews.length > 0 &&
                reviews.map(
                  (
                    {
                      id,
                      created_at,
                      images,
                      description,
                      customers_name,
                      point,
                    },
                    i
                  ) => (
                    <Slide index={i} key={id + i}>
                      <div className={styles.Customer_Review}>
                        <div className={styles.Customer_Review_Items}>
                          <span style={{ fontSize: '14px', color: '#6c6c6c' }}>
                            {created_at}
                          </span>
                          <img src={images} alt='items' />
                          <h4>{customers_name}</h4>
                          <ReactStars
                            size={30}
                            activeColor='#ffd700'
                            value={point}
                            edit={false}
                          />

                          <p>
                            {description ||
                              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eaque labore tempore nulla consequatur dicta id vel doloribus necessitatibus totam est, itaque in veniam veritatis cumque voluptatibus, aperiam doloremque?'}
                          </p>
                        </div>
                      </div>
                    </Slide>
                  )
                )}
            </Slider>
          ) : (
            <div class='container'>
              <div class='row'>
                <div class='col'>
                  <Slider>
                    {reviews.length > 0 &&
                      reviews.map(
                        (
                          {
                            id,
                            created_at,
                            images,
                            description,
                            customers_name,
                            point,
                          },
                          i
                        ) => (
                          <Slide index={i} key={id + i}>
                            <LazyLoadingComp>
                              <CardCustomerReview
                                images={
                                  'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
                                }
                                created_at={created_at}
                                customers_name={customers_name}
                                point={point}
                                description={description}
                              />
                            </LazyLoadingComp>
                          </Slide>
                        )
                      )}
                  </Slider>
                </div>
              </div>
            </div>
          )}

          <DotGroup className={styles.dot_group} />
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
        </CarouselProvider>
      </CustomSection>
    </div>
  );
};

export default Customer_Review;
