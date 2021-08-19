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
import p1 from "../Images/p5.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";

const SuitWear = () => {
  const customStyle = {
    padding: "5rem 3rem",
    background: "#938368",
  };
  return (
    <div>
      <CustomSection class={styles.suitwear_content} style={customStyle}>
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
          <DotGroup style={{ display: "flex", marginTop: "1rem" }} />
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

const CarouselSlide = () => {
  const imageSrc =
    "https://cdn.pixabay.com/photo/2017/07/31/14/55/black-and-white-2558273__340.jpg";
  const media = useMediaQuery(`(max-width:768px)`);
  return (
    <>
      <div className={styles.SuitWear}>
        <div className={styles.SuitWear_Items}>
          <img src={p1} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>{" "}
        <div className={styles.SuitWear_Items}>
          <img src={p2} alt="items" />
          <Link to="designers-product-page">Wear</Link>
        </div>{" "}
        {media ? null : (
          <>
            <div className={styles.SuitWear_Items}>
              <img src={p3} alt="items" />
              <Link to="designers-product-page">Wear</Link>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};
