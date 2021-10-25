import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import Image from "../../../Images/image/Product.png";

export default function HeroCard({ header, tagline, backgroundImg, designer }) {
  //`url(${backgroundImg})`
  return (
    <div
      style={{
        backgroundImage: backgroundImg,
        width: "90%",
        margin: "auto",
        height: 300,
        marginTop: 50,
      }}
      className={styles.container}
    >
      <div style={{ display: "inline-block" }}>
        <img
          style={{
            borderRadius: "50%",
            width: "20%",
            float: "left",
            marginLeft: 30,
            marginTop: 40,
          }}
          src={Image}
          width="100px"
          height="100px"
          alt={designer.id}
        />
        <br />
        <br />
        <br />
        <span style={{ marginLeft: 20 }} className={styles.header}>
          {header}
        </span>
        <span style={{ marginTop: 0, display: "block" }}>
          <Button className={styles.btn}>Follow</Button>
          <span style={{ margin: 10 }} />
          <Button className={styles.btn}>Contact me</Button>
        </span>
        <span
          style={{
            marginTop: 20,
            display: "block",
            marginLeft: 280,
            color: "#ffffff",
          }}
        >
          <span style={{ display: "block" }}>Expert in experience</span>
          <span>Lorem ipsum dolor sit.</span>
        </span>
      </div>
    </div>
  );
}
