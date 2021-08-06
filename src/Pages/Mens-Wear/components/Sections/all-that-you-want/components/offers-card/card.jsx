import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
//icon
import Off50 from "../../../../../../../Images/icons/fiftyOff.svg";

export default function TopOffersCard() {
  const img =
    "https://cdn.pixabay.com/photo/2016/01/19/18/06/hands-1150073__340.jpg";
  return (
    <div className={styles.container}>
      <img src={img} alt="product" />
      <div className={styles.productDetailsDiv}>
        <img src={Off50} alt="50% off" />
        <span>OFFER WEEK</span>
        <span>Shirts &amp; Trousers Designers</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          adipiscing.
        </p>

        <Link to="/product-description">REDEEM YOUR OFFER CARD</Link>
      </div>
    </div>
  );
}
