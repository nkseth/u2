import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import styles from './card.module.scss';
import parse from 'html-react-parser';
//icon
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

export default function ProductCard({ image, data }) {
  const [isAddToWishList, setAddToWishList] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/* <img src={data.feature_image} alt='product' /> */}
        <img
          src={
            'https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=835&q=80'
          }
          alt='product'
        />
      </div>
      <div className={styles.productDetails}>
        <Link to={{ pathname: `/product-description/${data.slug}` }}>
          <span className={styles.productName}>{data.title}</span>
        </Link>
        <span className={styles.productDesc}>
          {data.description ? data.description : ''}
        </span>
        <p className={styles.productPrice}>
          <span>{data.has_offer ? data.offer_price : data.price}</span>
          {data.has_offer ? (
            <span>
              {data.price}
              <span style={{ color: '#9D8E73 ' }}>{data.discount}</span>
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
