import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LazyLoadingImg } from "../../../../../../../utils/LazyLoading";
export default function StylishCard({ type, item }) {
  return (
    <div className={styles.container}>
      <LazyLoadingImg
        image={item.image}
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <img
        src={item.image}
        style={{ objectFit: "cover", objectPosition: "top" }}
        alt="product"
      />
      <div className={styles.content}>
        <div className={styles.text}>{item?.title || ""}</div>
        <Link to={`/designers-product-page/${type}/${item.slug}`}>
          <Button
            className={styles.shopNowBtn}
            variant="contained"
            color="default"
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt="product"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
