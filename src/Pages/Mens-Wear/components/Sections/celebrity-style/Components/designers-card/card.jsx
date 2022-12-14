import React, { useState } from 'react';
import { IconButton, useMediaQuery } from '@material-ui/core';
import styles from './card.module.scss';
import { Link } from 'react-router-dom';
//icon
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function ProductCard({ image, item }) {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const mobileView = useMediaQuery('(max-width:550px)');

  // console.log(item);

  return (
    <div>
      {!mobileView ? (
        <div className={styles.container}>
          <Link to={`/product-description/${item.product?.slug}`}>
            <div
              className={styles.imgContainer}
              style={{ position: 'relative' }}
            >
              <img src={image} alt='product' />
              <IconButton
                style={{ position: 'absolute', right: '5px', top: '5px' }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </Link>
          <Link
            to={`/product-description/${item.product?.slug}`}
            className={styles.productDetails}
          >
            <span className={styles.productName}>{item.brand}</span>
            <span className={styles.productDesc}>{item.title}</span>
            <p className={styles.productPrice}>
              <span>
                {item.currency_symbol}
                {item.has_offer
                  ? item.offer_price
                  : item.custom_price >= 1
                  ? item.custom_price
                  : item.readymade_price
                  ? item.readymade_price
                  : item.price}
              </span>
              {item.has_offer ? (
                <span>
                  {item.price} {item.discount} OFF
                </span>
              ) : null}
            </p>
          </Link>
        </div>
      ) : (
        <div className={styles.container}>
          <Link to={`/product-description/${item.product?.slug}`}>
            <div className={styles.imgContainer}>
              <img src={image} alt='product' />
            </div>
          </Link>
          <Link
            to={`/product-description/${item.product?.slug}`}
            className={styles.productDetails}
          >
            <span className={styles.productName}>{item.brand}</span>
            <span className={styles.productDesc}>{item.title}</span>
            <p className={styles.productPrice}>
              <span>
                {item.currency_symbol}
                {item.has_offer
                  ? item.offer_price
                  : item.custom_price >= 1
                  ? item.custom_price
                  : item.readymade_price
                  ? item.readymade_price
                  : item.price}
              </span>
              {item.has_offer ? (
                <span>
                  {item.price} {item.discount} OFF
                </span>
              ) : null}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
