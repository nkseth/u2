import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HeroCard from "./Components/Card/card";
import styles from "./section.module.scss";

export default function SectionOne() {
  return (
    <section>
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop
        showStatus={false}
        showArrows={false}
      >
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </Carousel>
    </section>
  );
}
