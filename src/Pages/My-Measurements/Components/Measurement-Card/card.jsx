import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function MyMeasurementCard({ percentage, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.bearerInfoDiv}>
        <div className={styles.bearerInfoFirstDiv}>
          <span className={styles.bearer}>Alex’s measurement</span>
          <span className={styles.bearerBasicInfo}>18yrs, 50kg, 1.8m</span>
        </div>
        <div className={styles.completionPreview}>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: color,
              textColor: color,
              trailColor: "#fff",
              backgroundColor: "#fff",
            })}
            value={percentage || 70}
            text={`${percentage || 70}%`}
          />
        </div>
      </div>
      <div className={styles.buttonDiv}>
        <Button className={styles.button} variant='contained' color='default'>
          View
        </Button>
      </div>
    </div>
  );
}
