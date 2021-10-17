import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CustomDivider from "../../../../utils/Custom Divider/divider";
import styles from "./card.module.scss";

export default function OrdersCard({ pending, item, orderId }) {
  const history = useHistory();
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div className={styles.mainContainer}>
      {!item && <CustomDivider />}
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
              <h1
                style={{ cursor: "pointer" }}
                onClick={() =>
                  history.push(`/product-description/${item.slug}`)
                }
              >
                {item.title}
              </h1>
              <span>Solid Straight Kurta</span>
            </div>

            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>

              {item.currency_symbol}
              {item.total}
            </div>
          </div>
          <div className={styles.detailTwo}>
            <span>Quantity:</span>
            <span>{item.quantity}</span>
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
            <Link
              to={`/order-details/${orderId}`}
              style={{ cursor: "pointer" }}
              // onClick={() => history.push(`/rate_order/${orderId}`)}
            >
              Order Detail
            </Link>
            <span></span>
            {/* <Link>Cancel Order</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
