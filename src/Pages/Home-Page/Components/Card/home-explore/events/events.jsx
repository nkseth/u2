import React from "react";
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
import CustomSection from "../../../../../../utils/Custom Section/section";
import CarouselSlide from "./slide";

export default function CelebrityStyleSection() {
  return (
    <CustomSection style={{ paddingTop: "0.5rem", paddingBottom: "3rem" }}>
         <div>
          <Link style={{color:"#0a0a0a", float:"right", fontFamily:"DM Sans",fontWeight:"bold", fontSize:"16px"}} >SEE All</Link>
          
        </div>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider style={{color:"#857250"}} >
          <Slide style={{color:"#857250"}} index={0}>
            <CarouselSlide />
          </Slide>
          <Slide style={{color:"#857250"}} index={1}>
            <CarouselSlide />
          </Slide>
        </Slider>
        
      </CarouselProvider>
    </CustomSection>
  );
}
