import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import DiscountCard from "./Components/card/card";
import styles from "./section.module.scss";
//Images

import img1 from "../section-three/Components/Slide/Images/card1.png"
import img2 from "../section-three/Components/Slide/Images/card6.png"
import img3 from "../section-three/Components/Slide/Images/card14.png"
import img4 from "../section-three/Components/Slide/Images/card8.png"
import img5 from "../section-three/Components/Slide/Images/card9.png"
import img6 from "../section-three/Components/Slide/Images/card3.png"
import img7 from "../section-three/Components/Slide/Images/card5.png"
import img8 from "../section-three/Components/Slide/Images/card13.png"
//Brand Images
import brand1 from "../section-three/Components/Slide/Images/logo/logo1.png"
import brand2 from "../section-three/Components/Slide/Images/logo/logo2.png"
import brand3 from "../section-three/Components/Slide/Images/logo/logo3.png"
import brand4 from "../section-three/Components/Slide/Images/logo/logo4.png"
import brand5 from "../section-three/Components/Slide/Images/logo/logo5.png"
import brand6 from "../section-three/Components/Slide/Images/logo/logo6.png"
import brand7 from "../section-three/Components/Slide/Images/logo/logo7.png"
import brand8 from "../section-three/Components/Slide/Images/logo/logo8.png"


export default function SectionFour() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const AdDCard = useMediaQuery("(max-width:960px)");
  return (
    <CustomSection
      class={styles.flat_section_four}
      style={{
        backgroundColor: "rgba(230, 227, 220, 0.25)",
        paddingTop: "5rem",
        paddingBottom: "7rem",
      }}
    >
      <div className={styles.container}>
        <span className={styles.header}>Flat 30 - 40% Off on Ethnic Wear</span>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} xs={6} sm={4} md={3}>
            <DiscountCard img={img1} brandImg={brand1} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard img={img2} brandImg={brand2} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard img={img3} brandImg={brand3} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard img={img4} brandImg={brand4} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard img={img5} brandImg={brand5} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard img={img6} brandImg={brand6} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard img={img7} brandImg={brand7} />
          </Grid>
          {AdDCard ?
            <Grid item xs={6} sm={4} md={3}>
              <DiscountCard img={img2} brandImg={brand3} />
            </Grid>
            : <></>}
          {!mobileView && (
            <Grid item xs={6} sm={4} md={3}>
              <DiscountCard img={img8} brandImg={brand8} />
            </Grid>
          )}
          {mobileView ?
            <Grid item xs={6} sm={4} md={3}>
              <DiscountCard img={img8} brandImg={brand8} />
            </Grid>
            :
            <></>}

          {tabView && mobileView && (
            <Grid item xs={6} sm={4} md={3}>
              <DiscountCard img={img4} brandImg={brand4} />
            </Grid>
          )}
        </Grid>
      </div>
    </CustomSection>
  );
}
