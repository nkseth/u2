// import React from 'react';
// import { Button, useMediaQuery } from '@material-ui/core';
// import { Link, useHistory } from 'react-router-dom';
// import CustomDivider from '../../../../utils/Custom Divider/divider';
// import styles from './card.module.scss';

// export default function OrdersCard({ pending, item, orderId, detail }) {
//   console.log('🚀 ~ file: card.jsx ~ line 8 ~ OrdersCard ~ item', item);
//   const history = useHistory();
//   const mobileView = useMediaQuery('(max-width:550px)');
//   return (
//     <div className={styles.mainContainer}>
//       {!item && <CustomDivider />}
//       <div className={styles.cardContainer}>
//         <img
//           src={item.product.image}
//           alt={item.title}
//           style={{ cursor: 'pointer' }}
//           onClick={() => history.push(`/product-description/${item.slug}`)}
//         />
//         <div className={styles.detailsDiv}>
//           <div className={styles.detailOne}>
//             <div>
//               <h1
//                 style={{ cursor: 'pointer' }}
//                 onClick={() =>
//                   history.push(`/product-description/${item.slug}`)
//                 }
//               >
//                 {item.title}
//               </h1>
//               <span>{item.fabric}</span>
//             </div>
//             <div>
//               <div
//                 className={styles.priceDetails}
//                 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
//               >
//                 <h3>
//                   {item.currency_symbol}
//                   {item.total}
//                 </h3>
//               </div>
//               <div className={styles.detailTwo}>
//                 <h5>
//                   Quantity:
//                   <span>
//                     {item.quantity < 9 ? `0${item.quantity}` : item.quantity}
//                   </span>
//                 </h5>
//               </div>
//             </div>
//           </div>

//           <div className={styles.sizeDetails}>
//             <h5>
//               Size:
//               <span>{item.size}</span>
//             </h5>
//           </div>

//           {mobileView && (
//             <div
//               style={{
//                 fontFamily: 'DM Serif Display',
//                 fontSize: '28px',
//                 fontWeight: 400,
//                 lineHeight: '36px',
//               }}
//             >
//               {item.currency_symbol}
//               {item.total}
//             </div>
//           )}

//           {pending ? (
//             item.type === 'readymade' ? (
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <Button
//                   // onClick={() =>
//                   //   history.push(
//                   //     `/add-measurement-choose-standard-size/${orderId}`
//                   //   )
//                   // }
//                   className={styles.trackBtn}
//                   variant='contained'
//                   style={{ whiteSpace: 'nowrap' }}
//                 >
//                   Confirm Payment
//                 </Button>
//                 <div>
//                   <h3>Product Type</h3>
//                   <span>{item.type.toUpperCase()}</span>
//                 </div>
//               </div>
//             ) : (
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <Button
//                   onClick={() =>
//                     history.push(
//                       `/add-measurement-choose-standard-size/${orderId}/${item.id}`
//                     )
//                   }
//                   className={styles.trackBtn}
//                   variant='contained'
//                   style={{ whiteSpace: 'nowrap' }}
//                 >
//                   Add Measurement
//                 </Button>
//                 <div>
//                   <h3>Product Type</h3>
//                   {/* <span>{item.type.toUpperCase()}</span> */}
//                 </div>
//               </div>
//             )
//           ) : (
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <Button
//                 onClick={() =>
//                   history.push(`/trackorder/${orderId}/${item.id}`)
//                 }
//                 className={styles.trackBtn}
//                 variant='contained'
//                 style={{ whiteSpace: 'nowrap' }}
//               >
//                 Track Order
//               </Button>
//               <div>
//                 <h3>Product Type</h3>
//                 {/* <span>{item.type.toUpperCase()}</span> */}
//               </div>
//             </div>
//           )}

//           {!detail && (
//             <div className={styles.detailThree}>
//               <Link
//                 to={`/order-details/${orderId}`}
//                 style={{ cursor: 'pointer' }}
//               >
//                 Order Detail
//               </Link>
//               <span></span>
//               {/* <Link>Cancel Order</Link> */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Button, IconButton, useMediaQuery } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import CustomDivider from '../../../../utils/Custom Divider/divider';
import styles from './card.module.scss';
import Star from './image/star.svg';

export default function OrdersCard({
  item,
  orderId,
  detailsPage,
  status,
  mobile,
  delivery_date,
}) {
  console.log('🚀 ~ file: card.jsx ~ line 161 ~ OrdersCard ~ status', status);

  const cancelOrder = () => {

    const two_hour = 2 * 60 * 60 * 1000;
    const is_expired = (new Date() - new Date(item.created_at)) > two_hour
    console.log(new Date() - new Date(item.created_at), two_hour)
    if(is_expired && status == 'current'){
      alert("Order can't be cancelled after 2 hours.");
      return
    }

    history.push(`/orders/cancel-order/${item.id}/${orderId}`)
  }

  const history = useHistory();
  const mobileView = useMediaQuery('(max-width:479px)');
  return (
    <div className={styles.mainContainer}>
      {/* {!detailsPage && item.title && <CustomDivider customBg='#CECECE' />} */}
      {/* <div className={styles.delivered_date}>
        <h5>Delivered on Jan 13</h5>
      </div> */}
      {mobileView ? (
        <OrdersCardMobile
          item={item}
          orderId={orderId}
          detailsPage={detailsPage}
          status={status}
          onCancel={cancelOrder}
        />
      ) : (
        <>
          <div className={styles.cardContainer}>
            <img
              src={item.product.image}
              alt={item.title}
              style={{ cursor: 'pointer' }}
              onClick={() => history.push(`/product-description/${item.slug}`)}
            />
            <div className={styles.detailsDiv}>
              <div className={styles.detailOne}>
                <div className={styles.nameNCat}>
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
                  <div className={styles.priceDetails}>
                    <h1>
                      {item.currency_symbol}
                      {item.total}
                    </h1>
                    <div className={styles.quantity}>
                      <h5>
                        Quantity:&nbsp;
                        <span>
                          {item.quantity < 9
                            ? `0${item.quantity}`
                            : `${item.quantity}`}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.detailTwo}>
                <div>
                  {status !== 'pending' && (
                    <h2 style={{ marginBottom: '12px' }}>
                      Size: {item.size || 'L'}
                    </h2>
                  )}
                  {status === 'deliverd' ? (
                    <Button
                      onClick={() => history.push(`/order-review/${orderId}`)}
                      className={styles.rating}
                    >
                      <img src={Star} alt='' /> Rate & Review Product
                    </Button>
                  ) : status === 'pending' ? (
                    <Button
                      onClick={() =>
                        history.push(
                          `/add-measurement-choose-standard-size/${orderId}/${item.id}`
                        )
                      }
                      className={styles.trackBtn}
                      variant='contained'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      Add Measurement
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        history.push(`/trackorder/${orderId}/${item.id}`)
                      }
                      className={styles.trackBtn}
                      variant='contained'
                    >
                      Track Order
                    </Button>
                  )}
                </div>
                <div className={styles.productType}>
                  <h5>Product Type</h5>
                  <p style={{ textTransform: 'capitalize' }}>{item.type}</p>
                </div>
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

              {/* {status === 'delivered' ? (
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
           )} */}
              <div className={styles.detailThree}>
                {!detailsPage && (
                  <Link
                    to={`/order-details/${orderId}`}
                    style={{ cursor: 'pointer' }}
                    className={styles.orderDetailBtn}
                    // onClick={() => history.push(`/rate_order/${orderId}`)}
                  >
                    Order Detail
                  </Link>
                )}

                <span
                  style={{ marginLeft: `${detailsPage ? 'auto' : ''}`, fontSize:14, fontWeight:'800', cursor:"pointer" }}
                  className={styles.cancelBtn}
                  onClick={() => cancelOrder()}
                >
                  Cancel Order
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const OrdersCardMobile = ({
  item,
  orderId,
  detailsPage,
  status,
  mobile,
  onCancel
}) => {
  console.log('🚀 ~ file: card.jsx ~ line 326 ~ item', item);
  const history = useHistory();
  return (
    <div className={styles.mobileContainer} style={{ position: 'relative' }}>
      <Link to={`/order-details/${orderId}`} style={{ cursor: 'pointer' }}>
        <img
          src={item.product.image}
          alt={item.title}
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(`/product-description/${item.slug}`)}
        />
      </Link>
      <div className={styles.rightContainer}>
        <div className={styles.detailsMobile}>
          <div className={styles.nameNCatMobile}>
            <h1
              style={{ cursor: 'pointer' }}
              onClick={() => history.push(`/product-description/${item.slug}`)}
            >
              {item.title}
            </h1>
            <span>Solid Straight Kurta</span>
          </div>
        </div>
        {status === 'deliverd' && (
          <div className={styles.delivery_dateMobile}>
            <h5>Arriving on 16 Jan 2021</h5>
          </div>
        )}
        <div className={styles.trackNCancelMobile}>
          {status === 'deliverd' ? (
            <div className={styles.mobileBTN}>
              <Button
                onClick={() => history.push(`/order-review/${orderId}`)}
                className={styles.ratingMobile}
              >
                <img src={Star} alt='' /> Rate & Review Product
              </Button>
            </div>
          ) : status === 'pending' ? (
            <div className={styles.mobileBTN}>
              <Button
                onClick={() =>
                  history.push(
                    `/add-measurement-choose-standard-size/${orderId}/${item.id}`
                  )
                }
                className={styles.trackBtnMobile}
                variant='contained'
                style={{ whiteSpace: 'nowrap' }}
              >
                Add Measurement
              </Button>
            </div>
          ) : (
            <div className={styles.mobileBTN}>
              <Button
                onClick={() => history.push(`/trackorder/${orderId}`)}
                className={styles.trackBtnMobile}
                variant='contained'
              >
                Track Order
              </Button>
            </div>
          )}
          {status !== 'deliverd' && (
            <div className={styles.cancelBtnContainer}>
              <span 
                onClick={onCancel}
                style={{ marginLeft: `${detailsPage ? 'auto' : ''}`, fontSize:12, cursor:'pointer' }}
                className={styles.cancelBtnMobile}
              >
                Cancel Order
              </span>
            </div>
          )}
        </div>

        <div className={styles.delivery_dateMobile}>
          <h5>Arriving on 16 Jan 2021</h5>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '-15px',
          top: '20%',
        }}
      >
        <Link to={`/order-details/${orderId}`} style={{ cursor: 'pointer' }}>
          <IconButton
            onClick={() => history.push(`/product-description/${item.slug}`)}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 12L10 8L6 4'
                stroke='#9D9D9D'
                stroke-width='1.33333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
