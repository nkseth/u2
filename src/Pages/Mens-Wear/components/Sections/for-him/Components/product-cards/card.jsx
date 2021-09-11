import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import parse from 'html-react-parser';
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

export default function ProductCard({ image, data }) {

  const [isAddToWishList, setAddToWishList] = useState(false);


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={data.feature_image} alt='product' />
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
        <Link to={{ pathname: `/product-description/${data.slug}` }}><span className={styles.productName}>{data.title}</span></Link>
        <span className={styles.productDesc}>{parse(data.description)}</span>
        <p className={styles.productPrice}>
          <span>{data.has_offer ? data.offer_price : data.price}</span>
          {data.has_offer ? <span>{data.price}<span style={{ color: "#9D8E73 " }}  >{data.discount}</span></span> : null}
        </p>
      </div>
    </div>
  );
}
