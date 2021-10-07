import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import styles from './card.module.scss';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
//icon

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import common_axios from '../../../../utils/axios.config';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishlist,
  clearUpdateWishlist,
  removeFromWishlist,
} from '../../../../Redux/actions/wishlist';
import { getWishList } from '../../../../Redux/actions/wishlist';

import { LazyLoadingImg } from '../../../../utils/LazyLoading';
import { CLEAR_WISHLIST_UPDATE } from '../../../../Redux/actions/types';

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const [isAddToWishList, setAddToWishList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  const { user, isAuthenticated } = useSelector(state => state.root.auth);
  const { added, removed } = useSelector(state => state.root.updateWishlist);
  const { list } = useSelector(state => state.root.wishlist);
  // console.log(props.product);

  const setValue = async product => {
    await setIsLoading(true);
    await setProduct(product);
    await setIsLoading(false);
  };

  const add_to_wishlist = prod => {
    if (!user?.api_token)
      return alert('Login first to add the item to wishlist');
    dispatch(addToWishlist(prod.slug, user.api_token));
    setAddToWishList(true);
    dispatch(getWishList(user.api_token));
  };

  const remove_from_wishlist = prod => {
    if (!user?.api_token)
      return alert('Login first to add the item to wishlist');
    const id = prod.id;
    dispatch(removeFromWishlist(id, user.api_token));
    dispatch(getWishList(user.api_token));
    setAddToWishList(false);
  };

  useEffect(() => {
    if (isAuthenticated && list.length > 0) {
      const item = list.filter(data => data.product_id === props.product.id);

      if (item[0]?.product_id) setAddToWishList(true);
    } else setAddToWishList(false);

    if (added) {
      // console.log(added);
      dispatch(clearUpdateWishlist());
      // alert(added);
    }
    if (removed) {
      // console.log(removed);
      // alert(removed);
      dispatch(clearUpdateWishlist());
    }
    setValue(props.product);
  }, [props, added, removed, dispatch, user, isAuthenticated, list]);

  return (
    <div key={props.key} className={styles.container}>
      <div className={styles.imgContainer}>
        <Link to={{ pathname: `/product-description/${product.slug}` }}>
          <LazyLoadingImg image={product.feature_image} />
        </Link>
        {isAddToWishList ? (
          <IconButton
            aria-label='product'
            onClick={() => {
              remove_from_wishlist(product);
            }}
            className={styles.icons}
          >
            <FavoriteIcon style={{ color: 'red' }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label='product'
            onClick={() => add_to_wishlist(product)}
            className={styles.icons}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <div className={styles.productDetails}>
        <Link to={{ pathname: `/product-description/${product.slug}` }}>
          <span className={styles.productName}>{product?.brand}</span>
        </Link>
        <span className={styles.productDesc}>
          {parse(product.description ? product?.title : '')}
        </span>

        <p className={styles.productPrice}>
          {!product.has_offer ? (
            <span>
              {product.currency_symbol}
              {product.custom_price >= 1
                ? product.custom_price
                : product.readymade_price >= 1
                ? product.readymade_price
                : product.price}
            </span>
          ) : (
            <span>{product.offer_price}</span>
          )}
          {product.has_offer ? (
            <span>
              {product.currency_symbol}
              {parseFloat(product.raw_price).toFixed(2)} {product.discount}
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
