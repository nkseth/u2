import React, { useState } from "react";
import styles from "./card.module.scss";

export default function ProductCard({ type, price, img }) {
  const [active, seActive] = useState(false);
  return (
    <div className={styles.container}>
      <div
        onClick={() => seActive(!active)}
        style={{ border: active && "2px solid rgba(106, 91, 64, 1)" }}
      >
        <img src={img} alt={type} />
      </div>

      <div>
        <span>{type}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}
