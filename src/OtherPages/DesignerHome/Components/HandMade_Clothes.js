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
import h1 from "../Images/h1.png";
import h2 from "../Images/h2.png";
import h3 from "../Images/h3.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handMadeClothes } from "../../../Redux/actions/designerHomePage";

const HandMade_Clothes = () => {
  const dispatch = useDispatch();
  const customStyle = {
    padding: "5rem 3rem",
    background: "#857250",
  };
  const { clothes } = useSelector((state) => state.root.handMadeClothes);
  console.log(clothes);
  const [visible, setvisible] = useState(4);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("xs"));
  const iPade = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    dispatch(handMadeClothes());
  }, []);

  return (
    <div className="hande_made_clothes">
      <CustomSection class={styles.handmadeclothes} style={customStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.HandMade_Clothes_header}`}
        >
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
            {clothes.map(({ id, cover_image, name }, i) => (
              <Slide index={i} key={id}>
                <div className={styles.HandMade_Clothes}>
                  <div className={styles.HandMade_Clothes_Items}>
                    <img src={cover_image} alt={name} />
                    <p>{name}</p>
                  </div>
                </div>
              </Slide>
            ))}
            {/* <Slide index={0}>
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
            </Slide> */}
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
          <img src={h1} alt="items" />
          <p>1</p>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide2 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.HandMade_Clothes}>
        <div className={styles.HandMade_Clothes_Items}>
          <img src={h1} alt="items" />
          <p>2</p>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide3 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.HandMade_Clothes}>
        <div className={styles.HandMade_Clothes_Items}>
          <img src={h1} alt="items" />
          <p>3</p>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide4 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.HandMade_Clothes}>
        <div className={styles.HandMade_Clothes_Items}>
          <img src={h1} alt="items" />
          <p>4</p>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide5 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.HandMade_Clothes}>
        <div className={styles.HandMade_Clothes_Items}>
          <img src={h1} alt="items" />
          <p>5</p>
        </div>{" "}
      </div>
    </>
  );
};
