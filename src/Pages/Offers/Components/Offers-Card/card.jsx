import React from "react";
import styles from "./card.module.scss";

export default function OffersCard() {
  return (
    <div className={styles.container}>
      <div className={styles.upperDiv}>
        <div>
          <span>₹500</span>
          <span>Cashback</span>
        </div>
        <div>On minimum purchase of Rs. 2,000</div>
      </div>
      <div className={styles.lowerDiv}>
        <span>Code: FIRST500”</span>
        <span>Expiry: MAR 31 2021 11:30:00 P.M</span>
      </div>
    </div>
  );
}
