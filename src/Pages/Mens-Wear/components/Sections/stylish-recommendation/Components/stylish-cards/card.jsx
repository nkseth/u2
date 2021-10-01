import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LazyLoadingImg } from '../../../../../../../utils/LazyLoading';
export default function StylishCard({ type, image, item }) {

  return (
    <div className={styles.container}>
      <LazyLoadingImg
        image={image}
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
      <img
        src={image}

        style={{ objectFit: "cover", objectPosition: "top" }}
        alt="product"
      />
      <div className={styles.content}>
        <div className={styles.text}>{item?.name || ""}</div>
        <Link to={`/designers-product-page/${type}/${item.slug}`}>
          <Button
            className={styles.shopNowBtn}
            variant="contained"
            color="default"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
        alt='product'

          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
