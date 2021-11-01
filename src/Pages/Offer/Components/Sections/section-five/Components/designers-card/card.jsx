import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard({ img, title, desc }) {
  const [isAddToWishList, setAddToWishList] = useState(false);

  return (
    <div className={styles.container} style={{ width: '100%' }}>
      <div className={styles.imgContainer}>
        <img src={img} alt='product' />
        {isAddToWishList ? (
          <IconButton
            aria-label='product'
            onClick={() => {
              setAddToWishList(false);
            }}
            className={styles.icons}
          >
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label='product'
            onClick={() => {
              setAddToWishList(true);
            }}
            className={styles.icons}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productName}>{title}</span>
        <span className={styles.productDesc}>
          {desc}
        </span>
        {/* <p className={styles.productPrice}>
          <span>₹554 </span>
          <span>₹1499 <span style={{ color: "#9D8E73" }} >63% OFF</span></span>
        </p> */}
      </div>
    </div>
  );
}
