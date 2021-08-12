import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";

export default function HeroCard({ header, tagline, backgroundImg }) {
    //`url(${backgroundImg})`
  return (
    <div
      style={{ backgroundImage:  backgroundImg, width:"100%", height:300}}
      className={styles.container}
    >
      <div>
        <span className={styles.header}>{header}</span>
        
      </div>
    </div>
  );
}