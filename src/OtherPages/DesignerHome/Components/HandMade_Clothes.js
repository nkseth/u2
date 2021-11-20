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
import styles from '../Style/HandMade_Clothes.module.scss';
import h1 from '../Images/h1.png';
import h2 from '../Images/h2.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handMadeClothes } from '../../../Redux/actions/designerHomePage';
import { LazyLoadingComp, LazyLoadingImg } from '../../../utils/LazyLoading';
import Carousel_Component from '../../../utils/Carousel_Component/Carousel_Component';
import SkeletonLoaderCarousel from '../../../utils/skeletons/SkeletonLoaderCarousel';
import dotted from '../Images/dottedBg.svg';
const HandMade_Clothes = () => {
  const dispatch = useDispatch();

  const { clothes, loading } = useSelector(state => state.root.handMadeClothes);
  console.log('🚀 ~ file: HandMade_Clothes.js ~ line 29 ~ loading', loading);

  useEffect(() => {
    dispatch(handMadeClothes());
  }, []);

  const theme = useTheme();
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery('(max-width:1000px)');
  const tab = useMediaQuery('(max-width:890px)');
  const mobile = useMediaQuery('(max-width:479px)');
  const large = useMediaQuery('(max-width:1330px)');
  const visible = 4;

  if (!clothes) {
    return null;
  }
  const stylesMobile = {
    background: '#F3F1EE',
    padding: '5rem 3rem 4rem  3rem',
  };
  const stylesCustom = {
    backgroundImage: `url(${dotted})`,
    padding: '5rem 3rem 4rem  3rem',
  };
  return (
    <div>
      <CustomSection
        class={styles.suitwear_content}
        style={mobile ? stylesMobile : stylesCustom}
      >
        <div
          className={`${styles.SuitWear_header} common-headings--1`}
          style={{ color: mobile ? '#000' : '#fff' }}
        >
          Hand Made Clothes
          <CustomDivider
            style={{ height: '2px', background: mobile ? '#000' : '#fff' }}
          />
        </div>
        {/* <Carousel_Component items={clothes} name='handMade' /> */}
        {loading ? (
          <SkeletonLoaderCarousel />
        ) : (
          <CarouselProvider
            visibleSlides={
              match ? 1.5 : tab ? 1.9 : iPade ? 2.5 : large ? 3 : visible
            }
            naturalSlideWidth={100}
            totalSlides={clothes.length}
            isIntrinsicHeight
          >
            <Slider>
              {clothes?.map((item, i) => (
                <Carousel_Component
                  item={item}
                  i={i}
                  name={'homepage-hand--made'}
                  pathName={`/designers-product-page/${item.slug}`}
                />
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

export default HandMade_Clothes;

// const CarouselSlide1 = () => {

//   return (
//     <div style={{ width: "100%" }} >
//       <div className={styles.SuitWear}>
//         <div className={styles.SuitWear_Items}>
//           <img src={c2} alt="items" />
//           <Link to="designers-product-page">Celibrity Style</Link>
//         </div>{" "}

//       </div>
//     </div>
//   );
// };

// const CarouselSlide2 = () => {

//   return (
//     <div className>
//       <div className={styles.SuitWear}>

//         <div className={styles.SuitWear_Items}>
//           <img src={c1} alt="items" />
//           <Link to="designers-product-page">Indian ethinic Wear</Link>
//         </div>{" "}

//       </div>
//     </div>
//   );
// };

// const CarouselSlide3 = () => {

//   return (
//     <div className>
//       <div className={styles.SuitWear}>

//         <div className={styles.SuitWear_Items}>
//           <img src={c2} alt="items" />
//           <Link to="designers-product-page">Indian ethinic Wear</Link>
//         </div>{" "}

//         {/* {media ? null : (
//           <>
//             <div className={styles.SuitWear_Items}>
//               <img src={p3} alt="items" />
//               <Link to="designers-product-page">Wearwww</Link>
//             </div>{" "}
//           </>
//         )} */}
//       </div>
//     </div>
//   );
// };
// const CarouselSlide4 = () => {

//   return (
//     <div className>
//       <div className={styles.SuitWear}>

//         <div className={styles.SuitWear_Items}>
//           <img src={c1} alt="items" />
//           <Link to="designers-product-page">Indian ethinic Wear</Link>
//         </div>{" "}

//         {/* {media ? null : (
//           <>
//             <div className={styles.SuitWear_Items}>
//               <img src={p3} alt="items" />
//               <Link to="designers-product-page">Wearwww</Link>
//             </div>{" "}
//           </>
//         )} */}
//       </div>
//     </div>
//   );
// };
// const CarouselSlide5 = () => {

//   return (
//     <div className>
//       <div className={styles.SuitWear}>

//         <div className={styles.SuitWear_Items}>
//           <img src={c2} alt="items" />
//           <Link to="designers-product-page">Indian ethinic Wear</Link>
//         </div>{" "}

//         {/* {media ? null : (
//           <>
//             <div className={styles.SuitWear_Items}>
//               <img src={p3} alt="items" />
//               <Link to="designers-product-page">Wearwww</Link>
//             </div>{" "}
//           </>
//         )} */}
//       </div>
//     </div>
//   );
// };
// const CarouselSlide6 = () => {

//   return (
//     <div className>
//       <div className={styles.SuitWear}>

//         <div className={styles.SuitWear_Items}>
//           <img src={c1} alt="items" />
//           <Link to="designers-product-page">Indian ethinic Wear</Link>
//         </div>{" "}

//         {/* {media ? null : (
//           <>
//             <div className={styles.SuitWear_Items}>
//               <img src={p3} alt="items" />
//               <Link to="designers-product-page">Wearwww</Link>
//             </div>{" "}
//           </>
//         )} */}
//       </div>
//     </div>
//   );
// };
// const CarouselSlide7 = () => {

//   return (
//     <div className>
//       <div className={styles.SuitWear}>

//         <div className={styles.SuitWear_Items}>
//           <img src={c2} alt="items" />
//           <Link to="designers-product-page">Indian ethinic Wear</Link>
//         </div>{" "}

//         {/* {media ? null : (
//           <>
//             <div className={styles.SuitWear_Items}>
//               <img src={p3} alt="items" />
//               <Link to="designers-product-page">Wearwww</Link>
//             </div>{" "}
//           </>
//         )} */}
//       </div>
//     </div>
//   );
// };
