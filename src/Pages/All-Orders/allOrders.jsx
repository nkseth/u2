import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, useMediaQuery } from '@material-ui/core';
import Container from '../../utils/Container/container';
import CustomDivider from '../../utils/Custom Divider/divider';
import SideNavbar from '../../utils/Side-Navbar/sideNavbar';
import Breadcrumb from '../../utils/Breadcrumb/breadcrumb';
import OrdersCard from './Components/Order-Card/card';
import styles from './allOrders.module.scss';
//icons
import DeliveryVanIcon from '../../Images/icons/devliveryVan.svg';
import Pending from './images/pending.svg';
import PackageIcon from '../../Images/icons/package.svg';
import PastOrdersCard from './Components/Past-orders/card';
import { useDispatch, useSelector } from 'react-redux';
import { get_orders } from '../../Redux/actions/profile';
import Loader from '../../utils/Loader/Loader';

export default function AllOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.root.profile);
  console.log(orders);
  useEffect(() => {
    dispatch(get_orders());
  }, [dispatch]);
  const tabView = useMediaQuery('(max-width:768px)');
  const mobileView = useMediaQuery('(max-width:500px)');
  let pendingOrders = [],
    confirmedOrders = [],
    deliverdOrders = [];

  if (orders) {
    orders.forEach(order => {
      if (
        order.order_status.toLowerCase() === 'pending' ||
        order.order_status.toLowerCase() === 'pending'
      )
        pendingOrders.push(order);
      if (order.order_status.toLowerCase() === 'confirmed')
        confirmedOrders.push(order);
      if (order.order_status.toLowerCase() === 'delivered')
        deliverdOrders.push(order);
    });
  }
  return (
    <Container bottomDivider pBottom='0' footerOnTabMob>
      {!orders ? (
        <Loader />
      ) : (
        <section className={styles.section}>
          {!tabView && <SideNavbar />}
          <div className={styles.cardsDivOuterContainer}>
            {tabView && (
              <Breadcrumb path='Home /' activePath='Profile / Orders' />
            )}
            <div className={styles.headerDiv}>
              <span className={styles.header}>Orders</span>
              <CustomDivider customBg='#CECECE' />
            </div>
            {confirmedOrders.length > 0 && (
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 0',
                  }}
                >
                  <img src={DeliveryVanIcon} alt='Delivery Van' />
                  {'On the way'}
                </div>
                <div
                  style={{
                    height: '1px',
                    background: '#CECECE',
                    width: '65%',
                  }}
                ></div>
                {confirmedOrders.map(
                  ({ id, customer, items, order_number }, idx) => {
                    return (
                      <div className={styles.ordersCardDiv}>
                        {/* {console.log(order)} */}
                        {items.map(item => (
                          <OrdersCard
                            status='current'
                            item={item}
                            key={item.id}
                            orderId={id}
                            mobile={mobileView}
                            index={idx}
                          />
                        ))}

                        <CustomDivider customBg='#CECECE' />
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
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 0',
                    color: '#FF543E',
                  }}
                  className={styles.pendingHeading}
                >
                  <img src={Pending} alt='Delivery Van' />
                  Pending orders
                </div>
                <CustomDivider customBg='#CECECE' />
                {pendingOrders.map(
                  (
                    { id, customer, items, order_number, delivery_address },
                    idx
                  ) => (
                    <div className={styles.ordersCardDiv}>
                      {/* {console.log(order)} */}

                      {items.map(item => (
                        <OrdersCard
                          status='pending'
                          item={item}
                          key={item.id}
                          orderId={id}
                          index={idx}
                        />
                      ))}

                      {/* <div className={styles.deliveryAddress}>
                        <span>Delivery Address</span>
                        <p>
                          <span>{customer.name}</span>
                          <span>{customer.phone_no}</span>
                        </p>
                        <p>{delivery_address}</p>
                        <p>
                          <span>Order ID</span>
                          <span>{order_number}</span>
                        </p>
                      </div> */}
                      <CustomDivider customBg='#CECECE' />
                    </div>
                  )
                )}
              </div>
            )}

            {deliverdOrders.length > 0 && (
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 0',
                  }}
                >
                  <img src={PackageIcon} alt='orders' />
                  {'Past Orders'}
                </div>
                <CustomDivider />
                {deliverdOrders.map(
                  ({
                    id,
                    customer,
                    items,
                    order_number,
                    delivery_date,
                    delivery_address,
                  }) => (
                    <div className={styles.ordersCardDiv}>
                      {items.map(item => (
                        <OrdersCard
                          status='deliverd'
                          deliveryDate={delivery_date}
                          item={item}
                          key={item.id}
                          orderId={id}
                        />
                      ))}

                      {/* <div className={styles.deliveryAddress}>
                        <span>Delivery Address</span>
                        <p>
                          <span>{customer.name}</span>
                          <span>{customer.phone_no}</span>
                        </p>
                        <p>{delivery_address}</p>
                        <p>
                          <span>Order ID</span>
                          <span>{order_number}</span>
                        </p>
                      </div> */}
                      <CustomDivider />
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </Container>
  );
}
