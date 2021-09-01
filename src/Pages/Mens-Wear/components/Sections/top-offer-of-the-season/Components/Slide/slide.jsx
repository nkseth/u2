import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";

export default function DesignerSlide({ image1, image2, image3, image4, title }) {
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const CustomView = useMediaQuery("(max-width:1050px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: mobileView ? "space-evenly" : "space-evenly",
        gap: mobileView ? "0.5rem" : "0rem",
        marginBottom: "3rem",
      }}
    >
      {!tabViewPro && (
        <>
          <DesignersCard image={image1} title={'kurtas , Shirts'} />
          <DesignersCard image={image2} title={'Sweashirts'} />
        </>
      )}
      {!CustomView ?
        <DesignersCard image={image4} title={'TShirts and Jeans'} />
        :
        <></>
      }
      {tabViewPro && !mobileView ?
        <DesignersCard image={image4} title={'TShirts and Jeans'} />
        :
        <></>
      }
      <DesignersCard image={image3} title={title} />
      {/* {
        mobileView ?
          <></>
          :
          <DesignersCard image={image3} title={title} />

      } */}
    </div>
  );
}
