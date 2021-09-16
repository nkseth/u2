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
import styles from "../Style/HandMade_Clothes.module.scss";
import h1 from '../Images/h1.png'
import h2 from '../Images/h2.png'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handMadeClothes } from "../../../Redux/actions/designerHomePage";

const HandMade_Clothes = () => {
  const dispatch = useDispatch();
  const customStyle = {
    padding: "5rem 3rem 4rem  3rem",
    background: "#938368",
  };
  const { clothes } = useSelector((state) => state.root.handMadeClothes);

  const [visible, setvisible] = useState(4);
  useEffect(() => {
    dispatch(handMadeClothes());
  }, []);

  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('xs'))
  const iPade = useMediaQuery(theme.breakpoints.down('sm'))
  const CustomView = useMediaQuery("(max-width:550px)")

  if (!clothes) {
    return null;
  }

  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div className={`${styles.SuitWear_header}`}>
          Hand Made Clothes
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>
        <CarouselProvider
          visibleSlides={match ? 1 : iPade ? 2 : visible}
          totalSlides={clothes?.length}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            {clothes?.map(({ id, cover_image, name, slug }, i) => (
              <Slide index={i} key={id} style={CustomView ? { marginLeft: 0, marginRight: 0 } : { marginLeft: 20, marginRight: 20, }} >
                <div className={styles.SuitWear}>
                  <div className={styles.SuitWear_Items}>
                    <img src={cover_image} alt={name} />
                    <Link to={`/designers-product-page/${slug}`}><a>{name}</a></Link>
                  </div>

                </div>
              </Slide>
            ))}
            {/* <div style={{ width: "100%" }} >
              <div className={styles.SuitWear}>
                <div className={styles.SuitWear_Items}>
                  <img src={cover_image} alt={name} />
                  <a>{name}</a>
                </div>

              </div>
            </div> */}

          </Slider>
          <DotGroup style={{ display: "flex", marginTop: "2rem" }} />
          <div className={styles.NavigationContainer}>
            <Link style={{ color: "#fff" }} to="designers-product-page">
              SEE All
            </Link>
            <div className={styles.Carousel_SliderButtonBox}>
              <ButtonBack className={styles.Carousel_SliderButtons}>
                <IconButton size="small" className={styles.Carousel_iconBtn}>
                  <NavigateBeforeIcon />
                </IconButton>
              </ButtonBack>
              <ButtonNext className={styles.Carousel_SliderButtons}>
                <IconButton size="small" className={styles.Carousel_iconBtn}>
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
