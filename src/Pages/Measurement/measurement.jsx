import { useEffect, useState } from "react";
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
import img from "./body.png";
import { useDispatch, useSelector } from "react-redux";
import common_axios from "../../utils/axios.config";
import { SuccessPopUp } from "../Payment/payment";
import {
  Customer_Name,
  Customer_Name_Change,
  Customer_Gender,
  Customer_Gender_Change,
  Customer_Size,
  Customer_Size_Change,
  Customer_Fitting,
  Customer_Fitting_Change,
  // Measuremant Parameters
  NeckData,
  ShoulderData,
  ChestData,
  ArmHoleData,
  SleeveLengthData,
  WristData,
  WaistData,
  FullLengthData,
  HipRoundData,
  InSeamData,
  ThighData,
  CalfData,
  AnkleData,
  Basic_id,
} from "../../Redux/MeasuremantData";
import {
  getSingleMeasurement,
  saveMeasurement,
} from "../../Redux/actions/measurement";
export default function Measurement({
  match: {
    params: { id },
  },
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const { gender, upper_body, lower_body, basic_id } = useSelector(
    (state) => state.root.measurement
  );

  const { user } = useSelector((state) => state.root.auth);
  const { measurement } = useSelector((state) => state.root.measurement);

  console.log(measurement);

  const { neck, chest, wrist, shoulder, arm_hole, sleeve } = upper_body;
  const { waist, hip_round, full_length, inseam, thigh, calf, ankle } =
    lower_body;
  const [OrderDone, SetOrderDone] = useState(false);
  console.log(upper_body);
  const toggle = () => {
    SetOrderDone(false);
    history.push("/measurement");
  };

  useEffect(() => {
    dispatch(getSingleMeasurement(user.api_token, id));
  }, [dispatch, id, user]);

  const onSubmit = async () => {
    const upperBodyData = {
      type: "upper",
      measurements_basic_id: id,
      neck: parseFloat(NeckData),
      shoulder: parseFloat(ShoulderData),
      chest: parseFloat(ChestData),
      arm_hole: parseFloat(ArmHoleData),
      wrist: parseFloat(WristData),
      sleeve: parseFloat(SleeveLengthData),
    };

    const lowerBodyData = {
      type: "Lower",
      measurements_basic_id: id,
      full_length: parseFloat(FullLengthData),
      hip_round: parseFloat(HipRoundData),
      inseam: parseFloat(InSeamData),
      thigh: parseFloat(ThighData),
      waist: parseFloat(WaistData),
      calf: parseFloat(CalfData),
      ankle: parseFloat(AnkleData),
    };

    dispatch(saveMeasurement(user.api_token, upperBodyData));
    dispatch(saveMeasurement(user.api_token, lowerBodyData));
    SetOrderDone(true);
    // try {
    //   const { data: upper_data } = await common_axios.post(
    //     "/save_measurment_value",
    //     {
    //       type: "upper",
    //       measurements_basic_id: id,
    //       neck: parseFloat(NeckData),
    //       shoulder: parseFloat(ShoulderData),
    //       chest: parseFloat(ChestData),
    //       arm_hole: parseFloat(ArmHoleData),
    //       wrist: parseFloat(WristData),
    //       sleeve: 1,
    //       //back_waist:
    //     }
    //   );
    //   const { data: lower_data } = await common_axios.post(
    //     "/save_measurment_value",
    //     {
    //       type: "Lower",
    //       measurements_basic_id: id,
    //       full_length: parseFloat(FullLengthData),
    //       hip_round: parseFloat(HipRoundData),
    //       inseam: parseFloat(InSeamData),
    //       thigh: parseFloat(ThighData),
    //       waist: parseFloat(WaistData),
    //       calf: parseFloat(CalfData),
    //       ankle: parseFloat(AnkleData),
    //       //back_waist:
    //     }
    //   );
    //   console.log(upper_data, lower_data);
    //   SetOrderDone(true);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <Container bottomDivider footerOnTabMob>
      {OrderDone ? (
        <SuccessPopUp
          toggle={toggle}
          title={"Your measurement added successfully and your order is placed"}
        />
      ) : (
        <></>
      )}
      <section className={styles.section}>
        <div style={{ padding: mobileView && "0 1rem", marginTop: "1em" }}>
          <Breadcrumb
            path={`Home / ${gender === "male" ? "Men" : "Women"} /`}
            activePath="Measurements"
          />
        </div>

        <Grid
          container
          className={cx(styles.gridContainer, styles.mainGridContainer)}
        >
          <Grid item xs={12} sm={12} md={5} style={{ height: "100%" }}>
            <div className={styles.modelImgContainer}>
              <img src={img} alt="all body details" />
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
              <div className={styles.OtherInfoDiv}>
                <span>
                  {" "}
                  <h1>Name:</h1>
                  <h3>{measurement?.name}</h3>{" "}
                </span>
                <span>
                  {" "}
                  <h1>Gender:</h1>
                  <h3>{measurement?.gender}</h3>{" "}
                </span>
                <span>
                  {" "}
                  <h1>Standard size:</h1>
                  <h3>{measurement?.standard_size}</h3>{" "}
                </span>
                <span>
                  {" "}
                  <h1>Fitting:</h1>
                  <h3>{measurement?.fitting}</h3>{" "}
                </span>
              </div>
              <Grid item xs={12}>
                <div className={styles.detailsHeader}>Upper Body</div>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>1. Neck</span>{" "}
                <div>{NeckData === "" ? "-" : NeckData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Shoulder</span>{" "}
                <div>{ShoulderData === "" ? "-" : ShoulderData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Chest</span>{" "}
                <div>{ChestData === "" ? "-" : ChestData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. Arm Hole</span>{" "}
                <div>{ArmHoleData === "" ? "-" : ArmHoleData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Sleeve Length</span>{" "}
                <div>{SleeveLengthData === "" ? "-" : SleeveLengthData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Wrist</span>{" "}
                <div>{WristData === "" ? "-" : WristData}</div>
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
                <span>1. Waist</span>{" "}
                <div>{WaistData === "" ? "-" : WaistData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>2. Full Length</span>{" "}
                <div>{FullLengthData === "" ? "-" : FullLengthData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>3. Hip Round</span>{" "}
                <div>{HipRoundData === "" ? "-" : HipRoundData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>4. InSeam</span>{" "}
                <div>{InSeamData === "" ? "-" : InSeamData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>5. Thigh</span>{" "}
                <div>{ThighData === "" ? "-" : ThighData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>6. Calf</span>{" "}
                <div>{CalfData === "" ? "-" : CalfData}</div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                <span>7. Ankle</span>{" "}
                <div>{AnkleData === "" ? "-" : AnkleData}</div>
              </Grid>
            </Grid>
            <Grid
              container
              className={cx(styles.gridContainer, styles.buttonGridContainer)}
              spacing={3}
            >
              <Grid item xs={6} sm={6} md={6}>
                <Link
                  to={`/add-measurement-body-measurement-${measurement?.gender}/${id}`}
                >
                  <Button
                    className={cx(styles.button, styles.backBtn)}
                    variant="contained"
                    color="default"
                    startIcon={<ArrowBackIcon />}
                  >
                    Back
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Button
                  variant="contained"
                  className={cx(styles.button, styles.addToBagBtn)}
                  color="default"
                  onClick={onSubmit}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}
