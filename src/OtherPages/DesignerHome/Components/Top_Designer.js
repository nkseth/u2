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
import styles from "../Style/Top_Designer.module.scss";

const Top_Designer = () => {
  const customStyle = {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    background: "#fff",
  };
  return (
    <>
      <CustomSection style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.Top_Designer_header}`}
        >
          Explore Top Designer{" "}
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
            <Link to="designers-profile" style={{ color: "#2196F3" }}>
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

export default Top_Designer;

const CarouselSlide = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.Top_Designer}>
        <div className={styles.Top_Designer_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-profile">Text Here</Link>
        </div>{" "}
        <div className={styles.Top_Designer_Items}>
          <img src={imageSrc} alt="items" />
          <Link to="designers-profile">Text Here</Link>
        </div>{" "}
        {media ? null : (
          <>
            <div className={styles.Top_Designer_Items}>
              <img src={imageSrc} alt="items" />
              <Link to="designers-profile">Text Here</Link>
            </div>{" "}
            <div className={styles.Top_Designer_Items}>
              <img src={imageSrc} alt="items" />
              <Link to="designers-profile">Text Here</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};
