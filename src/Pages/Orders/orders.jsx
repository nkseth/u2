import React, { useEffect, useState } from "react";
import { Grid, Button, IconButton, useMediaQuery } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import Container from "../../utils/Container/container";
import SideNavbar from "../../utils/Side-Navbar/sideNavbar";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./orders.module.scss";
import Rating from "./components/rating";
import { useSelector, useDispatch } from "react-redux";
import { get_orders } from "../../Redux/actions/profile";
import { getOrderDetail } from "../../Redux/actions/order";
import { getProductDetails } from "../../Redux/actions/products";
import Loader from "../../utils/Loader/Loader";

export default function Orders({
  match: {
    params: { orderId },
  },
}) {
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.root.orderDetail);

  useEffect(() => {
    // dispatch(getProductDetails(slug));
    dispatch(getOrderDetail(orderId));
  }, [dispatch, orderId]);

  const set_is_reviewed = (id) => {
    // dispatch(get_orders());
    dispatch(getOrderDetail(id));
  };
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");

  return (
    <Container
      bottomDivider
      dividerConStyle={{ paddingBottom: 0 }}
      footerOnTabMob
    >
      <div className={styles.section}>
        {!tabView && (
          <div>
            <SideNavbar />
          </div>
        )}

        <div
          style={{
            padding: mobileView
              ? "1rem"
              : tabViewPro
              ? "30px"
              : "0 4rem 0 4rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          {tabView && <Breadcrumb path="Home /" activePath="Profile" />}
          {loading ? (
            <Loader />
          ) : (
            order &&
            order.items.map((item) => {
              return (
                <>
                  <div className={styles.productDiv}>
                    <img src={item.product.image} alt="product" />
                    <div>
                      <span className={styles.productHeader}>
                        {item?.title}
                      </span>
                      <span className={styles.productDescription}>
                        {item.description}
                      </span>
                      <div className={styles.productQuantity}>
                        <span>Quantity:</span>
                        <span>{item.quantity}</span>
                      </div>
                      <span className={styles.price}>
                        ₹{Math.round(parseFloat(item.total)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {!item.feedback_id ? (
                    <Rating
                      item={item}
                      set_is_reviewed={set_is_reviewed}
                      id={item.items?.length > 0 ? item.items[0].id : null}
                    />
                  ) : null}
                </>
              );
            })
          )}
        </div>
      </div>
    </Container>
  );
}
