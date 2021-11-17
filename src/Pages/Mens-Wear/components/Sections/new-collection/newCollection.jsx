import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IconButton, Grid, useMediaQuery, Button, useTheme } from '@material-ui/core';
import CustomSection from '../../../../../utils/Custom Section/section';
import CarouselSlide from './Components/Slide/slide';
import styles from './newCollection.module.scss';
//icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
//BackGroud Image
import bg from '../../../Images/bg.png';
import { useDispatch, useSelector } from 'react-redux';
import { get_new_collection } from '../../../../../Redux/actions/mensWear';
import Loader from '../../../../../utils/Loader/Loader';
import ProductCard from '../../../../Designers-Product-Page/Components/product-card/card'
import { style } from '@mui/system';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CustomDivider from "../../../../../utils/Custom Divider/divider"
import { ReactComponent as Icon } from "../../../../../Images/icons/icon.svg"
import dottedBg from '../../../Images/background.svg'

export default function NewCollectionSection({ type }) {
  const dispatch = useDispatch();
  const { new_collection } = useSelector(state => state.root.main);
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const customView = useMediaQuery("(max-width:1125px)");
  const customView2 = useMediaQuery("(max-width:910px)");
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

  // console.log(new_collection);
  useEffect(() => {
    // const group = type === "mens" ? "1" : type === "womens" ? "1" : "1";
    dispatch(get_new_collection(`${type}`, 1));
  }, [type, dispatch]);

  return (
    <CustomSection style={{ backgroundImage: `url("${dottedBg}")` ,paddingTop: !mobileView &&'5rem', paddingBottom: '3rem'}}>
      {!new_collection ? (
        <Loader />
      ) : (
        <div >
          {
            mobileView ? <h1 className={styles.heading}>New Collections</h1>
              :
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 className={styles.heading}>New Collections</h1>
                <CustomDivider style={{ height: '1px', background: 'white' }} />
              </div>
          }

          <CarouselProvider
            visibleSlides={getVisibleCardCount()}
            naturalSlideWidth={100}
            totalSlides={Object.keys(new_collection).length}
            isIntrinsicHeight
          >
            <Slider  style={{paddingTop:"45px"}}>
              {new_collection?.map((item, index) => {
                console.log(item)
                return (
                  <Slide index={index}>
                    <div className={styles.Top_Designer}>
                      <div className={styles.Top_Designer_Items}>
                        <img src={item.image} alt={index} />
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <DotGroup style={{ display: 'flex' }} />
            <div className={styles.carouselNavigationDiv}>
              <Link style={{color:"white"}}>SEE All</Link>
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
        </div>
      )
      }
    </CustomSection >
  );
}
