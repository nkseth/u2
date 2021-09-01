import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
import styles from "./slide.module.scss";



export default function DesignerSlide({ img1, img2, img3, img4, brand1, brand2, brand3, brand4 }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: mobileView ? ".5rem" : "1rem",
        }}
      >
        {!tabView && <DesignersCard img={img1} brandImg={brand1} />}
        {!mobileView && <DesignersCard img={img2} brandImg={brand2} />}
        <DesignersCard img={img3} brandImg={brand3} />
        <DesignersCard img={img4} brandImg={brand4} />
      </div>
    </>
  );
}
