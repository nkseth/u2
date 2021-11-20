import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, useMediaQuery, useTheme, Button } from '@material-ui/core';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomSection from '../../../../../utils/Custom Section/section';
import CustomDivider from '../../../../../utils/Custom Divider/divider';
import CarouselSlide from './Components/Slide/slide';
import styles from './topOffersOfTheSeason.module.scss';
//icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
//images
import TOP1 from './Images/TOP1.jpg';
import TOP2 from './Images/TOP2.jpg';
import TOP3 from './Images/TOP3.jpg';
import TOP4 from './Images/TOP4.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { get_top_offers } from '../../../../../Redux/actions/mensWear';
import { ReactComponent as Icon } from '../../../../../Images/icons/icon.svg';

export default function TopOffersOfTheSeasonSection({ type }) {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const width550 = useMediaQuery('(max-width:550px)');
  const width768 = useMediaQuery('(max-width:768px)');
  const width835 = useMediaQuery('(max-width:835px)');
  const width910 = useMediaQuery('(max-width:910px)');
  const width1125 = useMediaQuery('(max-width:1125px)');
  const mobileView = useMediaQuery('(max-width:550px)');

  const getVisibleCardCount = () => {
    return extraSmall
      ? 1
      : small
      ? 1.5
      : width550
      ? 2
      : width768
      ? 2
      : width835
      ? 2
      : width910
      ? 3
      : width1125
      ? 3
      : 4;
  };

  const dispatch = useDispatch();
  const { top_offers } = useSelector(state => state.root.main);

  useEffect(() => {
    dispatch(get_top_offers(`${type}`));
  }, [type, dispatch]);

  return (
    <div>
      {!mobileView ? (
        <CustomSection
          style={{
            padding: '4rem',
            backgroundColor: '#9d8e73',
          }}
        >
          <div className={styles.header}>
            Top offer of the season
            <CustomDivider style={{ backgroundColor: '#fff' }} />
          </div>
          <CarouselProvider
            naturalSlideWidth={100}
            visibleSlides={getVisibleCardCount()}
            totalSlides={top_offers.length + 0.3}
            isIntrinsicHeight
          >
            <Slider>
              {top_offers.map((item, index) => {
                console.log(item);
                return (
                  <Slide
                    index={item.name + index}
                    style={{ marginRight: '1em' }}
                  >
                    <CarouselSlide
                      image1={item.cover_image}
                      title={item.name}
                      description={item.description}
                      slug={item.slug}
                      type={type}
                    />
                  </Slide>
                );
              })}
            </Slider>
            <DotGroup style={{ display: 'flex' }} />
            <div className={styles.carouselNavigationDiv}>
              <Link to='/offers'>SEE All</Link>
              <div className={styles.sliderBtnDiv}>
                <ButtonBack className={styles.sliderBtn}>
                  <IconButton size='small' className={styles.iconBtn}>
                    <NavigateBeforeIcon />
                  </IconButton>
                </ButtonBack>
                <ButtonNext className={styles.sliderBtn}>
                  <IconButton size='small' className={styles.iconBtn}>
                    <NavigateNextIcon />
                  </IconButton>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </CustomSection>
      ) : (
        <CustomSection style={{ backgroundColor: '#F3F1EE' }}>
          <div className={styles.title}>
            <h4>Top Offers of the Season </h4>
            <CustomDivider
              style={{
                marginLeft: '5px',
                height: '1px',
                background: '#857250',
              }}
            />
          </div>
          {/* <h3>123456</h3> */}
          <div className={styles.topOffer_items}>
            {top_offers?.slice(0, 6).map((item, index) => {
              console.log(item);
              return (
                <div className={styles.topOffer_item}>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <img src={item?.cover_image} />
                    <h4
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        minWidth: '120px',
                        color: '#fff',
                      }}
                    >
                      {item.description}
                    </h4>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Button className={styles.moreButton}>View more</Button>
            <Icon style={{ marginLeft: '12px' }} />
          </div>
        </CustomSection>
      )}
    </div>
  );
}
