import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
import styles from "./slide.module.scss";



export default function DesignerSlide({ img1, img2, img3, img4, brand1, brand2, brand3, brand4, desc1, desc2, desc3, desc4, slug1, slug2, slug3, slug4 }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: mobileView ? ".5rem" : "1rem",
        }}
      >
        {!tabView && img1? <DesignersCard img={img1} name={brand1} slug={slug1} desc={desc1} /> : null}
        {!mobileView && img2 ? <DesignersCard img={img2} name={brand2} slug={slug2} desc={desc2} /> : null}
        {tabView || !mobileView ? <></> :
          <>
            {img3 ? <DesignersCard img={img3} name={brand3} slug={slug3} desc={desc3} /> : null}
          </>}
        {img3 ? <DesignersCard img={img3} name={brand3} slug={slug3} desc={desc3} /> : null}
        {mobileView ?
          <>
            {img3 ? <DesignersCard img={img3} name={brand3} slug={slug3} desc={desc3} /> : null}
          </>

          :
          img4 ? <DesignersCard img={img4} name={brand4} slug={slug4} desc={desc4} /> : null
        }
      </div>
    </>
  );
}
