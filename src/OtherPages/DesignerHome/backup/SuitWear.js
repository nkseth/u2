import { Link } from "react-router-dom";
import {React,useState,useEffect} from 'react';
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

const SuitWear = (props) => {
  const[suitWear,setSuitWear] = useState({})
  const[isLoading,setIsloading] = useState(true)

  const customStyle = {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    background: "#857250",
  };

  const setValue = (props) =>{
    setIsloading(true)
    setSuitWear(props.suitWear)
  }

  useEffect(async ()=>{
    await setValue(props)
    setIsloading(false)
    if(!suitWear){
      // await setIsloading(true)
    }
  },[])
  
  const slide = !suitWear ? suitWear?.length > 5 ? 2 : 1  : 1;
  return (
    <>
      <CustomSection style={customStyle}>
        <div className={`${styles.SuitWear_header}`}>
          Suit Wear{" "}
          <CustomDivider style={{ height: "2px", background: "#fff" }} />
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={slide}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            {[1,2].map((value,key1)=>(
                <Slide index={key1}>
                  <div className={styles.SuitWear}>                  
                    {!isLoading ? suitWear.map((value,key)=>(
                      <>
                        {key < 5 && key1 === 0 ? 
                          <div className={styles.SuitWear_Items}>
                            <img src={value.cover_image} alt="items" />
                            <Link to="designers-product-page">{value.name}</Link>
                          </div>:''}
                        { key > 4 && key1 === 1 ?
                          <div className={styles.SuitWear_Items}>
                            <img src={value.cover_image} alt="items" />
                            <Link to="designers-product-page">{value.name}</Link>
                          </div>:''}   
                      </>    
                    )):<span>Loading...</span>}  
                  </div>  
                </Slide>
            ))}  
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
