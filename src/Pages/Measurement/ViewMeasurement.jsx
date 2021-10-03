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
import { SuccessPopUp } from "../Payment/payment";

import { getSingleMeasurement } from "../../Redux/actions/measurement";
export default function ViewMeasurement({
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
    // dispatch(saveMeasurement(user.api_token, upperBodyData));
    // dispatch(saveMeasurement(user.api_token, lowerBodyData));
    SetOrderDone(true);
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

        {measurement && (
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
                    <h3>{measurement.fitting}</h3>{" "}
                  </span>
                </div>
                <Grid item xs={12}>
                  <div className={styles.detailsHeader}>Upper Body</div>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>1. Neck</span>{" "}
                  <div>
                    {measurement?.measurments[0]?.neck
                      ? measurement?.measurments[0]?.neck
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>2. Shoulder</span>{" "}
                  <div>
                    {measurement?.measurments[0]?.shoulder
                      ? measurement?.measurments[0]?.shoulder
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>3. Chest</span>{" "}
                  <div>
                    {measurement?.measurments[0]?.chest
                      ? measurement?.measurments[0]?.chest
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>4. Arm Hole</span>{" "}
                  <div>
                    {measurement?.measurments[0]?.arm_hole
                      ? measurement?.measurments[0]?.arm_hole
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>5. Sleeve Length</span>{" "}
                  <div>
                    {measurement?.measurments[0]?.sleeve
                      ? measurement?.measurments[0]?.sleeve
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>6. Wrist</span>{" "}
                  <div>
                    {measurement?.measurments[0]?.wrist
                      ? measurement?.measurments[0]?.wrist
                      : 0}
                  </div>
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
                  <div>
                    {measurement?.measurments[1]?.waist
                      ? measurement?.measurments[1]?.waist
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>2. Full Length</span>{" "}
                  <div>
                    {measurement?.measurments[1]?.full_length
                      ? measurement?.measurments[1]?.full_length
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>3. Hip Round</span>{" "}
                  <div>
                    {measurement?.measurments[1]?.hip_round
                      ? measurement?.measurments[1]?.hip_round
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>4. InSeam</span>{" "}
                  <div>
                    {measurement?.measurments[1]?.inseam
                      ? measurement?.measurments[1]?.inseam
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>5. Thigh</span>{" "}
                  <div>
                    {measurement?.measurments[1]?.thigh
                      ? measurement?.measurments[1]?.thigh
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>6. Calf</span>{" "}
                  <div>
                    {measurement?.measurments[1]?.calf
                      ? measurement?.measurments[1]?.calf
                      : 0}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
                  <span>7. Ankle</span>{" "}
                  <div>
                    {measurement?.measurments[1]?.ankle
                      ? measurement?.measurments[1]?.ankle
                      : 0}
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                className={cx(styles.gridContainer, styles.buttonGridContainer)}
                spacing={3}
              >
                <Grid item xs={6} sm={6} md={6}>
                  <Link to={"/measurement"}>
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
        )}
      </section>
    </Container>
  );
}

// const GridData=()=>{
//   return(
//     <Grid
//           container
//           className={cx(styles.gridContainer, styles.mainGridContainer)}
//         >
//           <Grid item xs={12} sm={12} md={5} style={{ height: "100%" }}>
//             <div className={styles.modelImgContainer}>
//               <img src={img} alt="all body details" />
//             </div>
//           </Grid>
//           {!tabView && !mobileView && (
//             <Grid item xs={0} sm={0} md={1} style={{ height: "100%" }}></Grid>
//           )}
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={6}
//             style={{ height: "100%" }}
//             className={styles.detailsDiv}
//           >
//             <Grid
//               container
//               spacing={2}
//               className={cx(
//                 styles.upperBodyGridContainer,
//                 styles.gridContainer
//               )}
//             >
//               <div className={styles.OtherInfoDiv}>
//                 <span>
//                   {" "}
//                   <h1>Name:</h1>
//                   <h3>{measurement?.name}</h3>{" "}
//                 </span>
//                 <span>
//                   {" "}
//                   <h1>Gender:</h1>
//                   <h3>{measurement?.gender}</h3>{" "}
//                 </span>
//                 <span>
//                   {" "}
//                   <h1>Standard size:</h1>
//                   <h3>{measurement?.standard_size}</h3>{" "}
//                 </span>
//                 <span>
//                   {" "}
//                   <h1>Fitting:</h1>
//                   <h3>{measurement.fitting}</h3>{" "}
//                 </span>
//               </div>
//               <Grid item xs={12}>
//                 <div className={styles.detailsHeader}>Upper Body</div>
//               </Grid>
//               <Grid item xs={12}></Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>1. Neck</span>{" "}
//                 <div>
//                   {measurement?.measurments[0]?.neck
//                     ? measurement?.measurments[0]?.neck
//                     : NeckData === ""
//                     ? "-"
//                     : NeckData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>2. Shoulder</span>{" "}
//                 <div>
//                   {measurement?.measurments[0]?.shoulder
//                     ? measurement?.measurments[0]?.shoulder
//                     : ShoulderData === ""
//                     ? "-"
//                     : ShoulderData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>3. Chest</span>{" "}
//                 <div>
//                   {measurement?.measurments[0]?.chest
//                     ? measurement?.measurments[0]?.chest
//                     : ChestData === ""
//                     ? "-"
//                     : ChestData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>4. Arm Hole</span>{" "}
//                 <div>
//                   {measurement?.measurments[0]?.arm_hole
//                     ? measurement?.measurments[0]?.arm_hole
//                     : ArmHoleData === ""
//                     ? "-"
//                     : ArmHoleData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>5. Sleeve Length</span>{" "}
//                 <div>
//                   {measurement?.measurments[0]?.sleeve
//                     ? measurement?.measurments[0]?.sleeve
//                     : SleeveLengthData === ""
//                     ? "-"
//                     : SleeveLengthData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>6. Wrist</span>{" "}
//                 <div>
//                   {measurement?.measurments[0]?.wrist
//                     ? measurement?.measurments[0]?.wrist
//                     : WristData === ""
//                     ? "-"
//                     : WristData}
//                 </div>
//               </Grid>
//               {/* <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>7. Arm</span> <div>{}</div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>8. Waist </span> <div>{}</div>
//               </Grid> */}
//             </Grid>
//             <Grid
//               container
//               spacing={2}
//               className={cx(
//                 styles.lowerBodyGridContainer,
//                 styles.gridContainer
//               )}
//             >
//               <Grid item xs={12}>
//                 <span className={styles.detailsHeader}>Lower Body</span>
//               </Grid>
//               <Grid item xs={12}></Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>1. Waist</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.waist
//                     ? measurement?.measurments[1]?.waist
//                     : WaistData === ""
//                     ? "-"
//                     : WaistData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>2. Full Length</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.full_length
//                     ? measurement?.measurments[1]?.full_length
//                     : FullLengthData === ""
//                     ? "-"
//                     : FullLengthData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>3. Hip Round</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.hip_round
//                     ? measurement?.measurments[1]?.hip_round
//                     : HipRoundData === ""
//                     ? "-"
//                     : HipRoundData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>4. InSeam</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.inseam
//                     ? measurement?.measurments[1]?.inseam
//                     : InSeamData === ""
//                     ? "-"
//                     : InSeamData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>5. Thigh</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.thigh
//                     ? measurement?.measurments[1]?.thigh
//                     : ThighData === ""
//                     ? "-"
//                     : ThighData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>6. Calf</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.calf
//                     ? measurement?.measurments[1]?.calf
//                     : CalfData === ""
//                     ? "-"
//                     : CalfData}
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} className={styles.gridItem}>
//                 <span>7. Ankle</span>{" "}
//                 <div>
//                   {measurement?.measurments[1]?.ankle
//                     ? measurement?.measurments[1]?.ankle
//                     : AnkleData === ""
//                     ? "-"
//                     : AnkleData}
//                 </div>
//               </Grid>
//             </Grid>
//             <Grid
//               container
//               className={cx(styles.gridContainer, styles.buttonGridContainer)}
//               spacing={3}
//             >
//               <Grid item xs={6} sm={6} md={6}>
//                 <Link
//                   to={
//                     id
//                       ? "/measurement"
//                       : `/add-measurement-body-measurement-${gender}`
//                   }
//                 >
//                   <Button
//                     className={cx(styles.button, styles.backBtn)}
//                     variant="contained"
//                     color="default"
//                     startIcon={<ArrowBackIcon />}
//                   >
//                     Back
//                   </Button>
//                 </Link>
//               </Grid>
//               <Grid item xs={6} sm={6} md={6}>
//                 <Button
//                   variant="contained"
//                   className={cx(styles.button, styles.addToBagBtn)}
//                   color="default"
//                   onClick={onSubmit}
//                 >
//                   Save
//                 </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//   )
// }
