import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery } from "@material-ui/core";
import Container from "../../utils/Container/container";
import CustomDivider from "../../utils/Custom Divider/divider";
import SideNavbar from "../../utils/Side-Navbar/sideNavbar";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import OrdersCard from "./Components/Order-Card/card";
import styles from "./allOrders.module.scss";
//icons
import DeliveryVanIcon from "../../Images/icons/devliveryVan.svg";
import PackageIcon from "../../Images/icons/package.svg";
import PastOrdersCard from "./Components/Past-orders/card";
import { useDispatch, useSelector } from "react-redux";
import { get_orders } from "../../Redux/actions/profile";
import Loader from "../../utils/Loader/Loader";

export default function AllOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.root.profile);
  console.log(orders);
  useEffect(() => {
    dispatch(get_orders());
  }, [dispatch]);
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  let pendingOrders = [],
    confirmedOrders = [],
    deliverdOrders = [];

  if (orders) {
    orders.forEach((order) => {
      if (
        order.order_status.toLowerCase() === "pending" ||
        order.order_status.toLowerCase() === "pending"
      )
        pendingOrders.push(order);
      if (order.order_status.toLowerCase() === "confirmed")
        confirmedOrders.push(order);
      if (order.order_status.toLowerCase() === "delivered")
        deliverdOrders.push(order);
    });
  }
  return (
    <Container bottomDivider pBottom="0" footerOnTabMob>
      {!orders ? (
        <Loader />
      ) : (
        <section className={styles.section}>
          {!tabView && <SideNavbar />}
          <div className={styles.cardsDivOuterContainer}>
            {tabView && (
              <Breadcrumb path="Home /" activePath="Profile / Orders" />
            )}
            <div className={styles.headerDiv}>
              <span className={styles.header}>Orders</span>
              <CustomDivider />
            </div>
            {confirmedOrders.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 0",
                  }}
                >
                  <img src={DeliveryVanIcon} alt="Delivery Van" />
                  {"On the way"}
                </div>
                <CustomDivider />
                {confirmedOrders.map(
                  ({ id, customer, items, order_number }) => {
                    return (
                      <div className={styles.ordersCardDiv}>
                        {/* {console.log(order)} */}
                        {items.map((item) => (
                          <OrdersCard item={item} key={item.id} orderId={id} />
                        ))}

                        <CustomDivider />
                      </div>
                    );
                  }
                )}
              </div>
            )}
            {pendingOrders.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 0",
                  }}
                >
                  <img src={DeliveryVanIcon} alt="Delivery Van" />
                  {"Pending"}
                </div>
                <CustomDivider />
                {pendingOrders.map(({ id, customer, items, order_number }) => (
                  <div className={styles.ordersCardDiv}>
                    {/* {console.log(order)} */}

                    {items.map((item) => (
                      <OrdersCard
                        pending
                        item={item}
                        key={item.id}
                        orderId={id}
                      />
                    ))}

                    <div className={styles.deliveryAddress}>
                      <span>Delivery Address</span>
                      <p>
                        <span>{customer.name}</span>
                        <span>{customer.phone_no}</span>
                      </p>
                      <p>
                        No 167, 2nd floor, 3rd cross RK garden behind gowri
                        appatment mathikere bengaluru, Mathikere, Bengaluru -
                        560054
                      </p>
                      <p>
                        <span>Order ID</span>
                        <span>{order_number}</span>
                      </p>
                    </div>
                    <CustomDivider />
                  </div>
                ))}
              </div>
            )}

            {deliverdOrders.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 0",
                  }}
                >
                  <img src={PackageIcon} alt="orders" />
                  {"Past Orders"}
                </div>
                <CustomDivider />
                {deliverdOrders.map(({ id, customer, items, order_number }) => (
                  <div className={styles.ordersCardDiv}>
                    {items.map((item) => (
                      <PastOrdersCard item={item} key={item.id} orderId={id} />
                    ))}

                    <div className={styles.deliveryAddress}>
                      <span>Delivery Address</span>
                      <p>
                        <span>{customer.name}</span>
                        <span>{customer.phone_no}</span>
                      </p>
                      <p>
                        No 167, 2nd floor, 3rd cross RK garden behind gowri
                        appatment mathikere bengaluru, Mathikere, Bengaluru -
                        560054
                      </p>
                      <p>
                        <span>Order ID</span>
                        <span>{order_number}</span>
                      </p>
                    </div>
                    <CustomDivider />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </Container>
  );
}
