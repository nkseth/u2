import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";

export default function HeroCard({ header, tagline, backgroundImg }) {
  return (
    <div
      // style={{ backgroundImage: `url(${backgroundImg})` }}
      className={styles.container}
    >
      <div>
        <span className={styles.header}>
          50 - 60% off
          <br />
          Best of season
          <br /> offers
        </span>
        <Button
          onClick={() => alert(`I don't know this page okay`)}
          className={styles.btn}
          variant="contained"
          color="default"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
