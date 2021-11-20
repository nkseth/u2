import styles from './OrderDetailsMobile.module.scss';
import Truck from './images/truck.svg';
import Pending from './images/pending.svg';
import onGoing from './images/onGoing.svg';
import Delivered from './images/delivered.svg';
import CustomDivider from '../../utils/Custom Divider/divider';
import { Button, IconButton, useMediaQuery } from '@material-ui/core';
import OrdersCard from '../../Pages/All-Orders/Components/Order-Card/card';
import { useParams } from 'react-router';
import { useEffect } from 'react';
const OrderDetailsMobile = ({ order, status, orderDetails }) => {
  const { orderid } = useParams();

  return (
    <div className={styles.MobileConatiner}>
      <img src={order?.cover_image} alt='' />
      <div className={styles.OrderDetails}>
        <div className={styles.nameNSize}>
          <div className={styles.name}>
            <h1>{order.title}</h1>
          </div>
          <div className={styles.size}>
            <h5>
              size : <span>{order.size || 'L'}</span>
            </h5>
          </div>
        </div>
        <div className={styles.fabricNQuantity}>
          <div className={styles.fabric}>
            <h4>{order.fabric}</h4>
          </div>
          <div className={styles.quantity}>
            <h3>
              Quantity: :
              <span>
                {order.quantity < 9 ? `0${order.quantity}` : order.quantity}
              </span>
            </h3>
          </div>
        </div>
        <div className={styles.productType}>
          <h5>Product Type</h5>
          <h4>{order.type}</h4>
        </div>
        <div className={styles.deliveryDetails}>
          {status.toLowerCase() === 'confirmed' ? (
            <div className={`${styles.deliveryTime}  ${styles.onGoing} `}>
              <img src={onGoing} alt='' />
              <p>Arriving on 16 Jan 2021</p>
            </div>
          ) : status.toLowerCase() === 'pending' ? (
            <div className={`${styles.deliveryTime}  ${styles.pending} `}>
              <img src={Pending} alt='' />
              <p>Pending Order</p>
            </div>
          ) : (
            <div className={`${styles.deliveryTime}  ${styles.delivered} `}>
              <img src={Delivered} alt='' />
              <p>Delivered on {order.delivery_date}</p>
            </div>
          )}
        </div>
        <div className={styles.deliveryAddress}>
          <h5>Delivery Address</h5>
          <p>
            {orderDetails.customer.name} &nbsp;{' '}
            <span> {orderDetails.customer.phone_no}</span>
          </p>
          <h6>
            {orderDetails.address ||
              'No 167, 2nd floor, 3rd cross RK garden behind gowri appatment mathikere bengaluru, Mathikere, Bengaluru - 560054'}
          </h6>
          <p className={styles.orderId}>
            Order ID &nbsp; <span>{orderDetails.order_number}</span>
          </p>
        </div>
        <div className={styles.trackNCancel}>
          <Button className={styles.trackBtn}>Track Order</Button>
          <Button className={styles.cancelBtn}>Cancel Order</Button>
        </div>
        <div className={styles.paymentDetails}>
          <div className={styles.priceDetails}>
            <div>
              <h5>Total order price</h5>
              <p>You saved ₹400.00 on this order</p>
            </div>
            <div>
              <h1 className={styles.totalAmt}>₹{orderDetails.grand_total}</h1>
            </div>
          </div>
          <CustomDivider />
          <div className={styles.paid}>
            <h5>Paid by UPI</h5>
          </div>
        </div>
      </div>
      {orderDetails?.items &&
        orderDetails?.items.slice(1, 3).map(item => {
          console.log(
            '🚀 ~ file: OrderDetailsMobile.jsx ~ line 112 ~ orderDetails?.items.slice ~ item',
            item
          );
          return (
            <div style={{ margin: '1rem 0' }}>
              <span style={{ fontWeight: 'bold' }}>
                Other items in this order
              </span>
              {status === 'confirmed' ? (
                <OrdersCard item={item} orderId={orderid} detailsPage />
              ) : status === 'pending' ? (
                <OrdersCard pending item={item} orderId={orderid} detailsPage />
              ) : (
                <OrdersCard item={item} orderId={orderid} detailsPage />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default OrderDetailsMobile;
