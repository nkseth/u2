import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
import styles from "./slide.module.scss";
//Images 
import S1 from "../Images/Style1.jpg"
import S2 from "../Images/Style2.jpg"
import S3 from "../Images/Style3.jpg"


export default function DesignerSlide({ item }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      {mobileView && (
        <div className={styles.header}>
          <p>
            <span className={styles.italic}  >
              Most Loved
            </span>
            <span> Style</span>
          </p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: mobileView ? ".5rem" : tabViewPro ? "1rem" : "2rem",
        }}
      >
        {!mobileView && (
          <div className={styles.header}>
            <p>
              <span className={styles.italic}  >
                Most <br /> Loved
              </span>
              <span> Style</span>
            </p>
          </div>
        )}
        <DesignersCard item={item} image={item.feature_image} />
      </div>
    </>
  );
}
