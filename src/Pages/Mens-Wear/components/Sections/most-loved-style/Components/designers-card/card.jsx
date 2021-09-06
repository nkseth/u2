import React from "react";
import styles from "./card.module.scss";
//icon

export default function DesignersCard({ image, item }) {
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div className={styles.trends}>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </div>
    </div>
  );
}
