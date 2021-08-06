import React from "react";
import styles from "./breadcrumb.module.scss";

export default function Breadcrumb({ path, activePath, style }) {
  return (
    <div style={style} className={styles.breadcrumb}>
      <p>
        <span>{path}</span>&nbsp;
        <span> {activePath}</span>
      </p>
    </div>
  );
}
