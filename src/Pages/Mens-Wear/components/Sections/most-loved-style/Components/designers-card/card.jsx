import React from "react";
import styles from "./card.module.scss";
//icon

export default function DesignersCard() {
  const img =
    "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg";
  return (
    <div className={styles.container}>
      <img src={img} alt="product" />
      <div className={styles.trends}>
        <span>New Fashion Trends</span>
        <span>₹3000</span>
      </div>
    </div>
  );
}
