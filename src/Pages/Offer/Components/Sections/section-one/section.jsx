import React, { useEffect, useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { get_section_1_sliders } from "../../../../../Redux/actions/homepage";
import HeroCard from "./Components/Card/card";
import styles from "./section.module.scss";
import { useDispatch, useSelector } from "react-redux";

export default function SectionOne() {

  const dispatch = useDispatch();
  const { offers_sliders } = useSelector(state => state.root.main)

  useEffect(()=>{
    dispatch(get_section_1_sliders());
  },[])

  console.log(offers_sliders)

  if(!offers_sliders){
    return null;
  }

  return (
    <section>
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop
        showStatus={false}
        showArrows={false}
      >
        {offers_sliders?.map((item)=>{
          return(
            <HeroCard key={item.id.toString()} item={item} />
          )
        })}
        {/* <HeroCard />
        <HeroCard />
        <HeroCard /> */}
      </Carousel>
    </section>
  );
}
