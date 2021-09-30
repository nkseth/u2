import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import styles from './card.module.scss';
import parse from 'html-react-parser';

//icon
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

export default function ProductCard({ data }) {
  const [isAddToWishList, setAddToWishList] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link to={{ pathname: `/product-description/${data.slug}` }}>
          <img src={data.feature_image} alt='product' />
        </Link>
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
