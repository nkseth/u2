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
import styles from "../Style/SuitWear.module.scss";
import p1 from "../Images/111.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { suitWears } from "../../../Redux/actions/designerHomePage";
import c1 from "../Images/111.png";
import c2 from "../Images/c2.jpg";

const SuitWear = () => {
  const dispatch = useDispatch();
  const customStyle = {
    padding: "5rem 3rem 4rem  3rem",
    background: "#938368",
  };

  const { suitWearItems } = useSelector((state) => state.root.suitWears);

  const [visible, setvisible] = useState(4);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("xs"));
  const iPade = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    dispatch(suitWears());
  }, []);

  if(!suitWearItems){
    return null;
  }

  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div className={`${styles.SuitWear_header}`}>
          Suit Wear{" "}
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>
        <CarouselProvider
          visibleSlides={match ? 1 : iPade ? 2 : visible}
          totalSlides={suitWearItems?.length}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            {suitWearItems?.map(
              (item, i) => (
                <Slide index={i} key={item.id.toString()}>
                  <div className>
                    <div className={styles.SuitWear}>
                      <div className={styles.SuitWear_Items}>
                        <img src={item.feature_image} alt={item.id} />
                        <Link to={{ pathname:`/designers-product-page/${item.slug}`}}>{item.name}</Link>
                      </div>
                    </div>
                  </div>
                </Slide>
              )
            )}

            {/* <Slide index={0}>
              <CarouselSlide1 />
            </Slide>
            <Slide index={1}>
              <CarouselSlide2 />
            </Slide>
            <Slide index={2}>
              <CarouselSlide3 />
            </Slide>
            <Slide index={3}>
              <CarouselSlide4 />
            </Slide>
            <Slide index={4}>
              <CarouselSlide5 />
            </Slide>
            <Slide index={5}>
              <CarouselSlide6 />
            </Slide>
            <Slide index={6}>
              <CarouselSlide7 />
            </Slide> */}
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

export default SuitWear;

const CarouselSlide1 = () => {


  return (
    <div style={{ width: "100%" }} >
      <div className={styles.SuitWear}>
        <div className={styles.SuitWear_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">Party Wear</Link>
        </div>{" "}

      </div>
    </div>
  );
};

const CarouselSlide2 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c1} alt="items" />
          <Link to="designers-product-page">2</Link>
        </div>{" "}

        {/* {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wearwww</Link>
            </div>{" "}
          </>
        )} */}
      </div>
    </div>
  );
};

// const CarouselSlide2 = () => {
//   const imageSrc =
//     "https://cdn.pixabay.com/photo/2017/07/31/14/55/black-and-white-2558273__340.jpg";
//   const media = useMediaQuery(`(max-width:768px)`);
//   return (
//     <div className>
//       <div className={styles.SuitWear}>
//         <div className={styles.SuitWear_Items}>
//           <img src={p1} alt="items" />
//           <Link to="designers-product-page">2</Link>
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

const CarouselSlide3 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">3</Link>
        </div>{" "}

        {/* {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wearwww</Link>
            </div>{" "}
          </>
        )} */}
      </div>
    </div>
  );
};
const CarouselSlide4 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c1} alt="items" />
          <Link to="designers-product-page">4</Link>
        </div>{" "}

        {/* {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wearwww</Link>
            </div>{" "}
          </>
        )} */}
      </div>
    </div>
  );
};
const CarouselSlide5 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">5</Link>
        </div>{" "}

        {/* {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wearwww</Link>
            </div>{" "}
          </>
        )} */}
      </div>
    </div>
  );
};
const CarouselSlide6 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c1} alt="items" />
          <Link to="designers-product-page">5</Link>
        </div>{" "}

        {/* {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wearwww</Link>
            </div>{" "}
          </>
        )} */}
      </div>
    </div>
  );
};
const CarouselSlide7 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">5</Link>
        </div>{" "}

        {/* {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wearwww</Link>
            </div>{" "}
          </>
        )} */}
      </div>
    </div>
  );
};
