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

export default function AllOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.root.profile);
  console.log(orders);
  useEffect(() => {
    dispatch(get_orders());
  }, [dispatch]);
  const tabView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <Container bottomDivider pBottom="0" footerOnTabMob>
      <section className={styles.section}>
        {!tabView && <SideNavbar />}
        <div className={styles.cardsDivOuterContainer}>
          {tabView && <Breadcrumb path="Home /" activePath="Profile" />}
          <div className={styles.headerDiv}>
            <span className={styles.header}>Orders</span>
            <CustomDivider />
          </div>
          <div className={styles.ordersCardDiv}>
            <div>
              <img src={DeliveryVanIcon} alt="Delivery Van" />
              On the way
            </div>
            {orders.map((order) => (
              <OrdersCard order={order} />
            ))}

            <div className={styles.deliveryAddress}>
              <span>Delivery Address</span>
              <p>
                <span>Mallikarrjun</span>
                <span>6363048850</span>
              </p>
              <p>
                No 167, 2nd floor, 3rd cross RK garden behind gowri appatment
                mathikere bengaluru, Mathikere, Bengaluru - 560054
              </p>
              <p>
                <span>Order ID</span>
                <span># 1160972 05791041240101</span>
              </p>
            </div>
            <CustomDivider />
            <div className={styles.pastOrdersDiv}>
              <div>
                <img src={PackageIcon} alt="orders" />
                Past Orders
              </div>
              <PastOrdersCard />
              <CustomDivider />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
