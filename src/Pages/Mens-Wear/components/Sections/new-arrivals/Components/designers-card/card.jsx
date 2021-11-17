import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
//icon

export default function DesignersCard({ image, item, type }) {
  const history = useHistory();
  return (
    <div
      className={styles.container}
      onClick={() =>
        history.push(`/designers-product-page/${type}/${item.slug}`)
      }
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt="product" />
      <div className={styles.trends}>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </div>
    </div>
  );
}
