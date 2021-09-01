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
import styles from "../Style/Top_Designer.module.scss";
import d1 from "../Images/d1.png";
import d2 from "../Images/d2.png";
import d3 from "../Images/d3.png";
import d4 from "../Images/d4.png";
import { useEffect, useState } from "react";
import { topDesigner } from "../../../Redux/actions/designerHomePage";
import { useDispatch, useSelector } from "react-redux";

const Top_Designer = () => {
  const dispatch = useDispatch();
  const baseStyle = {
    padding: "5rem 3rem",
    background: "#fff",
  };
  const [visible, setvisible] = useState(4);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("xs"));
  const iPade = useMediaQuery(theme.breakpoints.down("sm"));
  const { designers } = useSelector((state) => state.root.topDesigner);

  useEffect(() => {
    dispatch(topDesigner());
  }, []);
  return (
    <div className="top_designer">
      <CustomSection class={styles.topdesigner} style={baseStyle}>
        <div
          className={`${styles.Carousel_header} ${styles.Top_Designer_header}`}

        >
          Explore Top Designer
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>

        <CarouselProvider
          visibleSlides={match ? 1 : iPade ? 2 : visible}
          totalSlides={designers.length}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            {designers.map(({ id, name, cover_image }, i) => (
              <Slide index={i} key={id}>
                <div className={styles.Top_Designer}>
                  <div className={styles.Top_Designer_Items}>
                    <img src={cover_image} alt={name} />
                    <Link to="designers-profile">{name}</Link>
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
            <Link to="designers-profile" style={{ color: "#0A0A0A" }}>
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

export default Top_Designer;

const CarouselSlide = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.Top_Designer}>
        <div className={styles.Top_Designer_Items}>
          <img src={d1} alt="items" />
          <Link to="designers-profile">1</Link>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide2 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.Top_Designer}>
        <div className={styles.Top_Designer_Items}>
          <img src={d4} alt="items" />
          <Link to="designers-profile">Designer's Name</Link>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide3 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.Top_Designer}>
        <div className={styles.Top_Designer_Items}>
          <img src={d2} alt="items" />
          <Link to="designers-profile">Designer Name</Link>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide4 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.Top_Designer}>
        <div className={styles.Top_Designer_Items}>
          <img src={d3} alt="items" />
          <Link to="designers-profile">Designer Name</Link>
        </div>{" "}
      </div>
    </>
  );
};
const CarouselSlide5 = () => {
  const media = useMediaQuery(`(max-width:768px)`);
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.Top_Designer}>
        <div className={styles.Top_Designer_Items}>
          <img src={d4} alt="items" />
          <Link to="designers-profile">Designer Name</Link>
        </div>{" "}
      </div>
    </>
  );
};
