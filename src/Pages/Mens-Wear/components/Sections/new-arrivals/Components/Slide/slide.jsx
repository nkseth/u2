import React from "react";
import { Slide, useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
import styles from "./slide.module.scss";
//Images
import S1 from "../Images/Style1.jpg";
import S2 from "../Images/Style2.jpg";
import S3 from "../Images/Style3.jpg";

export default function DesignerSlide({ most_loved, type }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: mobileView ? ".5rem" : tabViewPro ? "1rem" : "2rem",
          marginLeft: mobileView && "-25px"
        }}
      >
        {
          !mobileView ?  <div className={styles.header}>
          <p>
            <span className={styles.italic}>
              Most <br /> Loved
            </span>
            <span> Style</span>
          </p>
        </div>
        :
         <div className={styles.header}>
         <p>
           <span className={styles.italic}>
             Most Loved <br/>
           </span>
           <span> Style</span>
         </p>
       </div>
        }
       

      {most_loved.map((item, index) => {
        return (
          <Slide index={index}>
            <DesignersCard item={item} image={item.cover_image} type={type} />
          </Slide>
        );
      })}
    </div>
    </>
  );
}
