import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import styles from "./slide.module.scss";
import image from "./Images/carouselMan.png";
import { Link } from "react-router-dom";

export default function Slide(props) {
  const tabView = useMediaQuery("(max-width:800px)");
  const tabViewPro = useMediaQuery("(max-width:910px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div>
        <span className={styles.header}>
          {props.item?.hasOwnProperty("title") ? props.item.title : "item"}
        </span>
        {mobileView && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to={`/designers-product-page/${props.type}/blazers-and-coats`}
            >
              <Button variant="contained" className={styles.button}>
                Shop Now
              </Button>
            </Link>
          </div>
        )}

        {!mobileView && (
          <Link to={`/designers-product-page/${props.type}/blazers-and-coats`}>
            <Button variant="contained" className={styles.button}>
              Shop Now
            </Button>
          </Link>
        )}

        {!tabViewPro && <div>{props.children}</div>}
      </div>
      {!tabViewPro && <img src={image} alt="product" />}
    </div>
  );
}
