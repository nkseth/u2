import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'
export default function StylishCard({ image, item }) {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt='product'
      />
      <div className={styles.content}>
        <div className={styles.text}>{item?.title || ''}</div>
        <Link to='designers-product-page/blazers-and-coats'>
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
