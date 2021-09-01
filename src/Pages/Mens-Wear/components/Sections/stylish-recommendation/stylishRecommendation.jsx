import React from "react";
import { useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import StylishCard from "./Components/stylish-cards/card";
import styles from "./stylishRecommendation.module.scss";
//images
import stylish1 from "../../../Images/stylish-1.png"
import stylish2 from "../../../Images/stylish-2.png"
import stylish3 from "../../../Images/stylish-3.png"
import stylish4 from "../../../Images/stylish-4.png"
import stylish5 from "../../../Images/stylish-5.png"



export default function StylishRecommendationSection() {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <CustomSection
      style={{
        backgroundColor: "#E6E3DC36",
        paddingTop: "43px",
        paddingBottom: "43px",
      }}
    >
      <div className={styles.header}>
        <span>Stylish</span>
        <span>Recommendation</span>
      </div>
      <div className={styles.cardContainer}>
        {mobileView && (
          <div>
            <StylishCard image={stylish1} />
            <StylishCard image={stylish2} />
            <StylishCard image={stylish3} />
            <StylishCard image={stylish4} />
            <StylishCard image={stylish5} />
          </div>
        )}
        {!mobileView && (
          <>
            <div className={styles.firstCon}>
              <div>
                <StylishCard image={stylish1} />

              </div>
              <div>
                <StylishCard image={stylish2} />

              </div>
            </div>
            <div className={styles.secondCon}>
              {/* <div>
                <StylishCard image={stylish3} />

              </div> */}
              <div>
                <StylishCard image={stylish4} />

              </div>
              <div>
                <StylishCard image={stylish5} />

              </div>
            </div>
          </>
        )}
      </div>
    </CustomSection>
  );
}
