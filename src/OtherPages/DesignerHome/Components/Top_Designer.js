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
import { LazyLoadingComp, LazyLoadingImg } from "../../../utils/LazyLoading";
import Loader from "../../../utils/Loader/Loader";

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
  const CustomView = useMediaQuery("(max-width:550px)");
  const { designers } = useSelector((state) => state.root.topDesigner);
  console.log(designers);
  useEffect(() => {
    dispatch(topDesigner());
  }, []);

  // if (!designers) {
  //   return null;
  // }

  return (
    <div className="top_designer">
      {designers.length < 1 ? (
        <Loader />
      ) : (
        <CustomSection class={styles.topdesigner} style={baseStyle}>
          <div
            className={`${styles.Carousel_header} ${styles.Top_Designer_header}`}
          >
            Explore Top Designers
            <CustomDivider style={{ height: "2px", background: "#fff" }} />
          </div>

          <CarouselProvider
            visibleSlides={match ? 1 : iPade ? 2 : visible}
            totalSlides={designers?.length}
            isIntrinsicHeight
          >
            <Slider>
              {designers?.map(({ id, name, cover_image, marchent_id }, i) => (
                <>
                  <Slide
                    index={i}
                    key={id}
                    style={
                      CustomView
                        ? { marginRight: 0, marginLeft: 0 }
                        : { marginLeft: 25, marginRight: 25 }
                    }
                  >
                    <LazyLoadingComp>
                      <Link to={`/designer-products/${marchent_id}`}>
                        <div className={styles.Top_Designer}>
                          <div className={styles.Top_Designer_Items}>
                            <LazyLoadingImg image={cover_image} />
                            <Link to={`/designer-products/${marchent_id}`}>
                              {name}
                            </Link>
                          </div>
                        </div>
                      </Link>
                    </LazyLoadingComp>
                  </Slide>
                </>
              ))}
            </Slider>
            <DotGroup style={{ display: "flex", marginTop: "1rem" }} />
            <div className={styles.NavigationContainer}>
              {/* <Link to='designers-profile' style={{ color: '#0A0A0A' }}>

              SEE All
            </Link> */}
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
      )}
    </div>
  );
};

export default Top_Designer;
