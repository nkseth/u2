import React from "react";
import { useMediaQuery } from "@material-ui/core";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import CustomDivider from "../Custom Divider/divider";
import CustomSection from "../Custom Section/section";

export default function Container(props) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const view830 = useMediaQuery("(max-width:830px)");
  return (
    <div style={props.style}>
      <Header />
      {props.children}
      {props.footerOnAllView && <Footer />}
      {props.footerOnTabMob && tabView && !props.footerOnAllView && <Footer />}
    </div>
  );
}
