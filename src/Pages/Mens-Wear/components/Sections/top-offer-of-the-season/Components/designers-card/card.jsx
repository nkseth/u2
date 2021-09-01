import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function DesignersCard({ image, title }) {
  const [isAddToWishList, setAddToWishList] = useState(true);
  const img =
    "https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="product" />
        <span>Happy 20% off</span>
      </div>
      <div className={styles.clothTypes}>
        <span>
          <Link to="offers">{title}</Link>{" "}
        </span>

        {isAddToWishList ? (
          <IconButton
            aria-label="product"
            onClick={() => {
              setAddToWishList(false);
            }}
            className={styles.icons}
            size="small"
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
            size="small"
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}
