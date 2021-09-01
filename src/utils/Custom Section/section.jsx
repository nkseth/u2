import React from "react";
import styles from "./section.module.scss";

export default function CustomSection(props) {
  return (
    <div style={props.style} className={styles.container+' '+props.class}>
      {props.children}
    </div>
  );
}

// { background: props.background ? props.background : "#fff", }
