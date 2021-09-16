import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard({ image, item }) {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://cdn.pixabay.com/photo/2017/08/07/12/49/people-2603521__340.jpg";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="product" />

      </div>
      <Link to={`/product-description/${item.product?.slug}`} className={styles.productDetails}>
        <span className={styles.productName}>{item.title}</span>
        <span className={styles.productDesc}>{item.description}</span>
        <p className={styles.productPrice}>
          <span>{item.has_offer ? item.offer_price : item.price}</span>
          {item.has_offer ? <span>{item.price}{' '}{item.discount}{' '}OFF</span> : null}
        </p>
      </Link>
    </div>
  );
}
