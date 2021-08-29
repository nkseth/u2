import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard(props) {

  const [isAddToWishList, setAddToWishList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  const setValue = async () => {
    await setIsLoading(true)
    await setProduct(props.product)
    await setIsLoading(false)
  }

  useEffect(async () => {
    await setValue()
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt='product' />
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
        <span className={styles.productName}>{product.Name}</span>
        <span className={styles.productDesc}>{product.description}</span>
        <p className={styles.productPrice}>
          <span>{product.price} </span>
          <span>{product.currency_symbol}{product.price} {product.off}</span>
        </p>
      </div>
    </div>
  );
}
