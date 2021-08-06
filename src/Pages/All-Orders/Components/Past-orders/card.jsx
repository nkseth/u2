import React from "react";
import { useHistory } from "react-router-dom";
import { Button, useMediaQuery } from "@material-ui/core";
import CustomDivider from "../../../../utils/Custom Divider/divider";
import styles from "./card.module.scss";
import { ReactComponent as StarIcon } from "../../../../Images/icons/star.svg";

export default function PastOrdersCard() {
  const history = useHistory();
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
            <div>Delivered on Jan 13</div>
          </div>
          <div className={styles.detailTwo}>
            <span>Quantity:</span>
            <span>01</span>
          </div>
          <div>₹559</div>
          <div className={styles.detailThree}>
            <span>Order Detail</span>
            {!mobileView && (
              <Button startIcon={<StarIcon />} className={styles.rateBtn}>
                Rate &amp; Review Product
              </Button>
            )}
          </div>
          {mobileView && (
            <div style={{ display: "grid", gap: "1rem" }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  color: "#42BE65",
                }}
              >
                Delivered on Jan 13
              </div>
              <Button
                startIcon={<StarIcon />}
                className={styles.rateBtn}
                onClick={() => {
                  history.push("/orders");
                  console.log("test");
                }}
              >
                Rate &amp; Review Product
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
