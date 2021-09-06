import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import styles from "./slide.module.scss";
import image from "./Images/carouselMan.png"

export default function Slide(props) {

  const tabView = useMediaQuery("(max-width:800px)");
  const tabViewPro = useMediaQuery("(max-width:910px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div className={styles.container}>
      <img src={image} alt='product' />
      <div>
        <span className={styles.header}>
          {props.item.title}
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
      {!tabViewPro && <img src={image} alt='product' />}
    </div>
  );
}
