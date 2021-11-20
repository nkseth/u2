import React, { useEffect } from 'react';
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
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomSection from '../../../../../utils/Custom Section/section';
import CarouselSlide from './Components/Slide/slide';
import styles from './exploreTopDesigners.module.scss';
import { useDispatch, useSelector } from 'react-redux';
//icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { get_top_designers } from '../../../../../Redux/actions/mensWear';
import { topDesigner } from '../../../../../Redux/actions/designerHomePage';
import Carousel_Component from '../../../../../utils/Carousel_Component/Carousel_Component';
export default function ExploreTopDesignersSection({ type }) {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const width550 = useMediaQuery('(max-width:550px)');
  const width768 = useMediaQuery('(max-width:768px)');
  const width835 = useMediaQuery('(max-width:835px)');
  const width910 = useMediaQuery('(max-width:910px)');
  const width1125 = useMediaQuery('(max-width:1125px)');

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

  useEffect(() => {
    // dispatch(get_top_designers());
    dispatch(topDesigner());
  }, []);

  // const { top_designers } = useSelector((state) => state.root.main);
  const { designers } = useSelector(state => state.root.topDesigner);
  console.log(
    '🚀 ~ file: exploreTopDesigners.jsx ~ line 59 ~ ExploreTopDesignersSection ~ designers',
    designers
  );
  // console.log(top_designers);
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:1000px)');
  const tab = useMediaQuery('(max-width:890px)');
  const mobile = useMediaQuery('(max-width:479px)');
  const large = useMediaQuery('(max-width:1330px)');

  const visible = designers?.length > 4 ? 4.3 : 4;

  return (
    <CustomSection
      class='explore_top_designer'
      style={{ paddingTop: '5rem', paddingBottom: '3rem' }}
    >
      <div
        className={`${styles.header} mens-common-headings--1`}
        style={{ fontStyle: 'italic' }}
      >
        Explore Top Designers
      </div>
      <CarouselProvider
        visibleSlides={
          match ? 1.5 : tab ? 1.9 : iPade ? 2.5 : large ? 3 : visible
        }
        naturalSlideWidth={100}
        totalSlides={designers.length}
        isIntrinsicHeight
      >
        <Slider>
          {designers?.map((item, index) => {
            console.log(
              '🚀 ~ file: exploreTopDesigners.jsx ~ line 113 ~ {designers?.map ~ item',
              item
            );

            return (
              // <Slide index={index}>
              //   <div className={styles.Top_Designer}>
              //     <div className={styles.Top_Designer_Items}>
              //       <Link to={`/designer-products/${marchent_id}`}>
              //         <img src={cover_image} alt={id} />
              //         <div style={{ marginTop: '25px' }}>{name}</div>
              //       </Link>
              //     </div>
              //   </div>
              // </Slide>
              <Carousel_Component
                item={item}
                i={index}
                name={'mens-top--designer'}
                pathName={`/designer-products/${item.shop_id}`}
              />
            );
          })}
        </Slider>
        <DotGroup style={{ display: 'flex' }} />
        <div className={styles.carouselNavigationDiv}>
          <Link style={{ visibility: 'hidden' }}>SEE All</Link>
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
  );
}
