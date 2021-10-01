import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import common_axios from "../../../../utils/axios.config";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../../Redux/actions/wishlist";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const [isAddToWishList, setAddToWishList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  const { user, isAuthenticated } = useSelector((state) => state.root.auth);
  const { added, removed } = useSelector((state) => state.root.updateWishlist);
  const { list } = useSelector((state) => state.root.wishlist);

  const setValue = async (product) => {
    await setIsLoading(true);
    await setProduct(product);
    await setIsLoading(false);
  };
  const favourite = list?.filter(
    (data) => data.listing_id === props.product.id
  );

  const add_to_wishlist = async (prod) => {
    if (!user?.api_token)
      return alert("Login first to add the item to wishlist");
    dispatch(addToWishlist(prod.slug, user.api_token));
    setAddToWishList(true);

    // try {
    //   console.log(prod.slug);
    //   const { data } = await common_axios.get(`/wishlist/${prod.slug}/add`);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const remove_from_wishlist = async (prod) => {
    if (!user?.api_token)
      return alert("Login first to add the item to wishlist");
    const id = prod.id;
    dispatch(removeFromWishlist(id, user.api_token));
    setAddToWishList(false);
    // try {
    //   console.log(prod.slug);
    //   const { data } = await common_axios.delete(
    //     `/wishlist/${prod.slug}/remove`
    //   );
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    setValue(props.product);
  }, [props.product]);

  // console.log(product)

  return (
    <div key={props.key} className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.feature_image} alt="product" />
        {isAddToWishList ? (
          <IconButton
            aria-label="product"
            onClick={() => {
              remove_from_wishlist(product);
            }}
            className={styles.icons}
          >
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label="product"
            onClick={() => add_to_wishlist(product)}
            className={styles.icons}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <div className={styles.productDetails}>
        <Link to={{ pathname: `/product-description/${product.slug}` }}>
          <span className={styles.productName}>{product.title}</span>
        </Link>
        <span className={styles.productDesc}>
          {parse(product.description ? product.description : "")}
        </span>
        <p className={styles.productPrice}>
          {!product.has_offer ? (
            <span>{product.price} </span>
          ) : (
            <span>{product.offer_price} </span>
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
