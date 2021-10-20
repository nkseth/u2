import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import styles from './card.module.scss';
import { Link } from 'react-router-dom';
//icon
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function DesignersCard({ image, title, description }) {
  const [isAddToWishList, setAddToWishList] = useState(true);
  const img =
    'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg';
  return (
    <div className={styles.container}>
      <Link to='offers'>
        <div className={styles.imgContainer}>
          <img src={image} alt='product' />
          {description && <div className='overlay'></div>}
          <span>{description}</span>
        </div>
      </Link>
      <div className={styles.clothTypes}>
        <span>
          <Link to='offers'>{title}</Link>{' '}
        </span>
      </div>
    </div>
  );
}
