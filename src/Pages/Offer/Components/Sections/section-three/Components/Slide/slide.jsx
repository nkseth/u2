import React from "react";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";
import styles from "./slide.module.scss";



export default function DesignerSlide({ data }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: tabView ? "space-around" : "space-between",
          gap: mobileView ? ".5rem" : "1rem",
        }}
      >
        {!tabView && data.length != 0 ? <DesignersCard img={data[0]?.cover_image} name={data[0]?.name} slug={data[0]?.slug} desc={data[0].description} /> : null}
        {!mobileView && data.length > 1 ? <DesignersCard img={data[1]?.cover_image} name={data[1]?.name} slug={data[1]?.slug} desc={data[1].description} /> : null}
        {tabView || !mobileView ? <></> :
          <>
            {data.length > 2 ? <DesignersCard img={data[2]?.cover_image} name={data[2]?.name} slug={data[2]?.slug} desc={data[2].description} /> : null}
          </>}
        {data.length > 2 ? <DesignersCard img={data[2]?.cover_image} name={data[2]?.name} slug={data[2]?.slug} desc={data[2].description} /> : null}
        {mobileView ?
          <>
            {data.length > 2 ? <DesignersCard img={data[2]?.cover_image} name={data[2]?.name} slug={data[2]?.slug} desc={data[2].description} /> : null}
          </>

          :
          data.length > 3 ? <DesignersCard img={data[3]?.cover_image} name={data[3]?.name} slug={data[3]?.slug} desc={data[3].description} /> : null
        }
      </div>
    </>
  );
}
