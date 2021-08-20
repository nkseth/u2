import { Link } from "react-router-dom";
import { IconButton, useMediaQuery,useTheme } from "@material-ui/core";
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
import { useState } from "react";
const Customer_Review = () => {
  const customStyle = {
    padding: "5rem 3rem",
    background: "#fff",
  };
  const [visible,setvisible]=useState(4)
  const theme=useTheme()
  const match=useMediaQuery(theme.breakpoints.down('xs'))
  const iPade=useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="customer_review_content">
      <CustomSection class={styles.customerreview} style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.Customer_Review_header}`}
        >
          Customer Review{" "}
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>

        <CarouselProvider
          visibleSlides={match?1:iPade?2:visible}
          totalSlides={5}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            <Slide index={0}>
              <CarouselSlide />
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
      </div>
    </>
  );
};

const CarouselSlide2 = () => {
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
      </div>
    </>
  );
};

const CarouselSlide3 = () => {
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
      </div>
    </>
  );
};

const CarouselSlide4 = () => {
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
      </div>
    </>
  );
};

const CarouselSlide5 = () => {
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
      </div>
    </>
  );
};
