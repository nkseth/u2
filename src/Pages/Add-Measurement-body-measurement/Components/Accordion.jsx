import React, { useState } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import cx from "classnames";
import { motion } from "framer-motion";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import CustomTextField from "../Components/CustomTextField";

import styles from "./Accordion.module.scss";
import { Link } from "react-router-dom";

function AccordionS({
  position,
  FocusIt,
  Open,
  Form,
  AllDone,
  SetIt,
  NECK,
  UploadMeasurement,
  CHEST,
  WRIST,
  SHOULDER,
  ARMHOLE,
  SLEEVE,
  WAIST,
  HIPROUND,
  INSEAM,
  FULLLENGTH,
  THIGH,
  CALF,
  ANKLE,
  basicId,
  match,
}) {
  console.log(match);
  return (
    <div className={styles.accordionDiv}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {position === "upper" ? (
          <>
            <AccordionSingle
              name={"Neck"}
              Open={Open}
              SetOpen={FocusIt}
              Form={Form}
              value={NECK}
            />
            <AccordionSingle
              name={"Shoulder"}
              SetOpen={FocusIt}
              Form={Form}
              value={SHOULDER}
              Open={Open}
            />
            <AccordionSingle
              name={"Chest"}
              SetOpen={FocusIt}
              Form={Form}
              value={CHEST}
              Open={Open}
            />
            <AccordionSingle
              name={"Arm Hole"}
              SetOpen={FocusIt}
              Form={Form}
              value={ARMHOLE}
              Open={Open}
            />
            <AccordionSingle
              name={"Sleeve length"}
              SetOpen={FocusIt}
              Form={Form}
              value={SLEEVE}
              Open={Open}
            />
            <AccordionSingle
              name={"Wrist"}
              SetOpen={FocusIt}
              Form={Form}
              value={WRIST}
              Open={Open}
            />
          </>
        ) : position === "lower" ? (
          <>
            <AccordionSingle
              name={"Waist"}
              Open={Open}
              SetOpen={FocusIt}
              Form={Form}
              value={WAIST}
            />
            <AccordionSingle
              name={"Full length"}
              SetOpen={FocusIt}
              Form={Form}
              value={FULLLENGTH}
              Open={Open}
            />
            <AccordionSingle
              name={"Hip Round"}
              SetOpen={FocusIt}
              Form={Form}
              value={HIPROUND}
              Open={Open}
            />
            <AccordionSingle
              name={"InSeam"}
              SetOpen={FocusIt}
              Form={Form}
              value={INSEAM}
              Open={Open}
            />
            <AccordionSingle
              name={"Thigh"}
              SetOpen={FocusIt}
              Form={Form}
              value={THIGH}
              Open={Open}
            />
            <AccordionSingle
              name={"Calf"}
              SetOpen={FocusIt}
              Form={Form}
              value={CALF}
              Open={Open}
            />
            <AccordionSingle
              name={"Ankle"}
              SetOpen={FocusIt}
              Form={Form}
              value={ANKLE}
              Open={Open}
            />
          </>
        ) : (
          <></>
        )}
      </motion.div>
      {AllDone === true ? (
        <Link
          to={`/viewmeasurement/save/${basicId}`}
          style={{ color: "#fff", display: "flex", alignItems: "center" }}
        >
          <Button
            className={styles.submitBtn}
            onClick={AllDone === true ? UploadMeasurement : SetIt}
          >
            Submit
          </Button>
        </Link>
      ) : (
        <Button
          className={styles.submitBtn}
          onClick={AllDone === true ? UploadMeasurement : SetIt}
        >
          {AllDone}
        </Button>
      )}
    </div>
  );
}

export default AccordionS;

// Accordion component

function AccordionSingle({ name, Open, SetOpen, Form, value }) {
  return (
    <Accordion
      // onChange={() => { handleAccordionChange("neck"); FocusIt('neck') }}
      style={{
        boxShadow: "none",
        margin: 0,
        borderRadius: "5px 0",
        width: "100%",
        background: "#FBFBFB",
      }}
      expanded={Open === name}
      onChange={() => SetOpen(name)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        IconButtonProps={{ size: "small" }}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={styles.accordionSummary}
      >
        <span className={styles.accordionHeader}>{name}</span>
      </AccordionSummary>
      <AccordionDetails
        style={{
          background: "#fbfbfb",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <CustomTextField
          label={name}
          size={"small"}
          Form={Form}
          name={name}
          values={value}
        />
      </AccordionDetails>
    </Accordion>
  );
}
