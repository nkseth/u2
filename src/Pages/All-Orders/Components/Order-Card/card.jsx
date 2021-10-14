import React from 'react';
import { Button, useMediaQuery } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CustomDivider from '../../../../utils/Custom Divider/divider';
import styles from './card.module.scss';

export default function OrdersCard({ item, orderId, detail }) {
  console.log('🚀 ~ file: card.jsx ~ line 8 ~ OrdersCard ~ item', item);

  const history = useHistory();
  const mobileView = useMediaQuery('(max-width:550px)');
  return (
    <div className={styles.mainContainer}>
      {!detail && <CustomDivider />}
      <div className={styles.cardContainer}>
        <img
          src={item.product.image}
          alt={item.title}
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(`/product-description/${item.slug}`)}
        />
        <div className={styles.detailsDiv}>
          <div className={styles.detailOne}>
            <div>
              <h1
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  history.push(`/product-description/${item.slug}`)
                }
              >
                {item.title}
              </h1>
              <span>Solid Straight Kurta</span>
            </div>

            <div>
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
                fontFamily: 'DM Serif Display',
                fontSize: '28px',
                fontWeight: 400,
                lineHeight: '36px',
              }}
            >
              {item.currency_symbol}
              {item.total}
            </div>
          )}

          <Button
            onClick={() => history.push(`/trackorder/${orderId}`)}
            className={styles.trackBtn}
            variant='contained'
          >
            Track Order
          </Button>
          <div className={styles.detailThree}>
            <Link
              to={`/order-details/${orderId}`}
              style={{ cursor: 'pointer' }}
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
