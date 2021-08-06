import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import styles from "./slide.module.scss";

export default function Slide(props) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const img =
    "https://images.pexels.com/photos/6389803/pexels-photo-6389803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  return (
    <div className={styles.container}>
      <img src={img} alt='product' />
      <div>
        <span className={styles.header}>
          New Collection <br /> 50%off
        </span>
        {mobileView && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant='contained' className={styles.button}>
              Shop Now
            </Button>
          </div>
        )}

        {!mobileView && (
          <Button variant='contained' className={styles.button}>
            Shop Now
          </Button>
        )}

        {!tabViewPro && <div>{props.children}</div>}
      </div>
      {!tabViewPro && <img src={img} alt='product' />}
    </div>
  );
}
