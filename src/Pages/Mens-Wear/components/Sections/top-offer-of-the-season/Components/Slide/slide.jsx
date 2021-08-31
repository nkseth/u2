import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";

export default function DesignerSlide({ image1, image2, image3, image4, title }) {
  const mobileView = useMediaQuery("(max-width:400px)");
  const mobileViewPro = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const CustomView = useMediaQuery("(max-width:1050px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: mobileView ? "space-evenly" : "space-between",
        gap: mobileView ? "0.5rem" : "0rem",
        marginBottom: "3rem",
      }}
    >
      {mobileView ?
        <>
          <DesignersCard image={image3} title={title} />
          <DesignersCard image={image3} title={title} />
        </>
        :
        mobileViewPro ?
          <>
            <DesignersCard image={image3} title={title} />
            <DesignersCard image={image3} title={title} />
          </>
          :
          tabView ?
            <>
              <DesignersCard image={image3} title={title} />
              <DesignersCard image={image3} title={title} />
              <DesignersCard image={image3} title={title} />
            </>
            :
            tabViewPro ?
              <>
                <DesignersCard image={image3} title={title} />
                <DesignersCard image={image3} title={title} />
                <DesignersCard image={image3} title={title} />
              </>
              :
              CustomView ?
                <>
                  <DesignersCard image={image3} title={title} />
                  <DesignersCard image={image3} title={title} />
                  <DesignersCard image={image3} title={title} />

                </>
                :
                <>
                  <DesignersCard image={image3} title={title} />
                  <DesignersCard image={image3} title={title} />
                  <DesignersCard image={image3} title={title} />
                  <DesignersCard image={image3} title={title} />
                </>
      }
    </div>
  );
}
