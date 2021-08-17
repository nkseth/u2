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
import styles from "../Style/HandMade_Clothes.module.scss";

const HandMade_Clothes = () => {
  const customStyle = {
    padding: "5rem 3rem",
    background: "#857250",
  };
  return (
    <div className="hande_made_clothes">
      <CustomSection style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.HandMade_Clothes_header}`}
        >
          Hand Made Clothes
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
            <Link style={{ color: "#fff" }} to="/">
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

const CarouselSlide = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.HandMade_Clothes}>
        <div className={styles.HandMade_Clothes_Items}>
          <img src={imageSrc} alt="items" />
          <p>Text Here</p>
        </div>{" "}
        <div className={styles.HandMade_Clothes_Items}>
          <img src={imageSrc} alt="items" />
          <p>Text Here</p>
        </div>{" "}
        {media ? null : (
          <>
            <div className={styles.HandMade_Clothes_Items}>
              <img src={imageSrc} alt="items" />
              <p>Text Here</p>
            </div>{" "}
            <div className={styles.HandMade_Clothes_Items}>
              <img src={imageSrc} alt="items" />
              <p>Text Here</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
