import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
//Images
import D1 from "../Images/Designer1.jpg"
import D2 from "../Images/Designer2.jpg"
import D3 from "../Images/Designer3.jpg"
import D4 from "../Images/Designer4.jpg"

export default function DesignerSlide() {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: mobileView ? "0.5rem" : "1.5rem",
      }}
    >
      {!tabViewPro && <DesignersCard image={D1} />}
      {!mobileView && <DesignersCard image={D2} />}
      <DesignersCard image={D3} />
      <DesignersCard image={D4} />
    </div>
  );
}
