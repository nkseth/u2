import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import cx from "classnames";
import Container from "../../utils/Container/container";
import CustomDivider from "../../utils/Custom Divider/divider";
import CustomSection from "../../utils/Custom Section/section";
import MyMeasurementCard from "./Components/Measurement-Card/card";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./myMeasurements.module.scss";

export default function MyMeasurements() {
  const history = useHistory();
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [activeBtn, setActiveBtn] = useState("self");
  return (
    <Container bottomDivider footerOnTabMob>
      <section
        style={{
          padding: mobileView ? "0 1rem" : tabViewPro ? "0 50px" : "0 150px",
        }}
      >
        <Breadcrumb path='Home / Men /' activePath='Measurements' />
        <div className={styles.header}>My Measurements</div>
        {!tabView && <CustomDivider />}
        <Grid
          container
          className={styles.container}
          justify='center'
          spacing={mobileView ? 2 : 4}
        >
          <Grid item className={styles.gridItemLeft} xs={12} sm={6} md={6}>
            <MyMeasurementCard percentage={100} color='#F79E1B' />
          </Grid>
          <Grid item className={styles.gridItemRight} xs={12} sm={6} md={6}>
            <MyMeasurementCard percentage={60} color='#F79E1B' />
          </Grid>
          <Grid item className={styles.gridItemLeft} xs={12} sm={6} md={6}>
            <MyMeasurementCard percentage={20} color='#DA1E28' />
          </Grid>
          <Grid item className={styles.gridItemRight} xs={12} sm={6} md={6}>
            <MyMeasurementCard percentage={20} color='#DA1E28' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={styles.buttonDiv}>
            <Button
              className={cx(
                styles.button,
                activeBtn === "self" ? styles.buttonActive : ""
              )}
              onClick={() => setActiveBtn("self")}
              variant='contained'
              color='default'
            >
              Self Measurement
            </Button>
            <Button
              className={cx(
                styles.button,
                activeBtn === "executive" ? styles.buttonActive : ""
              )}
              onClick={() => {
                setActiveBtn("executive");
                history.push("/add-measurement-choose-standard-size");
              }}
              variant='contained'
              color='default'
            >
              Executive Measurements
            </Button>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}
