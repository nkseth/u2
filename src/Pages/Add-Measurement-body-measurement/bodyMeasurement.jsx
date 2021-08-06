import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import { motion } from "framer-motion";
import Container from "../../utils/Container/container";
import styles from "./bodyMeasurement.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomTextField from "./Components/Custom-TextField/textField";
//images
import body from "../../Images/body/body.svg";

export default function AddMeasurementBodyMeasurement() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [bodyHalf, setbodyHalf] = useState("upper");
  const [isAccordionOpen, setAccordionOpen] = useState({
    neck: false,
    shoulder: false,
    chest: false,
    arm: false,
    waist: false,
    hipRound: false,
    thigh: false,
    knee: false,
    ankle: false,
  });

  const handleAccordionChange = (e) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [e]: !isAccordionOpen[e],
    }));
  };
  console.log(isAccordionOpen.neck);
  const neckImg =
    "https://images.pexels.com/photos/5391353/pexels-photo-5391353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.section}>
        <div
          className={styles.imgDiv}
          style={{ height: tabViewPro ? "70vh" : "calc(100vh - 130px)" }}
        >
          <img src={isAccordionOpen.neck ? neckImg : body} alt='body' />
        </div>
        <div>
          <div className={styles.tabsDiv}>
            <Button
              className={cx(
                styles.tabButton,
                styles.btn1,
                bodyHalf === "upper" && styles.buttonActive
              )}
              variant='contained'
              onClick={() => setbodyHalf("upper")}
            >
              Upper Body
            </Button>
            <Button
              className={cx(
                styles.tabButton,
                styles.btn2,
                bodyHalf === "lower" && styles.buttonActive
              )}
              variant='contained'
              onClick={() => setbodyHalf("lower")}
            >
              Lower Body
            </Button>
          </div>
          <div className={styles.tabsHeader}>Add measurement</div>
          <div className={styles.accordionDiv}>
            {bodyHalf === "upper" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Accordion
                  onChange={() => handleAccordionChange("neck")}
                  style={{
                    boxShadow: "none",
                    margin: 0,
                    borderRadius: "5px 0",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Neck</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField
                      label='Back neck'
                      helperText='Click the link below and watch the intruction video for Measurement Video Link'
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => handleAccordionChange("shoulder")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Shoulder</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => handleAccordionChange("chest")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Chest</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Arm</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Waist</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{
                    boxShadow: "none",
                    margin: 0,
                    borderRadius: "5px 0",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Waist</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Waist' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Hip round</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Thigh</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Knee</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  onChange={() => console.log("hola")}
                  style={{ boxShadow: "none", margin: 0 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    IconButtonProps={{ size: "small" }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    className={styles.accordionSummary}
                  >
                    <span className={styles.accordionHeader}>Ankle</span>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      background: "#e0e0e0f2",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <CustomTextField label='Neck around' />
                    <CustomTextField label='Front neck' />
                    <CustomTextField label='Back neck' />
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: " 77px 0 62px 0",
              }}
            >
              <Button
                className={styles.submitBtn}
                onClick={() => history.push("/measurement")}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
