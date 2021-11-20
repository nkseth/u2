import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.scss';
import { Button, Tooltip, withStyles } from '@material-ui/core';
import { CheckOutProcess } from '../../MyBag';
import AddIcon from '@material-ui/icons/Add';

import RemoveIcon from '@material-ui/icons/Remove';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { style } from '@mui/system';

const CartItem = ({
  item,
  setClick,
  click,
  move_to_wishlist,
  substract_quantity,
  toggleRemoveModal,
  add_quantity,
  index,
  remove_item,
}) => {
  const HtmlTooltipButton = withStyles(theme => ({
    tooltip: {
      // placement: "right-start",
      backgroundColor: '#857250',
      color: 'white',
      width: 150,
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      height: 50,
      fontSize: theme.typography.pxToRem(10),
      border: 'none',
    },
  }))(Tooltip);
  return (
    <>
      <div className={styles.mainContainer}>
        <Link to={`/product-description/${item.product.slug}`}>
          <img
            src={item.feature_image}
            alt='product'
            className={styles.image}
          />
        </Link>
        <div style={{ width: '100%' }}>
          <div className={styles.product_detail}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h5
                  className={styles.proName}
                  style={{ marginBottom: '0.5rem' }}
                >
                  {item.title}
                </h5>
                <p className={styles.proCat}>{item.fabric}</p>
                
              </div>
              <div style={{display: 'flex'}}>
              <div >Color:</div>
              <div className={styles.colori} style={{backgroundColor:item?.color_code,marginLeft:'5px'}}></div>
             
              </div>
              {
                item.type==="readymade"?
              <div style={{display: 'flex'}}>
              <div >Size:</div>
              <div  style={{backgroundColor:'#6a5b40',marginLeft:'5px',display:"flex",width:'20px',height:'20px',
            alignItems: 'center',justifyContent: 'center',color:'white'
            }}>{item.size}</div>
              
              </div>:null
              }
              <div>
                {item.type === 'readymade' ? (
                  item.readymade_offer_price > 0 ? (
                    <div className={styles.priceDetails}>
                      <h3 className={styles.actualPrice}>
                        {item.currency_symbol}
                        {item.readymade_offer_price}
                      </h3>
                      <p className={styles.discountDetails}>
                        <span className={styles.discountPrice}>
                          {item.currency_symbol}
                          <strike>{item.readymade_price}</strike>
                        </span>
                        <span className={styles.discountPercentage}>
                          {item.readymade_discount.toFixed(0)}% OFF
                        </span>
                      </p>
                    </div>
                  ) : (
                    <h3 className={styles.actualPrice}>
                      {item.currency_symbol}
                      {item.readymade_price}
                    </h3>
                  )
                ) : item.custom_offer_price > 0 ? (
                  <>
                    <h3 className={styles.actualPrice}>
                      {item.currency_symbol}
                      {item.custom_offer_price}
                    </h3>
                    <p className={styles.discountDetails}>
                      <span className={styles.discountPrice}>
                        {item.currency_symbol}
                        <strike>{item.custom_price}</strike>
                      </span>
                      <span className={styles.discountPercentage}>
                        {item.custom_discount.toFixed(0)}% off
                      </span>
                    </p>
                  </>
                ) : (
                  <h3 className={styles.actualPrice}>
                    {item.currency_symbol}
                    {item.custom_price}
                  </h3>
                )}
              </div>
            </div>

            <div className={styles.productTypeNQuantity}>
              <div className={styles.productType}>
                <h4>Product Type</h4>
                <p>{item.type}</p>
              </div>
              <div className={styles.productQuantity}>
                <p>Quantity</p>
                <div className={styles.productQuantityBtn}>
                  <Button
                    className={styles.addBtn}
                    onClick={() => substract_quantity(item, index)}
                  >
                    <RemoveIcon style={{ width: '15px' }} />
                  </Button>
                  <div className={styles.quantity}>
                    {item.quantity > 9 ? item.quantity : `0${item.quantity}`}
                  </div>
                  <Button
                    className={styles.removeBtn}
                    onClick={() => add_quantity(item, index)}
                  >
                    <AddIcon style={{ width: '15px' }} />
                  </Button>
                </div>
              
              </div>
              
            </div>
            <div className={styles.wishlistNRemove}>
              <HtmlTooltipButton
                open={item.id == click ? true : false}
                onOpen={() => setClick(true)}
                onClose={() => setClick(false)}
                disableFocusListener
                disableHoverListener
                className={styles.ProductSelectorHelpBtn}
                style={{ color: '#6a5b40' }}
                title={
                  <>
                    <h3
                      style={{
                        padding: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                      }}
                    >
                      <FavoriteIcon /> Added To wishlist
                    </h3>
                  </>
                }
                placement={'top'}
                arrow
              >
                <Button
                  onClick={() => {
                    move_to_wishlist(item);
                    setClick(item.id);
                  }}
                  className={styles.MoveToWishListBtn}
                >
                  Move to Wishlist
                </Button>
              </HtmlTooltipButton>
              <div>
                <Button
                  onClick={() => remove_item(item)}
                  onClick={e => toggleRemoveModal(item, e)}
                  className={styles.RemoveBTN}
                >
                  Remove item
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {item.type === 'customise' ? (
        <div>
          <CheckOutProcess />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartItem;
