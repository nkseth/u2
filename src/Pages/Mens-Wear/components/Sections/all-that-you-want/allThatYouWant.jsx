import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import TopOffersCard from "./components/offers-card/card";
import styles from "./allThatYouWant.module.scss";

export default function AllThatYouWantSection() {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const arr = [{ title: "" }, { title: "" }, { title: "" }];
  return (
    <CustomSection
      style={{
        paddingBottom: mobileView ? "40px" : "84px",
        paddingTop: mobileView ? "30px" : "84px",
        background: "rgba(206, 199, 185, 0.2)",
      }}
    >
      <div className={styles.header}>
        <p>
          <span>All</span>&nbsp;&nbsp;
          <span>That You Want</span>
        </p>
        <p>Under a budget &amp; Top offers</p>
      </div>
      <div className={styles.topOffersCardContainer}>
        {arr.map((item) => (
          <TopOffersCard />
        ))}
      </div>
    </CustomSection>
  );
}
