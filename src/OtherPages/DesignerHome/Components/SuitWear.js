import { Link } from "react-router-dom";
import { IconButton, useMediaQuery } from "@material-ui/core";
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

const SuitWear = () => {
  const customStyle = {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    background: "#857250",
  };
  return (
    <>
      <CustomSection style={customStyle}>
        <div className={`${styles.SuitWear_header}`}>
          Suit Wear{" "}
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={2}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            <Slide index={0}>
              <CarouselSlide />
            </Slide>
            <Slide index={1}>
              <CarouselSlide />
            </Slide>
          </Slider>
          <DotGroup style={{ display: "flex" }} />
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
    </>
  );
};

export default SuitWear;

const CarouselSlide = () => {
  const imageSrc =
    "https://cdn.pixabay.com/photo/2017/07/31/14/55/black-and-white-2558273__340.jpg";
  const media = useMediaQuery(`(max-width:768px)`);
  return (
    <>
      <div className={styles.SuitWear}>
        <div className={styles.SuitWear_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>{" "}
        <div className={styles.SuitWear_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>{" "}
        {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={imageSrc} alt="items" />
              <Link to="designers-product-page">Wear</Link>
            </div>{" "}
            <div className={styles.SuitWear_Items}>
              <img src={imageSrc} alt="items" />
              <Link to="designers-product-page">Wear</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};
