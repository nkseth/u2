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
import { useSelector } from "react-redux";
import common_axios from "../../utils/axios.config";

export default function Measurement() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const { gender, upper_body, lower_body, basic_id } = useSelector(state => state.root.measurement);

  const { neck, chest, wrist, shoulder, arm_hole, sleeve } = upper_body;
  const { waist, hip_round, full_length, inseam, thigh, calf, ankle } = lower_body;

  const onSubmit = async () => {
    
    const { data: upper_data } = await common_axios.post('/save_measurment_value',{
       type:"Upper",
       measur_basic_id: basic_id,
       neck: parseFloat(neck),
       shoulder: parseFloat(shoulder),
       chest: parseFloat(chest),
       arm: parseFloat(arm_hole),
       waist: parseFloat(waist),
       //back_waist: 
    })
  }

  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.section}>
        <div style={{ padding: mobileView && "0 1rem" }}>
          <Breadcrumb path={`Home / ${gender == 'male' ? 'Men' : 'Women'} /`} activePath='Measurements' />
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
                <span>1. Neck</span> <div>{neck === '' ? '-' : neck}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Shoulder</span> <div>{shoulder === '' ? '-' : shoulder}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Chest</span> <div>{chest === '' ? '-' : chest}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. Arm Hole</span> <div>{arm_hole === '' ? '-' : arm_hole}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Sleeve Length</span> <div>{sleeve === '' ? '-' : sleeve}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Wrist</span> <div>{wrist === '' ? '-' : wrist}</div>
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
                <span>1. Waist</span> <div>{waist === '' ? '-' : waist}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Full Length</span> <div>{full_length === '' ? '-' : full_length}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Hip Round</span> <div>{hip_round === '' ? '-' : hip_round}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. InSeam</span> <div>{inseam === '' ? '-' : inseam}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Thigh</span> <div>{thigh === '' ? '-' : thigh}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Calf</span> <div>{calf === '' ? '-' : calf}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Ankle</span> <div>{ankle === '' ? '-' : ankle}</div>
              </Grid>
            </Grid>
            <Grid
              container
              className={cx(styles.gridContainer, styles.buttonGridContainer)}
              spacing={3}
            >
              <Grid item xs={6} sm={6} md={6}>
                <Link to={`/add-measurement-body-measurement-${gender}`}>
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
                  onClick={() => onsubmit()}
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
