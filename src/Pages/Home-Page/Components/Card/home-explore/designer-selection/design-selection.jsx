import React from "react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSection from "../../../../../../utils/Custom Section/section";
import CarouselSlide from "./Slide";
import styles from "./../trending-designers/designer.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";



export default function DesignSelection() {
  return (
    <CustomSection style={{ paddingTop: "0.5rem", paddingBottom: "3rem", background:"#ffffff" }}>
        <div>
          <Link style={{color:"#0a0a0a", float:"right", fontFamily:"DM Sans",fontWeight:"bold", fontSize:"16px"}} >SEE All</Link>
          
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

      </CarouselProvider>
    </CustomSection>
  );
}
