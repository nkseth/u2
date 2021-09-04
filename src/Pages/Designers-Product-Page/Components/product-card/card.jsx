import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
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
    <div key={props.key} className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.feature_image} alt='product' />
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
        <Link to={{ pathname:`/product-description/${product.slug}`}}><span className={styles.productName}>{product.title}</span></Link>
        <span className={styles.productDesc}>{product.description}</span>
        <p className={styles.productPrice}>
          {!product.has_offer ? <span>{product.price} </span> : <span>{product.offer_price} </span>}
          {product.has_offer ? <span>{product.currency_symbol}{parseFloat(product.raw_price).toFixed(2)} {product.discount}</span> : null}
        </p>
      </div>
    </div>
  );
}
