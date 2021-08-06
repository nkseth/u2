import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./simulate.module.scss";
//Icons
import { ReactComponent as SimulateIcon } from "../../Images/icons/simulate.svg";
import cameraFocusIcon from "../../Images/icons/cameraFocus.svg";

export default function Simulate() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const img =
    "https://s3-alpha-sig.figma.com/img/ab15/ade4/24d142b81e7197b510277e429c7e20ad?Expires=1627257600&Signature=HQi-cbxYjiCrsKpSBS~JGtlykUCZU11~AbTTibpi0LUnXjK2O9OalcSIX6DVxBRCt691JpsOE3AEAGBqif1WqsMn95pE63V1HrW4yQG326ewVviLu7ExzvK-kLuOBu3igMIqnWcB77HM21hKg5eWoC8cJuY2sV5D1a3uinV3fB~uk6FTtoHr~adsgMMGoGtVKuSoIEDZEK-6fcoE7gfCtU-II2bDgcVfQ-tBz8bP5vjQ8zam~8T7oGcg5Z924wAHoqs~HfRYf7DB44mxPFB~o8mm6HCfAgpuV0tAo-oGWpfjxKV7ZLDm~wfKM9ydnv2LvvYSzFPhP9b6~3vGvCgC7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <Container bottomDivider footerOnTabMob>
      <section>
        <div className={styles.simulationSection}>
          {tabView && !mobileView && (
            <div style={{ padding: "0 30px" }}>
              <Breadcrumb
                path='Home / Men / Measurements/'
                activePath=' Simulation'
              />
            </div>
          )}
          <div className={styles.imgSection}>
            {!tabView && (
              <Breadcrumb
                path='Home / Men / Measurements/'
                activePath=' Simulation'
              />
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100% - 32px)",
              }}
            >
              <img
                src={img}
                alt='simulate'
                style={{ height: "100%", paddingBottom: "1rem" }}
              />
              {!mobileView && (
                <img
                  src={cameraFocusIcon}
                  alt='cameraFocus'
                  className={styles.cameraFocusImg}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.lastSection}>
          <Button
            className={styles.button}
            endIcon={<SimulateIcon />}
            onClick={() => history.push("/add-measurement")}
          >
            Try before buy
          </Button>
        </div>
      </section>
    </Container>
  );
}
