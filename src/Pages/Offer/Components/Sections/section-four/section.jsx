import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import DiscountCard from "./Components/card/card";
import styles from "./section.module.scss";

export default function SectionFour() {
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
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
            <DiscountCard />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DiscountCard />
          </Grid>
          {!mobileView && (
            <Grid item xs={6} sm={4} md={3}>
              <DiscountCard />
            </Grid>
          )}

          {tabView && (
            <Grid item xs={6} sm={4} md={3}>
              <DiscountCard />
            </Grid>
          )}
        </Grid>
      </div>
    </CustomSection>
  );
}
