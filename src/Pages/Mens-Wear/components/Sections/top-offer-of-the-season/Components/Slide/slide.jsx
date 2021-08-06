import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";

export default function DesignerSlide() {
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: mobileView ? "0.5rem" : "1rem",
        marginBottom: "3rem",
      }}
    >
      {!tabViewPro && (
        <>
          <DesignersCard />
          <DesignersCard />
        </>
      )}

      <DesignersCard />
      <DesignersCard />
    </div>
  );
}
