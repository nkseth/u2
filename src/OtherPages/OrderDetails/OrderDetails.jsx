import React, { useEffect } from "react";
import { useParams } from "react-router";
import OrdersCard from "../../Pages/All-Orders/Components/Order-Card/card";
import CustomDivider from "../../utils/Custom Divider/divider";
import Truck from "./images/truck.svg";
import Pending from "./images/pending.svg";
import Delivered from "./images/delivered.svg";
import style from "./OrderDetails.module.scss";
import { getOrderDetail } from "../../Redux/actions/order";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "../../utils/Loader/Loader";
import PastOrdersCard from "../../Pages/All-Orders/Components/Past-orders/card";

const OrderDetails = (props) => {
  const dispatch = useDispatch();
  const { orderid } = useParams();
  const { order, loading, error } = useSelector(
    (state) => state.root.orderDetail
  );
  console.log(order);
  useEffect(() => {
    dispatch(getOrderDetail(orderid));
  }, [dispatch, orderid]);

  const status = order?.order_status.toLowerCase();
  return loading ? (
    <Loader />
  ) : (
    order && (
      <div className={style.container}>
        {order.order_status.toLowerCase() === "confirmed" ? (
          <>
            <div className={`${style.deliveryTime}  ${style.onGoing} `}>
              <img src={Truck} alt="" />
              <p>Arriving on 16 Jan 2021</p>
            </div>
            <div className={style.orderCard}>
              <OrdersCard item={order.items[0]} orderId={orderid} detail />
            </div>
          </>
        ) : order.order_status.toLowerCase() === "pending" ? (
          <>
            <div className={`${style.deliveryTime}  ${style.pending} `}>
              <img src={Pending} alt="" />
              <p>Pending Order</p>
            </div>
            <div className={style.orderCard}>
              <OrdersCard
                pending
                item={order.items[0]}
                orderId={orderid}
                detail
              />
            </div>
          </>
        ) : (
          <>
            <div className={`${style.deliveryTime}  ${style.delivered} `}>
              <img src={Delivered} alt="" />
              <p>Delivered on {order.delivery_date}</p>
            </div>
            <div className={style.orderCard}>
              <PastOrdersCard item={order.items[0]} orderId={orderid} detail />
            </div>
          </>
        )}
        <div className={style.measurement}>
          <h5>Your measurement details</h5>
          <p>{order.customer.name}</p>
        </div>
        <div className={style.deliveryAddress}>
          <h5>Delivery Address</h5>
          <p>
            {order.customer.name} <span> {order.customer.phone_no}</span>
          </p>
          <h6>{order.address}</h6>
          <p className={style.orderId}>
            Order ID <span>{order.order_number}</span>
          </p>
        </div>
        <div className={style.paymentDetails}>
          <div className={style.priceDetails}>
            <div>
              <h5>Total order price</h5>
              {/* <p>You saved ₹400.00 on this order</p> */}
            </div>
            <div>
              <h1>₹{order.grand_total}</h1>
            </div>
          </div>
          <CustomDivider />
          <div className={style.paid}>
            <h5>Paid by UPI</h5>
          </div>
        </div>
        {order.items.length > 1 && (
          <div>
            <span style={{ fontWeight: "bold" }}>
              Other items in this order
            </span>
            {order.items.map((item, i) =>
              i > 0 ? (
                status === "confirmed" ? (
                  <OrdersCard item={item} orderId={orderid} detail />
                ) : status === "pending" ? (
                  <OrdersCard pending item={item} orderId={orderid} detail />
                ) : (
                  <PastOrdersCard item={item} orderId={orderid} detail />
                )
              ) : null
            )}
          </div>
        )}
      </div>
    )
  );
};

export default OrderDetails;
