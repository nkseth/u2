import React from "react";
import styles from "./card.module.scss";
//icon

export default function DesignersCard({ image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div className={styles.trends}>
        <span>New Fashion Trends</span>
        <span>₹3000</span>
      </div>
    </div>
  );
}
