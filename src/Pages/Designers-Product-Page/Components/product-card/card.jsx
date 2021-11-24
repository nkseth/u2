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

import { useMediaQuery } from '@material-ui/core';
export default function ProductCard(props) {
  const dispatch = useDispatch();
  const [isAddToWishList, setAddToWishList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  const { user, isAuthenticated } = useSelector(state => state.root.auth);
  const { added, removed, loading } = useSelector(
    state => state.root.updateWishlist
  );
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
    // dispatch(getWishList(user.api_token));
  };

  const remove_from_wishlist = prod => {
    if (!user?.api_token)
      return alert('Login first to add the item to wishlist');
    const id = prod.id;
    dispatch(removeFromWishlist(id, user.api_token));
    // dispatch(getWishList(user.api_token));
    setAddToWishList(false);
  };

  const customView = useMediaQuery('(max-width:1044px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(min-width:768px) and (max-width:1044px');
  const mobileView = useMediaQuery('(max-width:550px)');

  useEffect(() => {
    if (isAuthenticated && list && list.length > 0) {
      const item = list.filter(data => data?.product_id === props.product.id);
      if (!item) return;
      if (item[0]?.id !== undefined) {
        console.log(item[0]);
        setAddToWishList(true);
      }
    } else setAddToWishList(false);

    // if (added) {
    //   console.log(added);
    //   dispatch(clearUpdateWishlist());
    //   // alert(added);
    // }
    // if (removed) {
    //   console.log(removed);
    //   // alert(removed);
    //   dispatch(clearUpdateWishlist());
    // }
    setValue(props.product);
  }, [props.product, dispatch, user, isAuthenticated, list]);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link to={{ pathname: `/product-description/${product.slug}` }}>
          <LazyLoadingImg image={product.cover_image} />
          {/* <img src={product.feature_image} alt='' /> */}
        </Link>
        {isAddToWishList ? (
          <IconButton
            aria-label='product'
            onClick={() => {
              remove_from_wishlist(product);
            }}
            className={styles.icons}
          >
            <FavoriteIcon
              style={{
                color: 'red',
                display: mobileView ? ' none' : 'unset',
              }}
            />
          </IconButton>
        ) : (
          <IconButton
            aria-label='product'
            onClick={() => add_to_wishlist(product)}
            className={styles.icons}
          >
            <FavoriteBorderIcon
              style={{
                display: mobileView ? ' none' : 'unset',
              }}
            />
          </IconButton>
        )}
      </div>
      <div style={{ display: 'flex' }}>
        <div className={styles.productDetails}>
          <Link to={{ pathname: `/product-description/${product?.slug}` }}>
            <span className={styles.productName}>{product?.title}</span>
          </Link>
          <span className={styles.productDesc}>{product?.brand}</span>
          {product.isCustomise === 'on' ? (
            product.custom_offer_price > 0 ? (
              <p className={styles.productPrice}>
                <span>
                  {product.currency_symbol}
                  {product.custom_offer_price}
                </span>
                <span style={{ display: 'flex', gap: '5px' }}>
                  <strike>
                    {product.currency_symbol}
                    {product.custom_price}
                  </strike>
                  <span>{product.custom_discount.toFixed(0)}% OFF</span>
                </span>
              </p>
            ) : product.has_variant ? (
              <p className={styles.productPrice}>
                <span>
                  {product.currency_symbol}
                  {product.readymade_offer_price}
                </span>
                <span style={{ display: 'flex', gap: '5px' }}>
                  <strike>
                    {product.currency_symbol}
                    {product.readymade_price}
                  </strike>
                  <span>{product.readymade_discount.toFixed(0)}% OFF</span>
                </span>
              </p>
            ) : (
              <p className={styles.productPrice}>
                <span>
                  {product.currency_symbol}
                  {product.custom_price}
                </span>
              </p>
            )
          ) : product.readymade_offer_price > 0 ? (
            <p className={styles.productPrice}>
              <span>
                {product.currency_symbol}
                {product.readymade_offer_price}
              </span>
              <span style={{ display: 'flex', gap: '5px' }}>
                <strike>
                  {product.currency_symbol}
                  {product.readymade_price}
                </strike>
                <span>{product.readymade_discount.toFixed(0)}% OFF</span>
              </span>
            </p>
          ) : (
            <p className={styles.productPrice}>
              <span>
                {product.currency_symbol}
                {product.readymade_price}
              </span>
            </p>
          )}

          <span className={styles.mobilewishlist}>
            {isAddToWishList ? (
              <IconButton
                onClick={() => {
                  remove_from_wishlist(product);
                }}
              >
                <FavoriteIcon
                  style={{ color: 'red', width: '18.94px', height: '18.15px' }}
                />
              </IconButton>
            ) : (
              <IconButton
                aria-label='product'
                onClick={() => add_to_wishlist(product)}
              >
                <FavoriteBorderIcon
                  style={{ width: '18.94px', height: '18.15px' }}
                />
              </IconButton>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
