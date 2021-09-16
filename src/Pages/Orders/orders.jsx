import React, { useEffect, useState } from "react";
import { Grid, Button, IconButton, useMediaQuery } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import Container from "../../utils/Container/container";
import SideNavbar from "../../utils/Side-Navbar/sideNavbar";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./orders.module.scss";
import { ReactComponent as CameraIcon } from "../../Images/icons/camera.svg";
import common_axios from "../../utils/axios.config";
import Rating from "./components/rating";

export default function Orders() {

  const [orders, setOrders] = useState({})

  useEffect(() => {
    fetch_orders()
  }, [])

  const fetch_orders = async () => {
    const { data } = await common_axios.get('/orders')
    setOrders(data)
    console.log(data)
  }

  const set_is_reviewed = (id) => {
    fetch_orders()
  }

  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const productImg =
    "https://images.pexels.com/photos/2882694/pexels-photo-2882694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
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
          {tabView && <Breadcrumb path='Home /' activePath='Profile' />}
          {orders.data?.map((item) => {
            return (
              <><div className={styles.productDiv}>
                <img src={productImg} alt='product' />
                <div>
                  <span className={styles.productHeader}>
                    {item.inventories.length > 0 ? item.inventories[0].title : null}
                  </span>
                  <span className={styles.productDescription}>
                    {item.inventories.length > 0 ? item.inventories[0].pivot?.item_description : null}
                  </span>
                  <div className={styles.productQuantity}>
                    <span>Quantity:</span>
                    <span>{item.quantity}</span>
                  </div>
                  <span className={styles.price}>₹{Math.round(parseFloat(item.grand_total)).toFixed(2)}</span>
                </div>
              </div>
              {!item.feedback_id ?  <Rating item={item} set_is_reviewed={set_is_reviewed} id={item.inventories.length > 0 ? item.inventories[0].product_id : null}/> : null}
               </>
            )
          })}
        </div>
      </div>
    </Container>
  );
}
