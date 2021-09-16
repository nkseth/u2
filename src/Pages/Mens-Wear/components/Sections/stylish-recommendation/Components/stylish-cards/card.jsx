import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'
export default function StylishCard({ image, item }) {

  return (
    <div className={styles.container}>
      <img
        src={image}
        style={{ objectFit: "cover", objectPosition: "top" }}
        alt='product'
      />
      <div className={styles.content}>
        <div className={styles.text}>{item?.name || ''}</div>
        <Link to={`/designers-product-page/${item.slug}`}>
          <Button className={styles.shopNowBtn}
            variant='contained'
            color='default'>
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
