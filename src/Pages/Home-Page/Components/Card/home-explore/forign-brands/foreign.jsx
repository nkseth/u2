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



export default function Authentic() {
  return (
    <CustomSection style={{ paddingTop: "0.5rem", paddingBottom: "3rem", background:"#ffffff" }}>
         <div style={{ marginTop:30, fontFamily:"DM Serif Display",letterSpacing: "0.03em"}}>
            <h2 style={{fontSize:"34px", fontWeight:400}}>Foreign Brands on spotlight</h2>
            
        </div>
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
