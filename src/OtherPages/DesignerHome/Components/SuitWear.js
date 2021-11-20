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
import styles from '../Style/SuitWear.module.scss';
import p1 from '../Images/111.png';
import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import p4 from '../Images/p4.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { suitWears } from '../../../Redux/actions/designerHomePage';
import c1 from '../Images/111.png';
import c2 from '../Images/c2.jpg';
import { LazyLoadingComp, LazyLoadingImg } from '../../../utils/LazyLoading';
// import Carousel_Component from './Carousel_Component';
import Carousel_Component from '../../../utils/Carousel_Component/Carousel_Component';
import SkeletonLoaderCarousel from '../../../utils/skeletons/SkeletonLoaderCarousel';
import dotted from '../Images/dottedBg.svg';
const SuitWear = () => {
  const dispatch = useDispatch();

  const { suitWearItems, loading } = useSelector(state => state.root.suitWears);
  console.log('🚀 ~ file: SuitWear.js ~ line 34 ~ SuitWear ~ loading', loading);
  const theme = useTheme();

  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:1000px)');
  const tab = useMediaQuery('(max-width:890px)');
  const mobile = useMediaQuery('(max-width:479px)');
  const large = useMediaQuery('(max-width:1330px)');

  const visible = 4;

  useEffect(() => {
    dispatch(suitWears());
  }, []);

  if (!suitWearItems) {
    return null;
  }

  const stylesMobile = {
    background: '#F3F1EE',
    padding: '5rem 3rem 4rem  3rem',
  };
  const stylesCustom = {
    backgroundImage: `url(${dotted})`,
    padding: '5rem 3rem 4rem 3rem',
  };

  return (
    <div>
      <CustomSection
        class={styles.suitwear_content}
        style={mobile ? stylesMobile : stylesCustom}
      >
        <div
          className={`${styles.SuitWear_header} common-headings--1`}
          style={{ color: mobile ? '#1A202C' : '#fff' }}
        >
          Suit Wear{' '}
          <CustomDivider
            style={{ height: '2px', background: mobile ? '#000' : '#fff' }}
          />
        </div>
        {/* <Carousel_Component items={suitWearItems} name='suitWear' /> */}
        {loading ? (
          <SkeletonLoaderCarousel />
        ) : (
          <CarouselProvider
            visibleSlides={
              match ? 1.5 : tab ? 1.9 : iPade ? 2.5 : large ? 3 : visible
            }
            naturalSlideWidth={100}
            totalSlides={suitWearItems.length}
            isIntrinsicHeight
          >
            <Slider>
              {suitWearItems?.map((item, i) => (
                <Carousel_Component
                  item={item}
                  i={i}
                  name={'homepage-suit--wear'}
                  pathName={''}
                />
                // <Slide
                //   index={i}
                //   key={item.id.toString()}
                //   style={
                //     CustomView
                //       ? { marginRight: '10px', marginLeft: '10px' }
                //       : { marginRight: '20px', marginLeft: '20px' }
                //   }
                //   className={styles.items}
                // >
                //   <LazyLoadingComp>
                //     <Link
                //       to={{
                //         pathname: `/designers-product-page/${item.slug}`,
                //       }}
                //     >
                //       <div>
                //         <div className={styles.SuitWear}>
                //           <div className={styles.SuitWear_Items}>

                //             <img src={item.cover_image} alt={item.id} />
                //             <Link
                //               to={`/designers-product-page/${item.slug} `}
                //               className='carousel-items--text'
                //             >
                //               {item.name}
                //             </Link>
                //           </div>
                //         </div>
                //       </div>
                //     </Link>
                //   </LazyLoadingComp>
                // </Slide>
              ))}
            </Slider>
            {!mobile && (
              <>
                <DotGroup style={{ display: 'flex', marginTop: '2rem' }} />
                <div className={styles.NavigationContainer}>
                  <div className={styles.Carousel_SliderButtonBox}>
                    <ButtonBack className={styles.Carousel_SliderButtons}>
                      <IconButton
                        size='small'
                        className={styles.Carousel_iconBtn}
                      >
                        <NavigateBeforeIcon />
                      </IconButton>
                    </ButtonBack>
                    <ButtonNext className={styles.Carousel_SliderButtons}>
                      <IconButton
                        size='small'
                        className={styles.Carousel_iconBtn}
                      >
                        <NavigateNextIcon />
                      </IconButton>
                    </ButtonNext>
                  </div>
                </div>
              </>
            )}
          </CarouselProvider>
        )}
      </CustomSection>
    </div>
  );
};

export default SuitWear;
