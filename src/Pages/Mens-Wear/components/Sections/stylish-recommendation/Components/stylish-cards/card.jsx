import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";

export default function StylishCard() {
  return (
    <div className={styles.container}>
      <img
        src='https://s3-alpha-sig.figma.com/img/d6f1/6044/868c6384a5a7e61161c2fbc09f2e89cb?Expires=1627862400&Signature=JjaFxX0RuuXNg~QCmm9rGczpfFqq6YhGdxz~I4DBzANuEeW3TZ~KPo7T1wOJZrKvIoRI6q78Naw-LKJRkT~lUepCJteQZUdDoWTuDyD9VXykrGo9y-jGKfALcBZV8ex3EiDxGa~LgAdjG2svFGjXkSuUkL1iPPTm1yJZdh4R2OI6TKdKjxkki2J49aG5r6ZyFQhNQ9jNcLcZXvR7EJGABnEVLoVe~Af2cYmFPW8HL0VOT5zyqeObK8gwPDOSH4DgReqf~pFIeVzc41EC5e4YRSr~otz-FocINeq~xMGRSTR7ypYAxyKhROwd0gNwhzM0L6SR4ym9N3C9UnCOvy3fUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        alt='product'
      />
      <div className={styles.content}>
        <div className={styles.text}>The modern casual look</div>
        <Button
          className={styles.shopNowBtn}
          variant='contained'
          color='default'
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
