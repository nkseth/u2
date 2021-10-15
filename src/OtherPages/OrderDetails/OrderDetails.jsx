import React from 'react';
import { useParams } from 'react-router';
import OrdersCard from '../../Pages/All-Orders/Components/Order-Card/card';
import CustomDivider from '../../utils/Custom Divider/divider';
import Truck from './images/truck.svg';
import Pending from './images/pending.svg';
import Delivered from './images/delivered.svg';
import style from './OrderDetails.module.scss';

const OrderDetails = props => {
  const status = 'delivered';
  const { orderid } = useParams();

  const item = {
    brand: null,
    category_id: 0,
    condition: 'New',
    condition_note: null,
    currency: 'INR',
    currency_symbol: '₹',
    custom_price: 0,
    description:
      '<ul class="a-unordered-list a-vertical a-spacing-mini" amazon="" ember",="" arial,="" sans-serif;"="" style="margin-right: 0px; margin-bottom: 0px; margin-left: 18px; color: rgb(15, 17, 17); padding: 0px;"><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Care Instructions: Machine Wash</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Fit Type: slim fit</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">100% premium Cotton, pre washed for an extremely soft finish and rich look</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Stylish full sleeve checkered casual shirt</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Modern slim fit ( we have updated our size chart, please refer the size chart for new measurements before ordering)</span></li><li style="list-style: disc; overflow-wrap: break-word; margin: 0px;"><span class="a-list-item" style="overflow-wrap: break-word; display: block;">Best for casual &amp; smart casual wear</span></li></ul>',
    feature_image:
      'https://dhaatri.info/storage/images/61434a7369ee5.jpg?p=null',
    free_shipping: null,
    id: 130,
    key_features: false,
    mesaurment: null,
    min_order_quantity: 1,
    price: 0,
    product: {
      id: 73,
      slug: 'stripped-white-shirt-666',
      mpn: '777',
      brand: 'Trend 5',
      image:
        'https://dhaatri.info/storage/images/OfNfwuuKoxZV9UWYH4iQgjFGhzfcSzEdtyvn72Mi.jpg?p=small',
      description: `<p><span style="color: rgb(40, 44, 63); font-famil…model (height 5'8") is wearing a size S</li></ul>`,
    },
    quantity: 1,
    readymade_price: 900,
    shipping_address: null,
    shipping_weight: null,
    sku: '1890',
    slug: 'stripped-white-shirt-666',
    stock_quantity: 73,
    stuff_pick: null,
    title: 'Stripped White Shirt',
    total: 900,
    type: null,
    unit_price: 900,
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.deliveryTime}  ${
          status === 'on going'
            ? style.onGoing
            : status === 'pending'
            ? style.pending
            : style.delivered
        } `}
      >
        {status === 'on going' ? (
          <img src={Truck} alt='' />
        ) : status === 'pending' ? (
          <img src={Pending} alt='' />
        ) : (
          <img src={Delivered} alt='' />
        )}
        <p>Arriving on 16 Jan 2021</p>
      </div>
      <div className={style.orderCard}>
        <OrdersCard item={item} orderId={orderid} detail />
      </div>
      <div className={style.measurement}>
        <h5>Your measurement details</h5>
        <p>Mallikarjun</p>
      </div>
      <div className={style.deliveryAddress}>
        <h5>Delivery Address</h5>
        <p>
          Mallikarrjun <span> 6363048850</span>
        </p>
        <h6>
          No 167, 2nd floor, 3rd cross RK garden behind gowri appatment
          mathikere bengaluru, Mathikere, Bengaluru - 560054
        </h6>
        <p className={style.orderId}>
          Order ID
          <span> # 1160972 05791041240101</span>
        </p>
      </div>
      <div className={style.paymentDetails}>
        <div className={style.priceDetails}>
          <div>
            <h5>Total order price</h5>
            <p>You saved ₹400.00 on this order</p>
          </div>
          <div>
            <h1>$999.00</h1>
          </div>
        </div>
        <CustomDivider />
        <div className={style.paid}>
          <h5>Paid by UPI</h5>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
