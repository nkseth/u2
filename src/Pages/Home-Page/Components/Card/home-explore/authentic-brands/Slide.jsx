import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Card from "./card";
export default function DesignerSlide() {
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.up("sm"));
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "2rem 0",
      }}
    >
      {!tabViewPro && !matchesLg && (
        <>
          <Card />
          <Card />
        </>
      )}
      {matchesLg && !tabViewPro && (
        <>
          <Card />
          <Card />
        </>
      )}

      <Card />
      <Card />
    </div>
  );
}
