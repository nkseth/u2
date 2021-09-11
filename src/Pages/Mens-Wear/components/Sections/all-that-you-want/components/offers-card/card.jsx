import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
//icon
import Off50 from "../../../../../../../Images/icons/fiftyOff.svg";

export default function TopOffersCard({ title, image, description }) {
  const img =
    "https://cdn.pixabay.com/photo/2016/01/19/18/06/hands-1150073__340.jpg";
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div className={styles.productDetailsDiv}>
        <img src={Off50} alt="50% off" />
        <span>OFFER WEEK</span>
        <span><Link to='/product-description/blazers-and-coats' style={{ color: "inherit", textDecoration: "none", fontSize: "inherit" }} >{title}</Link></span>
        <p>
          {description}
        </p>

        <Link to="/product-description">REDEEM YOUR OFFER CARD</Link>
      </div>
    </div>
  );
}
