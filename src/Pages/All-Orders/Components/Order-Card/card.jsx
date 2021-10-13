import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CustomDivider from "../../../../utils/Custom Divider/divider";
import styles from "./card.module.scss";

export default function OrdersCard({ pending, item, orderId }) {
  // console.log(item);
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
          <div className={styles.detailTwo}>
            <span>Quantity:</span>
            <span>{item.quantity}</span>
          </div>
          <div className={styles.detailOne}>
            <div>
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  history.push(`/product-description/${item.slug}`)
                }
              >
                {item.title}
              </span>
              {/* <span>Solid Straight Kurta</span> */}
            </div>

            <div>
              {item.currency_symbol}
              {item.total}
            </div>
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
              {item.currency_symbol}
              {item.total}
            </div>
          )}
          {pending ? (
            <Button
              onClick={() =>
                history.push(`/add-measurement-choose-standard-size/${orderId}`)
              }
              className={styles.trackBtn}
              variant="contained"
              style={{ whiteSpace: "nowrap" }}
            >
              Add Measurement
            </Button>
          ) : (
            <Button
              onClick={() => history.push(`/trackorder/${orderId}`)}
              className={styles.trackBtn}
              variant="contained"
              style={{ whiteSpace: "nowrap" }}
            >
              Track Order
            </Button>
          )}
          <div className={styles.detailThree}>
            <span
              style={{ cursor: "pointer" }}
              // onClick={() => history.push(`/rate_order/${orderId}`)}
            >
              Order Detail
            </span>
            <span></span>
            {/* <Link>Cancel Order</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
