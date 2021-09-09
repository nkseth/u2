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
import c1 from "../Images/h2.png";
import c2 from "../Images/h1.png";
import { useState } from "react";

const SuitWear = () => {
  const customStyle = {
    padding: "5rem 3rem 4rem  3rem",
    background: "#938368",
  };
  const [visible, setvisible] = useState(4)
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('xs'))
  const iPade = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
        <div className={`${styles.SuitWear_header}`}>
          Hand Made Clothes
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>
        <CarouselProvider
          visibleSlides={match ? 1 : iPade ? 2 : visible}
          totalSlides={5}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            <Slide index={0}>
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
            </Slide>


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
          <Link to="designers-product-page">Celibrity Style</Link>
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
          <Link to="designers-product-page">Indian ethinic Wear</Link>
        </div>{" "}


      </div>
    </div>
  );
};


const CarouselSlide3 = () => {


  return (
    <div className>
      <div className={styles.SuitWear}>

        <div className={styles.SuitWear_Items}>
          <img src={c2} alt="items" />
          <Link to="designers-product-page">Indian ethinic Wear</Link>
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
          <Link to="designers-product-page">Indian ethinic Wear</Link>
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
          <Link to="designers-product-page">Indian ethinic Wear</Link>
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
          <Link to="designers-product-page">Indian ethinic Wear</Link>
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
          <Link to="designers-product-page">Indian ethinic Wear</Link>
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