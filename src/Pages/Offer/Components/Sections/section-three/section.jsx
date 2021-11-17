import React, { useState, useEffect } from "react";
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
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./section.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//images
import img1 from "../section-three/Components/Slide/Images/card1.png"
import img2 from "../section-three/Components/Slide/Images/card6.png"
import img3 from "../section-three/Components/Slide/Images/card14.png"
import img4 from "../section-three/Components/Slide/Images/card8.png"
import img5 from "../section-three/Components/Slide/Images/card9.png"
import img6 from "../section-three/Components/Slide/Images/card3.png"
import img7 from "../section-three/Components/Slide/Images/card5.png"
import img8 from "../section-three/Components/Slide/Images/card13.png"
//Brand Images
import brand1 from "../section-three/Components/Slide/Images/logo/logo1.png"
import brand2 from "../section-three/Components/Slide/Images/logo/logo2.png"
import brand3 from "../section-three/Components/Slide/Images/logo/logo3.png"
import brand4 from "../section-three/Components/Slide/Images/logo/logo4.png"
import brand5 from "../section-three/Components/Slide/Images/logo/logo5.png"
import brand6 from "../section-three/Components/Slide/Images/logo/logo6.png"
import brand7 from "../section-three/Components/Slide/Images/logo/logo7.png"
import brand8 from "../section-three/Components/Slide/Images/logo/logo8.png"
import common_axios from '../../../../../utils/axios.config'



export default function SectionThree() {

  const [data, setData] = useState([])
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  useEffect(()=>{
     fetch_data()
  },[])

  const fetch_data = async () => {
    const { data:res } = await common_axios.post("/themeOption",{
      dashboard_type:"offers",
      group_name:"best_offer_on_designer_wear",
      content_type:"all"
    })
 
    if(res.best_offer_on_designer_wear){
      setData(res.best_offer_on_designer_wear)
    }
    console.log(res)
  }

  return (
    <CustomSection
      class={styles.offer_section_three}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        backgroundColor: "#9d8e73",
      }}
    >
      <div className={styles.container}>
        <span className={styles.header}>Best Offer on Designer Wear</span>
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={2}
          infinite
          isIntrinsicHeight
        >
          <Slider>
            {/* <Slide index={0}>
              <CarouselSlide data={data} />
            </Slide> */}
            <Slide index={1} style={{ marginLeft: 10 }}>
              <CarouselSlide img1={data.length > 0 ? data[0]?.cover_image : null} img2={data.length > 1 ? data[1]?.cover_image : null} img3={data.length > 2 ? data[2]?.cover_image : null} img4={data.length > 3 ? data[3]?.cover_image : null} brand1={data.length > 0 ? data[0]?.name : null} brand2={data.length > 1 ? data[1]?.name : null} brand3={data.length > 2 ? data[2]?.name : null} brand4={data.length > 3 ? data[3]?.name : null} desc1={data.length > 0 ? data[0]?.description : null} desc2={data.length > 1 ? data[1]?.description : null}  desc3={data.length > 2 ? data[2]?.description : null} desc4={data.length > 3 ? data[3]?.description : null} slug1={data.length > 0 ? data[0]?.slug : null} slug2={data.length > 1 ? data[1]?.slug : null} slug3={data.length > 2 ? data[2]?.slug : null} slug3={data.length > 3 ? data[3]?.slug : null}/>
            </Slide>
            <Slide index={1} style={{ marginLeft: 10 }}>
              <CarouselSlide img1={data.length > 4 ? data[4]?.cover_image : null} img2={data.length > 5 ? data[5]?.cover_image : null} img3={data.length > 6 ? data[6]?.cover_image : null} img4={data.length > 7 ? data[7]?.cover_image : null} brand1={data.length > 4 ? data[4]?.name : null} brand2={data.length > 5 ? data[5]?.name : null} brand3={data.length > 6 ? data[6]?.name : null} brand4={data.length > 7 ? data[7]?.name : null} desc1={data.length > 4 ? data[4]?.description : null} desc2={data.length > 5 ? data[5]?.description : null}  desc3={data.length > 6 ? data[6]?.description : null} desc4={data.length > 7 ? data[7]?.description : null} slug1={data.length > 4 ? data[4]?.slug : null} slug2={data.length > 5 ? data[5]?.slug : null} slug3={data.length > 6 ? data[6]?.slug : null} slug3={data.length > 7 ? data[7]?.slug : null} />
            </Slide> 
          </Slider>
          <DotGroup style={{ display: "flex", color: "#fff" }} />
          <div className={styles.carouselNavigationDiv}>
            <Link to='/'>SEE All</Link>
            <div className={styles.sliderBtnDiv}>
              <ButtonBack className={styles.sliderBtn}>
                <IconButton size='small' className={styles.iconBtn}>
                  <NavigateBeforeIcon />
                </IconButton>
              </ButtonBack>
              <ButtonNext className={styles.sliderBtn}>
                <IconButton size='small' className={styles.iconBtn}>
                  <NavigateNextIcon />
                </IconButton>
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </CustomSection>
  );
}
