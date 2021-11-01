import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
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
//Images
import img1 from "../section-three/Components/Slide/Images/card1.png"
import img2 from "../section-three/Components/Slide/Images/card6.png"
import img3 from "../section-three/Components/Slide/Images/card14.png"
import img4 from "../section-three/Components/Slide/Images/card8.png"
import img5 from "../section-three/Components/Slide/Images/card9.png"
import img6 from "../section-three/Components/Slide/Images/card3.png"
import img7 from "../section-three/Components/Slide/Images/card5.png"
import img8 from "../section-three/Components/Slide/Images/card13.png"
import common_axios from '../../../../../utils/axios.config'


export default function SectionFive() {

  useEffect(() => {
    fetch_data()
  }, [])

  const [data, setData] = useState([])

  const fetch_data = async () => {
    const { data: res } = await common_axios.post("/themeOption", {
      dashboard_type: "offers",
      group_name: "buy_one_get_one_offer",
      content_type: "all"
    })

    if (res.buy_one_get_one_offer) {
      setData(res.buy_one_get_one_offer)
    }
    console.log(res)
  }


  return (
    <CustomSection class="offers_buy_and_get" style={{ paddingTop: "5rem", paddingBottom: "7rem" }}>
      <div className={styles.header}>Buy 1 and Get 1</div>
      <CarouselProvider
        className="buy_get_slidee"
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider >
          <Slide index={0}>
            <CarouselSlide img1={data.length > 0 ? data[0]?.cover_image : null} img2={data.length > 1 ? data[1]?.cover_image : null} img3={data.length > 2 ? data[2]?.cover_image : null} img4={data.length > 3 ? data[3]?.cover_image : null} title1={data.length > 0 ? data[0]?.name : null} title2={data.length > 1 ? data[1]?.name : null} title3={data.length > 2 ? data[2]?.name : null} title4={data.length > 3 ? data[3]?.name : null} desc1={data.length > 0 ? data[0]?.description : null}  desc2={data.length > 1 ? data[1]?.description : null} desc3={data.length > 2 ? data[2]?.description : null} desc4={data.length > 3 ? data[3]?.description : null}/>
          </Slide>
          <Slide index={1}>
          <CarouselSlide img1={data.length > 4 ? data[4]?.cover_image : null} img2={data.length > 5 ? data[5]?.cover_image : null} img3={data.length > 6 ? data[6]?.cover_image : null} img4={data.length > 7 ? data[7]?.cover_image : null} title1={data.length > 4 ? data[4]?.name : null} title2={data.length > 5 ? data[5]?.name : null} title3={data.length > 6 ? data[6]?.name : null} title4={data.length > 7 ? data[7]?.name : null} desc1={data.length > 4 ? data[4]?.description : null} desc2={data.length > 5 ? data[5]?.description : null} desc3={data.length > 6 ? data[6]?.description : null}  desc4={data.length > 7 ? data[7]?.description : null} />
          </Slide>
        </Slider>
        <DotGroup style={{ display: "flex", backgroundColor: "#000" }} />
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
    </CustomSection>
  );
}
