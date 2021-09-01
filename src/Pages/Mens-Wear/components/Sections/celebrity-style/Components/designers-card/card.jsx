import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard({ image }) {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://cdn.pixabay.com/photo/2017/08/07/12/49/people-2603521__340.jpg";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="product" />
        {isAddToWishList ? (
          <IconButton
            aria-label="product"
            onClick={() => {
              setAddToWishList(false);
            }}
            className={styles.icons}
          >
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label="product"
            onClick={() => {
              setAddToWishList(true);
            }}
            className={styles.icons}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <Link to="product-description" className={styles.productDetails}>
        <span className={styles.productName}>Levi’s</span>
        <span className={styles.productDesc}>Men black checked shirt</span>
        <p className={styles.productPrice}>
          <span>₹554 </span>
          <span>₹1499 63% OFF</span>
        </p>
      </Link>
    </div>
  );
}
