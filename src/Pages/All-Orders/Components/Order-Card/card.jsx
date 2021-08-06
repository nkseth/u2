import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomDivider from "../../../../utils/Custom Divider/divider";
import styles from "./card.module.scss";

export default function OrdersCard() {
  const mobileView = useMediaQuery("(max-width:550px)");
  const img =
    "https://www.figma.com/file/3feKLdzH2SEin23kTS0pjx/image/a96652a274f8f44a8fc9d72801987378591d2bc0";
  return (
    <div className={styles.mainContainer}>
      <CustomDivider />
      <div className={styles.cardContainer}>
        <img src={img} alt='product' />
        <div className={styles.detailsDiv}>
          <div className={styles.detailOne}>
            <div>
              <span>10 Current Fashion Trends You’ll Be Wearing in 2021</span>
              <span>Solid Straight Kurta</span>
            </div>
            <div>₹559</div>
          </div>
          {mobileView && (
            <div
              style={{
                fontFamily: "DM Serif Display",
                fontSize: "28px",
                fontWeight: 400,
                lineHeight: "36px",
              }}
            >
              ₹559
            </div>
          )}
          <div className={styles.detailTwo}>
            <span>Quantity:</span>
            <span>01</span>
          </div>
          <Button className={styles.trackBtn} variant='contained'>
            Track Order
          </Button>
          <div className={styles.detailThree}>
            <span>Order Detail</span>
            <Link>Cancel Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
