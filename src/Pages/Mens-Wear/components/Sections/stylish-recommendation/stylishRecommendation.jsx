import React from "react";
import { useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import StylishCard from "./Components/stylish-cards/card";
import styles from "./stylishRecommendation.module.scss";

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
            <StylishCard />
            <StylishCard />
            <StylishCard />
            <StylishCard />
          </div>
        )}
        {!mobileView && (
          <>
            <div className={styles.firstCon}>
              <div>
                <StylishCard />
              </div>
              <div>
                <StylishCard />
              </div>
            </div>
            <div className={styles.secondCon}>
              <div>
                <StylishCard />
              </div>
              <div>
                <StylishCard />
              </div>
            </div>
          </>
        )}
      </div>
    </CustomSection>
  );
}
