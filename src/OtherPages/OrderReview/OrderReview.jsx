import React from 'react';
import { useParams } from 'react-router';
import OrdersCard from '../../Pages/All-Orders/Components/Order-Card/card';
import styles from './OrderReview.module.scss';
import ReactStars from 'react-rating-stars-component';
// import gallery from '../../Images/image/gallery.png';
// import camera from '../../Images/image/camera.png';
import post from '../../Images/image/post.png';
import { TextField, useMediaQuery } from '@material-ui/core';
const OrderReview = () => {
  const mobileView = useMediaQuery('(max-width:550px)');

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
  const firstExample = {
    size: 40,
    value: 2.5,

    onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  const { orderid } = useParams();
  return (
    <>
      <div>
        {mobileView ? (
          <div>
            <div className={styles.review}>
              <div></div>
              <h3>Your Name</h3>
            </div>
            <ReactStars classNames={styles.stars} {...firstExample} />
            <div style={{ marginTop: '30px' }}>
              <label>Add your reviews</label>
              <TextField
                multiline
                rows={4}
                placeholder='placeholder'
                variant='outlined'
                style={{
                  width: '100%',
                  marginTop: '15px',
                }}
              />
            </div>

            <div
              style={{
                display: 'inline-flex',
                marginTop: '28px',
                marginBottom: '37px',
              }}
            >
              <img src={post} alt='post' />
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  marginLeft: '8px',
                  fontSize: '14px',
                }}
              >
                Add image
              </button>
            </div>

            <div className={styles.add_image}>
              <h3>Choose image</h3>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'grid' }}>
                  {/* <img src={gallery} alt='gallery' /> */}
                  <span>Gallery</span>
                </div>
                <div style={{ display: 'grid', marginLeft: '35px' }}>
                  {/* <img src={camera} alt='camera' /> */}
                  <span>Camera</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <OrdersCard item={item} orderId={orderid} />
            <div>
              {/* <h1>Review this product</h1> */}
              <ReactStars {...firstExample} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderReview;
