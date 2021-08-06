import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
import styles from "./slide.module.scss";

export default function DesignerSlide() {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      {mobileView && (
        <div className={styles.header}>
          <p>
            <span>Most Loved</span>&nbsp;
            <span>Style</span>
          </p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: mobileView ? ".5rem" : tabViewPro ? "1rem" : "2rem",
        }}
      >
        {!mobileView && (
          <div className={styles.header}>
            <p>
              <span>
                Most <br />
                Loved{" "}
              </span>
              <span>Style</span>
            </p>
          </div>
        )}

        {!tabViewPro && <DesignersCard />}
        <DesignersCard />
        <DesignersCard />
      </div>
    </>
  );
}
