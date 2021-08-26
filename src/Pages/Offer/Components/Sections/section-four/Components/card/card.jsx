import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function DiscountCard({ img, brandImg }) {
  const [isAddToWishList, setAddToWishList] = useState(false);

  return (
    <div className={styles.container}>
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
            <FavoriteBorderIcon style={{ color: "#fff" }} />
          </IconButton>
        )}
      </div>
      <div className={styles.brandDetails}>
        <img src={brandImg} alt='brand' />
        <span>Up to 30 - 40% Off</span>
      </div>
    </div>
  );
}
