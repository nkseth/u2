import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard() {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://cdn.pixabay.com/photo/2017/08/07/12/49/people-2603521__340.jpg";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="product" />
        
      </div>
      <Link to="product-description" className={styles.productDetails}>
        <span className={styles.productName}>10 fashion tips by top designers</span>
        <span className={styles.productDesc}>Creator Name</span>
        <p className={styles.productPrice}>
          <span>XXX Views  </span> 
          <span>XX hours ago</span>
        </p>
      </Link>
    </div>
  );
}
