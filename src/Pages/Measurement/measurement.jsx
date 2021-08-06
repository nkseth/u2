import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IconButton, Button, Grid, useMediaQuery } from "@material-ui/core";
import cx from "classnames";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./measurement.module.scss";
//icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
export default function Measurement() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [selectedBtn, setSelectedBtn] = useState("men");
  const img =
    "https://s3-alpha-sig.figma.com/img/ab15/ade4/24d142b81e7197b510277e429c7e20ad?Expires=1627257600&Signature=HQi-cbxYjiCrsKpSBS~JGtlykUCZU11~AbTTibpi0LUnXjK2O9OalcSIX6DVxBRCt691JpsOE3AEAGBqif1WqsMn95pE63V1HrW4yQG326ewVviLu7ExzvK-kLuOBu3igMIqnWcB77HM21hKg5eWoC8cJuY2sV5D1a3uinV3fB~uk6FTtoHr~adsgMMGoGtVKuSoIEDZEK-6fcoE7gfCtU-II2bDgcVfQ-tBz8bP5vjQ8zam~8T7oGcg5Z924wAHoqs~HfRYf7DB44mxPFB~o8mm6HCfAgpuV0tAo-oGWpfjxKV7ZLDm~wfKM9ydnv2LvvYSzFPhP9b6~3vGvCgC7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
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
                <span>1. Length</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Neck round</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Back neck</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. Front neck</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Chest</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Shoulder</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>7. Arm</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>8. Waist </span> <div>20</div>
              </Grid>
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
                <span>1. Length</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Hip</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Thigh</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. Ankle</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Waist</span> <div>20</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Knee</span> <div>20</div>
              </Grid>
            </Grid>
            <Grid
              container
              className={cx(styles.gridContainer, styles.buttonGridContainer)}
              spacing={3}
            >
              <Grid item xs={6} sm={6} md={6}>
                <Button
                  className={cx(styles.button, styles.backBtn)}
                  variant='contained'
                  color='default'
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
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
