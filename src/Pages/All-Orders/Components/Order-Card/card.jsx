import React from 'react';
import { Button, useMediaQuery } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CustomDivider from '../../../../utils/Custom Divider/divider';
import styles from './card.module.scss';
import Star from './image/star.svg';

export default function OrdersCard({ item, orderId, detailsPage, status }) {
  console.log('🚀 ~ file: card.jsx ~ line 8 ~ OrdersCard ~ item', item);


  const history = useHistory();
  const mobileView = useMediaQuery("(max-width:550px)");
  return (
    <div className={styles.mainContainer}>
      {!detailsPage && <CustomDivider />}

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

            <div className={styles.priceDetails}>
              <h1>
                {item.currency_symbol}
                {item.total}
              </h1>
            </div>
          </div>
          <div className={styles.detailTwo}>
            <div>
              <h2>Size: L</h2>
              <h5>
                Quantity:
                <span>
                  {' '}
                  {item.quantity < 9 ? `0${item.quantity}` : `${item.quantity}`}
                </span>
              </h5>
            </div>
            <div className={styles.productType}>
              <h5>Product Type</h5>
              <p>Customised</p>
            </div>
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

          {status === 'delivered' ? (
            <Button
              onClick={() => history.push(`/order-review/${orderId}`)}
              className={styles.rating}
            >
              <img src={Star} alt='' /> Rate & Review Product
            </Button>
          ) : (
            <Button
              onClick={() => history.push(`/trackorder/${orderId}`)}
              className={styles.trackBtn}
              variant='contained'
            >
              Track Order
            </Button>
          )}
          <div className={styles.detailThree}>
            {!detailsPage && (
              <Link
                to={`/order-details/${orderId}`}
                style={{ cursor: 'pointer' }}
                // onClick={() => history.push(`/rate_order/${orderId}`)}
              >
                Order Detail
              </Link>
            )}

            <Link
              style={{ marginLeft: `${detailsPage ? 'auto' : ''}` }}
              className={styles.cancelBtn}

            >
              Cancel Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
