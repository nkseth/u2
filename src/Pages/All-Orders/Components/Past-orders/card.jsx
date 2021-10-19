import React from "react";
import { useHistory } from "react-router-dom";
import { Button, useMediaQuery } from "@material-ui/core";
import CustomDivider from "../../../../utils/Custom Divider/divider";
import styles from "./card.module.scss";
import { ReactComponent as StarIcon } from "../../../../Images/icons/star.svg";

export default function PastOrdersCard({ item, orderId, deliveryDate }) {
  const history = useHistory();
  const mobileView = useMediaQuery("(max-width:550px)");

  return (
    <div className={styles.mainContainer}>
      <CustomDivider />
      <div className={styles.cardContainer}>
        <img
          src={item.product.image}
          alt={item.title}
          style={{ cursor: "pointer" }}
          onClick={() => history.push(`/product-description/${item.slug}`)}
        />
        <div className={styles.detailsDiv}>
          <div className={styles.detailOne}>
            <div>
              <span>{item.title}</span>
              <span>{item.fabric}</span>
            </div>
            <div>Delivered on {deliveryDate}</div>
          </div>
          <div className={styles.detailTwo}>
            <span>Quantity:</span>
            <span>{item.quantity}</span>
          </div>
          <div>
            {item.currency_symbol}
            {item.total}
          </div>
          <div className={styles.detailThree}>
            {!mobileView && (
              <Button
                startIcon={<StarIcon />}
                className={styles.rateBtn}
                onClick={() => history.push(`/rate_order/${orderId}`)}
              >
                Rate &amp; Review Product
              </Button>
            )}
            <div>
              <span
                onClick={() => history.push(`/order-details/${orderId}`)}
                style={{ color: "#6a5b40", cursor: "pointer" }}
              >
                Order Detail
              </span>
            </div>
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
                onClick={() => history.push(`/rate_order/${orderId}`)}
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
