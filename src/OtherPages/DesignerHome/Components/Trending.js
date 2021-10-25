// import { Button, useMediaQuery } from '@material-ui/core';
// import { Crop32Rounded, Crop32Sharp } from '@material-ui/icons';
// import React, { useEffect } from 'react';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import CustomDivider from '../../../utils/Custom Divider/divider';
// import styles from '../Style/Trending.module.scss';
// import { topTrending } from '../../../Redux/actions/designerHomePage';
// import { useDispatch, useSelector } from 'react-redux';
// import { LazyLoadingImg } from '../../../utils/LazyLoading';

// const Trending = () => {
//   const dispatch = useDispatch();
//   const imageSrc =
//     'https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
//   const baseStyle = {
//     padding: '5rem 3rem',
//     background: '  #F3F1EE',
//     maginTop: '-3em',
//   };

//   // const { push } = useLocation();
//   const { push } = useHistory();
//   const mobileView = useMediaQuery('(max-width:1024px)');

//   const { items } = useSelector(state => state.root.trending);

//   useEffect(async () => {
//     dispatch(topTrending());
//   }, []);

//   if (items) {
//     return (
//       <div className={styles.trending_content} style={baseStyle}>
//         <div
//           className={`${styles.Trending_header}`}
//           style={{ color: '#1A202C' }}
//         >
//           Trending
//           <CustomDivider style={{ height: '1px', background: '#857250' }} />
//         </div>
//         <div className={styles.Trending}>
//           {items?.map(item => (
//             <Link to={{ pathname: `/designers-product-page/${item.slug}` }}>
//               <div key={item.name} className={styles.Trending_Items}>
//                 <LazyLoadingImg image={item.cover_image} />
//                 {/* <img src={item.cover_image} alt={item.name} /> */}

//                 <div>
//                   <p> {item.name}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//         {/* <div className={`${styles.Trending_Button}`}>
//           <Link to='/designers-product-page/blazers-and-coats'>
//             <Button>View all</Button>
//           </Link>
//         </div> */}
//       </div>
//     );
//   } else {
//     return null;
//   }
// };

// export default Trending;
import { Link } from "react-router-dom";
import { IconButton, useMediaQuery, useTheme } from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CustomSection from "../../../utils/Custom Section/section";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Trending.module.scss";
import p1 from "../Images/111.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topTrending } from '../../../Redux/actions/designerHomePage';
import c1 from "../Images/111.png";
import c2 from "../Images/c2.jpg";
import { LazyLoadingComp, LazyLoadingImg } from "../../../utils/LazyLoading";

const Trending = () => {
  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width:450px)");

  const baseStyle = {
    padding: "5rem 3rem",
    background: "  #F3F1EE",
    maginTop: "-3em",
  };
  const customImg = {borderTopRightRadius: 5, borderTopLeftRadius: 5}

  const { items } = useSelector((state) => state.root.trending);
  const trendingItems = items;

  const [visible, setvisible] = useState(4);
  const theme = useTheme();

  const match = useMediaQuery("(max-width:630px)");
  const iPade = useMediaQuery("(max-width:900px)");

  const large = useMediaQuery("(max-width:1330px)");
  const CustomView = useMediaQuery("(max-width:400px)");

  useEffect(async () => {
    dispatch(topTrending());
  }, []);

  if (!trendingItems) {
    return null;
  }

  return (
    <div>
      <CustomSection className={styles.trending_content} style={baseStyle}>
        <div
          className={`${styles.Trending_header}`}
          style={{ color: "#1A202C" }}
        >
          Trending
          <CustomDivider style={{ height: "1px", background: "#857250" }} />
        </div>
        <CarouselProvider
          visibleSlides={match ? 1.4 : iPade ? 2.5 : large ? 3 : visible}
          totalSlides={
            match ? trendingItems?.length + 0.3 : trendingItems?.length
          }
          isIntrinsicHeight
        >
          <Slider>
            {trendingItems?.map((item, i) => (
              <Slide
                index={i}
                key={item.id.toString()}
                style={
                  CustomView
                    ? { marginRight: "10px", marginLeft: "10px" }
                    : { marginRight: "20px", marginLeft: "20px" }
                }
                className={styles.items}
              >
                <LazyLoadingComp>
                <Link
                    to={{
                      pathname: `/designers-product-page/${item.slug}`,
                    }}
                  >
                    <div>
                      <div className={styles.Trending}>
                        <div className={styles.Trending_Items}>
                          {/* <LazyLoadingImg image={item.cover_image} /> */}
                          <img src={item.cover_image} alt={item.id} style={customImg} />
                          <Link to={`/designers-product-page/${item.slug}`}>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </LazyLoadingComp>
              </Slide>
            ))}
          </Slider>
          {!mobile && (
            <>
              <DotGroup
                style={{ display: "flex", marginTop: "2rem"}}
              />
              <div className={styles.NavigationContainer}>
                <div className={styles.Carousel_SliderButtonBox}>
                  <ButtonBack className={styles.Carousel_SliderButtons}>
                    <IconButton
                      size="small"
                      className={styles.Carousel_iconBtn}
                    >
                      <NavigateBeforeIcon />
                    </IconButton>
                  </ButtonBack>
                  <ButtonNext className={styles.Carousel_SliderButtons}>
                    <IconButton
                      size="small"
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
      </CustomSection>
    </div>
  );
};

export default Trending;
