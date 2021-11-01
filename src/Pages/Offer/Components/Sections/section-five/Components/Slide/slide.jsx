import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import DesignersCard from "../designers-card/card";

export default function DesignerSlide({ img1, img2, img3, img4, title1, title2, title3, title4, desc1, desc2, desc3, desc4 }) {
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.up("sm"));
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "4rem 0",

      }}
    >
      {!tabViewPro && !matchesLg && (
        <div>
          <DesignersCard />
        </div>
      )}
      {matchesLg && !tabViewPro && (
        <>
          {img1 && <DesignersCard img={img1} title={title1} desc={desc1} />}
          {img2 && <DesignersCard img={img2} title={title2} desc={desc2} />}
        </>
      )}

      {img3 && <DesignersCard img={img3} title={title3} desc={desc3} />}
      {img4 && <DesignersCard img={img4} title={title4} desc={desc4} />}
    </div>
  );
}
