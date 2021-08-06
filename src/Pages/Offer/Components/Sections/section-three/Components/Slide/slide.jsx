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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: mobileView ? ".5rem" : "1rem",
        }}
      >
        {!tabView && <DesignersCard />}
        {!mobileView && <DesignersCard />}
        <DesignersCard />
        <DesignersCard />
      </div>
    </>
  );
}
