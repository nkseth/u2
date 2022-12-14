import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function DesignersCard({ image, item }) {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://images.pexels.com/photos/7137411/pexels-photo-7137411.png?auto=compress&cs=tinysrgb&dpr=2&w=500";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt='product' />
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
      <div className={styles.designerName}>{item.name}</div>
    </div>
  );
}
