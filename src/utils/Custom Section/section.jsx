import React from "react";
import styles from "./section.module.scss";
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData"

export default function CustomSection(props) {
  return (
    <div style={props.style} className={styles.container + ' ' + props.class}>
      {props.children}
    </div>
  );
}

// { background: props.background ? props.background : "#fff", }
