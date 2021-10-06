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
import CustomSection from '../../../utils/Custom Section/section';
import CustomDivider from '../../../utils/Custom Divider/divider';
import styles from '../Style/Customer_Review.module.scss';
import ReactStars from 'react-rating-stars-component';
import { useEffect, useState } from 'react';
import { getCustomerReviews } from '../../../Redux/actions/designerHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadingComp, LazyLoadingImg } from '../../../utils/LazyLoading';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const Customer_Review = () => {
  const dispatch = useDispatch();
  const customStyle = {
    padding: '5rem 3rem',
    background: '#fff',
  };
  const [visible, setvisible] = useState(4);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('xs'));
  const iPade = useMediaQuery('(max-width:1100px)');
  const mobileView = useMediaQuery('(max-width:1024px)');
  const { reviews } = useSelector(state => state.root.customerReviews);
  useEffect(() => {
    dispatch(getCustomerReviews());
  }, []);
  return (
    <div className='customer_review_content'>
      <CustomSection class={styles.customerreview} style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.Customer_Review_header}`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Customer's Reviews{' '}
          {mobileView ? (
            <></>
          ) : (
            <CustomDivider
              style={{ height: '1px', background: '#6A5B40', marginLeft: 10 }}
            />
          )}
        </div>

        <CarouselProvider
          visibleSlides={match ? 1 : iPade ? 2 : 3}
          totalSlides={reviews.length}
          isIntrinsicHeight
        >
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
                    </LazyLoadingComp>
                  </Slide>
                )
              )}
          </Slider>
          <DotGroup
            // style={{ display: 'flex', background: 'black' }}
            className={styles.dot_group}
          />
          <div className={styles.NavigationContainer}>
            {/* <Link style={{ color: '#0A0A0A' }} to='/'>
              SEE All
            </Link> */}
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

const CarouselSlide = review => {
  const { created_at, customers_name, description, id, images, point } = review;
  console.log(created_at, point);
  const media = useMediaQuery(`(max-width:768px)`);
  return (
    <div className={styles.Customer_Review}>
      <div className={styles.Customer_Review_Items}>
        <span style={{ fontSize: '14px', color: '#6c6c6c' }}>{created_at}</span>
        <img src={images} alt='items' />
        <h4>{customers_name}</h4>
        <ReactStars
          size={30}
          activeColor='#ffd700'
          value={point}
          edit={false}
        />

        <p>{description}</p>
      </div>
    </div>
  );
};
