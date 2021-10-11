import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
import parse from "html-react-parser";

//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { LazyLoadingImg } from "../../../../../../../utils/LazyLoading";

export default function ProductCard({ data }) {
  const [isAddToWishList, setAddToWishList] = useState(false);
  // console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link to={{ pathname: `/product-description/${data.slug}` }}>
          <LazyLoadingImg image={data.feature_image} />
        </Link>
      </div>
      <div className={styles.productDetails}>
        <Link to={{ pathname: `/product-description/${data.slug}` }}>
          <span className={styles.productName}>{data.brand}</span>
        </Link>
        <span className={styles.productDesc}>{data.title}</span>
        <p className={styles.productPrice}>
          <span>
            {data.currency_symbol}
            {data.has_offer
              ? data.offer_price
              : data.custom_price >= 1
              ? data.custom_price
              : data.readymade_price
              ? data.readymade_price
              : data.price}
          </span>
          {data.has_offer ? (
            <span>
              {data.price}
              <span style={{ color: "#9D8E73 " }}>{data.discount}</span>
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
