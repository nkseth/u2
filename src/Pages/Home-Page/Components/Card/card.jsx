import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";

export default function HeroCard({ header, tagline, backgroundImg }) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className={styles.container}
    >
      <div>
        <span className={styles.header}>{header}</span>
        <p>
          {tagline ||
            " The first collection, Rise, is named after the poem Still, I rise by Maya Angelou, about falling down and getting back up. Time and time again."}
        </p>
        <Link to="/designer-home">
          <Button className={styles.btn} variant="contained" color="default">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
