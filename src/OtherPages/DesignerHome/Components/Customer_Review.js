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
import styles from "../Style/Customer_Review.module.scss";
import ReactStars from "react-rating-stars-component";
const Customer_Review = () => {
  const customStyle = {
    padding: "5rem 3rem",
    background: "#fff",
  };
  return (
    <div className="customer_review_content">
      <CustomSection style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.Customer_Review_header}`}
        >
          Customer Review{" "}
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
            <Link style={{ color: "#0A0A0A" }} to="/">
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

export default Customer_Review;

const CarouselSlide = () => {
  const imageSrc =
    "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg";
  const media = useMediaQuery(`(max-width:768px)`);
  return (
    <>
      <div className={styles.Customer_Review}>
        <div className={styles.Customer_Review_Items}>
          <span>Date</span>
          <img src={imageSrc} alt="items" />
          <h4>Name</h4>
          <ReactStars size={30} activeColor="#ffd700" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nobis eos cupiditate voluptates.
          </p>
        </div>
        <div className={styles.Customer_Review_Items}>
          <span>Date</span>
          <img src={imageSrc} alt="items" />
          <h4>Name</h4>
          <ReactStars size={30} activeColor="#ffd700" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            nobis eos cupiditate voluptates.
          </p>
        </div>
        {media ? null : (
          <div className={styles.Customer_Review_Items}>
            <span>Date</span>
            <img src={imageSrc} alt="items" />
            <h4>Name</h4>
            <ReactStars size={30} activeColor="#ffd700" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            </p>
          </div>
        )}
      </div>
    </>
  );
};
