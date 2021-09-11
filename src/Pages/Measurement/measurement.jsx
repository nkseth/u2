import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, Button, Grid, useMediaQuery } from "@material-ui/core";
import cx from "classnames";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./measurement.module.scss";
//icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
//image
import img from "./body.png"
//Data

import {
  //Upper body Values
  NeckData, ShoulderData, ChestData, ArmHoleData,
  SleeveLengthData, WristData,
  //Lower body values
  WaistData, FullLengthData,
  HipRoundData, InSeamData, ThighData, CalfData, AnkleData,

  //Upper body functions
  NeckVALUE, ShoulderVALUE, ChestVALUE, ArmHoleVALUE,
  SleeveLengthVALUE, WristVALUE,

  //Lower body functions
  WaistVALUE, FullLengthVALUE,
  HipRoundVALUE, InSeamVALUE, ThighVALUE, CalfVALUE, AnkleVALUE,



} from "../../Redux/MeasuremantData"

export default function Measurement() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [selectedBtn, setSelectedBtn] = useState("men");

  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.section}>
        <div style={{ padding: mobileView && "0 1rem" }}>
          <Breadcrumb path='Home / Men /' activePath='Measurements' />
        </div>

        <Grid
          container
          className={cx(styles.gridContainer, styles.mainGridContainer)}
        >
          <Grid item xs={12} sm={12} md={5} style={{ height: "100%" }}>
            <div className={styles.modelImgContainer}>
              <img src={img} alt='all body details' />
            </div>
          </Grid>
          {!tabView && !mobileView && (
            <Grid item xs={0} sm={0} md={1} style={{ height: "100%" }}></Grid>
          )}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{ height: "100%" }}
            className={styles.detailsDiv}
          >
            <Grid
              container
              spacing={2}
              className={cx(
                styles.upperBodyGridContainer,
                styles.gridContainer
              )}
            >
              <Grid item xs={12}>
                <div className={styles.detailsHeader}>Upper Body</div>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>1. Neck</span> <div>{NeckData === '' ? '-' : NeckData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2.Shoulder</span> <div>{ShoulderData === '' ? '-' : ShoulderData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Chest</span> <div>{ChestData === '' ? '-' : ChestData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. Arm Hole</span> <div>{ArmHoleData === '' ? '-' : ArmHoleData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Sleeve Length</span> <div>{SleeveLengthData === '' ? '-' : SleeveLengthData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Wrist</span> <div>{WristData === '' ? '-' : WristData}</div>
              </Grid>
              {/* <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>7. Arm</span> <div>{}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>8. Waist </span> <div>{}</div>
              </Grid> */}
            </Grid>
            <Grid
              container
              spacing={2}
              className={cx(
                styles.lowerBodyGridContainer,
                styles.gridContainer
              )}
            >

              <Grid item xs={12}>
                <span className={styles.detailsHeader}>Lower Body</span>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>1. Waist</span> <div>{WaistData === '' ? '-' : WaistData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Full Length</span> <div>{FullLengthData === '' ? '-' : FullLengthData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Hip Round</span> <div>{HipRoundData === '' ? '-' : HipRoundData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. InSeam</span> <div>{InSeamData === '' ? '-' : InSeamData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Thigh</span> <div>{ThighData === '' ? '-' : ThighData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Calf</span> <div>{CalfData === '' ? '-' : CalfData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Ankle</span> <div>{AnkleData === '' ? '-' : AnkleData}</div>
              </Grid>
            </Grid>
            <Grid
              container
              className={cx(styles.gridContainer, styles.buttonGridContainer)}
              spacing={3}
            >
              <Grid item xs={6} sm={6} md={6}>
                <Link to="/add-measurement-body-measurement-man">
                  <Button
                    className={cx(styles.button, styles.backBtn)}
                    variant='contained'
                    color='default'
                    startIcon={<ArrowBackIcon />}
                  >

                    Back
                  </Button>
                </Link>

              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Button
                  variant='contained'
                  className={cx(styles.button, styles.addToBagBtn)}
                  color='default'
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => history.push("/order-summary")}
                >
                  Add to bag
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}
