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
import Carousel_Component from './Carousel_Component';

const HandMade_Clothes = () => {
  const dispatch = useDispatch();
  const mobile = useMediaQuery('(max-width:420px)');

  const customStyle = {
    padding: '5rem 3rem 4rem  3rem',
    background: mobile ? '#F3F1EE' : '#938368',
  };
  const { clothes } = useSelector(state => state.root.handMadeClothes);

  const visible = 4.9;
  useEffect(() => {
    dispatch(handMadeClothes());
  }, []);

  const theme = useTheme();
  const match = useMediaQuery('(max-width:630px)');
  const iPade = useMediaQuery(theme.breakpoints.down('sm'));
  const large = useMediaQuery(theme.breakpoints.down('1330px'));
  const CustomView = useMediaQuery('(max-width:400px)');

  if (!clothes) {
    return null;
  }

  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div
          className={`${styles.SuitWear_header} common-headings--1`}
          style={{ color: mobile ? '#000' : '#fff' }}
        >
          Hand Made Clothes
          <CustomDivider
            style={{ height: '2px', background: mobile ? '#000' : '#fff' }}
          />
        </div>
        <Carousel_Component items={clothes} name='handMade' />
        {/* <CarouselProvider
          visibleSlides={match ? 1.4 : iPade ? 2 : large ? 3 : visible}
          totalSlides={clothes?.length + 0.8}
          isIntrinsicHeight
        >
          <Slider>
            {clothes?.map(({ id, cover_image, name, slug }, i) => (
              <Slide
                index={i}
                key={id}
                style={
                  CustomView
                    ? { marginRight: '40px', marginLeft: '10px' }
                    : { marginRight: '20px', marginLeft: '20px' }
                }
                className={styles.items}
              >
                <LazyLoadingComp>
                  <div className={styles.SuitWear}>
                    <div className={styles.SuitWear_Items}>
                     
                      <img src={cover_image} alt={name} />
                      <Link
                        className='carousel-items--text'
                        to={`/designers-product-page/${slug}`}
                      >
                        <a>{name}</a>
                      </Link>
                    </div>
                  </div>
                </LazyLoadingComp>
              </Slide>
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
        </CarouselProvider> */}
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
