import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";

export default function DesignerSlide({ image1, image2, image3, image4 }) {
  const theme = useTheme();
  const LaptopView = useMediaQuery("(max-width:1210px)");
  const tabViewPro = useMediaQuery("(max-width:935px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: mobileView || tabViewPro ? 'space-around' : "space-between",
        gap: "1rem",
        padding: "2rem 0em",
      }}
    >

      {LaptopView ?
        <DesignersCard image={image1} />
        :
        <>
          <DesignersCard image={image2} />
          <DesignersCard image={image3} />

        </>
      }
      {tabViewPro ?
        <></>
        :
        <DesignersCard image={image4} />
      }
      {
        mobileView ?
          <></>
          :
          <DesignersCard image={image1} />
      }
    </div>
  );
}
