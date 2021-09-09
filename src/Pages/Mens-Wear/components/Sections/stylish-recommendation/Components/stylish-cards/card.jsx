import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";

export default function StylishCard({ image, item }) {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt='product'
      />
      <div className={styles.content}>
        <div className={styles.text}>{item?.title || ''}</div>
        <Button
          className={styles.shopNowBtn}
          variant='contained'
          color='default'
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
