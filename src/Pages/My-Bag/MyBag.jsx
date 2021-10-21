import React, { useState, useEffect } from 'react';
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  withStyles,
  Tooltip,
} from '@material-ui/core';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SelectedFabricSample from './Components/Selected-Fabric-Sample/index';
import SelectedSubscriptionPlans from './Components/Selected-Subscription-plan';
import Container from '../../utils/Container/container';
import { Link, useHistory } from 'react-router-dom';
import CustomDivider from '../../utils/Custom Divider/divider';
import CustomSection from '../../utils/Custom Section/section';
import Breadcrumb from '../../utils/Breadcrumb/breadcrumb';
import CustomStepper from '../../utils/Stepper/stepper';
import styles from './MyBag.module.scss';
//icons

import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import { ReactComponent as CouponIcon } from '../../Images/icons/coupon.svg';
import common_axios from '../../utils/axios.config';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderSumm } from '../../Redux/actions/homepage';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
// Product Type
import { addToWishlist } from '../../Redux/actions/wishlist';
import {
  getCartItems,
  getCoupons,
  removeFromBag,
  clearCartError,
} from '../../Redux/actions/myBag';
import { SuccessPopUp } from '../../utils/Popups/SuccessPopup';
import EmptyBag from './Components/Empty-Bag';

export default function MyBag() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const mobileView = useMediaQuery('(max-width:550px)');
  const [quantity, setQuantity] = useState(1);
  const { user } = useSelector(state => state.root.auth);
  const { cart } = useSelector(state => state.root.cartItems);
  const { message, loading, error } = useSelector(
    state => state.root.removeCartItem
  );
  const {
    couponList,
    loading: couponLoading,
    error: couponError,
  } = useSelector((state) => state.root.coupons);

  const [click, setClick] = useState(false);
  // const [cartMessage, setCartMessage] = useState('Added To bag');
  console.log(cart, '123456');

  // console.log(cart);

  useEffect(() => {
    if (message) {
      alert(message);
      dispatch(getCartItems());
      dispatch(clearCartError());
    }
    if (error) {
      alert(error);
      dispatch(clearCartError());
      dispatch(getCartItems());
    }
    dispatch(getCartItems());
    dispatch(getCoupons());
  }, [dispatch, message, error, history]);

  const add_quantity = async (item, index) => {
    try {
      const { data } = await common_axios.put(`/cart/${cart.id}/update`, {
        item: item.id,
        quantity: parseInt(item.quantity) + 1,
      });
      console.log(data);
      dispatch(getCartItems());
    } catch (e) {
      alert(e?.response?.data?.message);
      console.log(e?.response?.data);
    }
  };

  const substract_quantity = async (item, index) => {
    if (parseInt(item.quantity) > 1) {
      try {
        const { data } = await common_axios.put(`/cart/${cart.id}/update`, {
          item: item.id,
          quantity: parseInt(item.quantity) - 1,
        });
        console.log(data);
        dispatch(getCartItems());
      } catch (e) {
        alert(e?.response?.data?.message);
        console.log(e?.response?.data);
      }
    } else alert("Quantity can't be less than 1");
  };

  const move_to_wishlist = async (item, e) => {
    if (e) e.preventDefault();
    dispatch(addToWishlist(item.slug, user.api_token));
    remove_item(item);
  };

  const remove_item = async (item, e) => {
    if (e) e.preventDefault();
    console.log(item.id, cart.id);
    dispatch(removeFromBag(item.id, cart.id));
  };

  const on_checkout = () => {
    // dispatch(setOrderSumm(cart));
    history.push('/order-summary');
  };

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

  const [modal, setModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [removeItem, setRemoveItem] = useState();

  const toggleModal = () => setModal(modal => !modal);

  const toggleRemoveModal = item => {
    setRemoveItem(item);
    setRemoveModal(removeModal => !removeModal);
  };

  if (!cart) {
    return <EmptyBag />;
  }

  return (
    <Container bottomDivider footerOnTabMob>
      {
        <CustomSection
          style={mobileView ? { marginTop: '0' } : { marginTop: '3em' }}
        >
          <Breadcrumb path='Home' activePath='/ My Bag' />
          {cart && (
            <div className={styles.container}>
              {mobileView ? (
                <>
                  <MobileProductMyBag
                    data={cart.items}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    add_quantity={add_quantity}
                    substract_quantity={substract_quantity}
                    remove_item={remove_item}
                    move_to_wishlist={move_to_wishlist}
                  />
                </>
              ) : (
                //This component ⬆ is for mobile view dont itterate this component go inside it and ittetrate there
                <div className={styles.firstContainer}>
                  <div>My Bag</div>

                  {cart.items?.map((item, index) => {
                    return (
                      <>
                        {removeModal && (
                          <SuccessPopUp
                            toggle={toggleRemoveModal}
                            width={'500px'}
                            height={'100px'}
                          >
                            <h2 style={{ margin: '1rem 0' }}>
                              Are you sure you want to remove this Item?
                            </h2>
                            <Button
                              class={styles.removeModelButton}
                              onClick={e => {
                                remove_item(removeItem, e);
                                toggleRemoveModal();
                              }}
                            >
                              Yes
                            </Button>
                            <Button
                              class={styles.removeModelButton}
                              onClick={() => {
                                toggleRemoveModal();
                              }}
                            >
                              No
                            </Button>
                          </SuccessPopUp>
                        )}
                        <div className={styles.BorderContainer}>
                          <div className={styles.mainContainer}>
                            <Link
                            to={`/product-description/${item.product.slug}`}
                          >
                            <img
                              src={item.product?.image}
                              alt="product"
                              className={styles.image}
                            />
                          </Link>
                            <div>
                              <div style={{ alignItems: 'flex-start' }}>
                                <p className={styles.proName}>{item.title}</p>
                                <p>{item.fabric}</p>


                                <div>
                                  <h4>Product Type</h4>
                                  <p>{item.type.toUpperCase()}</p>
                                  <HtmlTooltipButton
                                    open={click}
                                    onOpen={() => setClick(true)}
                                    onClose={() => setClick(false)}
                                    disableFocusListener
                                    disableHoverListener
                                    // className={styles.ProductSelectorHelpBtn}
                                    // style={{ color: '#6a5b40', backgroundColor: 'red' }}
                                    title={
                                      <React.Fragment>
                                        <h3
                                          style={{
                                            padding: 10,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.2rem',
                                          }}
                                        >
                                          <FavoriteIcon /> Add To wishlist
                                        </h3>
                                      </React.Fragment>
                                    }
                                    placement={'top'}
                                    arrow
                                  >
                                    <Button
                                      onClick={() => {
                                        move_to_wishlist(item);
                                        setClick(click => !click);
                                      }}
                                      className={styles.MoveToWishListBtn}
                                    >
                                      Move to Wishlist
                                    </Button>
                                  </HtmlTooltipButton>
                                </div>
                              </div>


                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              {item.type === "readymade" ? (
                                item.readymade_offer_price > 0 ? (
                                  <>
                                    <p>
                                      {item.currency_symbol}
                                      {item.readymade_offer_price}
                                    </p>
                                    <p className={styles.priceSpanP}>
                                      <span className={styles.priceSpan}>
                                        {item.currency_symbol}
                                        {item.custom_price}
                                      </span>
                                      <span className={styles.priceSpan1}>
                                        {item.readymade_discount.toFixed(0)}%
                                        OFF
                                      </span>
                                    </p>
                                  </>
                                ) : (
                                  <p>
                                    {item.currency_symbol}
                                    {item.readymade_price}
                                  </p>
                                )
                              ) : item.custom_offer_price > 0 ? (
                                <>
                                  <p>
                                    {item.currency_symbol}
                                    {item.custom_offer_price}
                                  </p>
                                  <p className={styles.priceSpanP}>
                                    <span className={styles.priceSpan}>
                                      {item.currency_symbol}
                                      {item.custom_price}
                                    </span>
                                    <span className={styles.priceSpan1}>
                                      {item.custom_discount.toFixed(0)}% off
                                    </span>
                                  </p>
                                )}
                                <div className={styles.quan}>
                                  <p>Quantity</p>
                                  <div style={{ display: 'flex' }}>
                                    <Button
                                      className={styles.addBtn}
                                      onClick={() =>
                                        substract_quantity(item, index)
                                      }
                                    >
                                      <RemoveIcon style={{ width: '15px' }} />
                                    </Button>
                                    <div className={styles.quantity}>
                                      {item.quantity}
                                    </div>
                                    <Button
                                      className={styles.removeBtn}
                                      onClick={() => add_quantity(item, index)}
                                    >
                                      <AddIcon style={{ width: '15px' }} />
                                    </Button>
                                  </div>
                                  <Button
                                    // onClick={() => remove_item(item)}
                                    onClick={e => toggleRemoveModal(item, e)}
                                    className={styles.RemoveBTN}
                                  >
                                    Remove item
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {item.type === 'customise' ? (
                            <div
                              style={{ marginLeft: '1em', marginBottom: '1em' }}
                            >
                              <CheckOutProcess />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
                    );
                  })}
                  <div>
                    <div></div>
                  </div>
                </div>
              )}
              <div className={styles.lastContainer}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>Price Details</div>
                    <div className={styles.BtnlIkediv}>{cart.items.length}</div>
                  </div>
                  <div>
                    <CustomDivider style={{ backgroundColor: '#CECECE' }} />
                    <div className={styles.selectedProductPrices}>
                      <div>
                        <label>Product Price</label>

                        <span>₹{cart?.total}</span>
                      </div>
                      <div>
                        <label>Service charges</label>
                        <span>
                          ₹{cart?.taxes}({cart?.taxrate})
                        </span>
                      </div>
                      <div>
                        <label>Delivery charges</label>
                        <span>₹{cart?.delivery_charge || '₹0'}</span>
                      </div>
                    </div>
                    <CustomDivider style={{ backgroundColor: '#CECECE' }} />
                  </div>
                  <div className={styles.totalAmtDiv}>
                    <div>
                      <label>Total Amount</label>
                      <span>₹{cart?.grand_total}</span>
                    </div>
                  </div>
                  <CustomDivider style={{ backgroundColor: '#CECECE' }} />

                  <Accordion
                    style={{
                      boxShadow: 'none',
                      margin: '1rem 0',
                      padding: 0,
                    }}
                    className={styles.applyCouponDiv}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      IconButtonProps={{ size: 'small' }}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                      style={{
                        boxShadow: 'none',
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <div className={styles.accordionHeader}>
                        <CouponIcon />
                        <span>Apply Coupon</span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        background: '#fff',
                        padding: '.8rem 0',
                      }}
                    >
                      <div className={styles.couponInputDiv}>
                        <div>
                          <input
                            type='text'
                            placeholder='Enter coupon code'
                            name='coupon'
                          />
                          <span>Apply</span>
                        </div>
                        <button onClick={toggleModal}>View offers</button>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Button
                    variant='text'
                    color='default'
                    className={styles.placeOrderBtn}
                    onClick={() => on_checkout()}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CustomSection>
      }

      {modal && <SuccessPopUp toggle={toggleModal} />}
    </Container>
  );
}

const MobileProductMyBag = ({
  substract_quantity,
  add_quantity,
  data,
  remove_item,
  move_to_wishlist,
}) => {
  console.log(data);

  return (
    <div className={styles.MobileConatiner}>
      <h1 className={styles.h1}>My Bag</h1>
      {data?.map((item, index) => {
        return (
          <div className={styles.MobileborderDiv}>
            <div className={styles.mainDiv}>
              <div className={styles.ImageQuanDiv}>
                <Link to={`/product-description/${item.product.slug}`}>
                  <img
                    src={item.product?.image}
                    className={styles.mainimg}
                    alt={data.id}
                  />
                </Link>
              </div>
              <div className={styles.InfoDiv}>
                <div className={styles.mainInfo}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                      <h1>{item.title}</h1>
                      <p style={{ marginTop: '-24px' }}>{item.fabric}</p>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '80%',
                          }}
                        >
                          <p className={styles.PType1}>Product Type</p>
                          <p className={styles.PType2}>
                            {item.type.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <div className={styles.PriceMobile}>
                        <p className={styles.PriceMobileMain}>
                          {item.currency_symbol}
                          {item.type === 'readymade'
                            ? item.readymade_price
                            : item.custom_price}
                        </p>
                        <p className={styles.PriceMobileOriginal}>
                          {item.unit_price}
                        </p>
                        <p className={styles.PriceMobileDiscount}>
                          {item.discount}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className={styles.quan}>
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <Button
                            className={styles.addBtn1}
                            onClick={() => substract_quantity(item, index)}
                          >
                            <RemoveIcon
                              style={{
                                width: '15px',
                                transform: 'rotate(90deg)',
                              }}
                            />
                          </Button>
                          <div className={styles.quantity1}>
                            <span style={{ transform: 'rotate(270deg)' }}>
                              {item.quantity}
                            </span>
                          </div>
                          <Button
                            className={styles.removeBtn1}
                            onClick={() => add_quantity(item, index)}
                          >
                            <AddIcon style={{ width: '15px' }} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>


                  {item.type === "readymade" ? (
                    item.readymade_offer_price > 0 ? (
                      <div className={styles.PriceMobile}>
                        <p className={styles.PriceMobileMain}>
                          {item.currency_symbol}
                          {item.readymade_offer_price}
                        </p>
                        <p className={styles.PriceMobileOriginal}>
                          {item.currency_symbol}
                          {item.readymade_price}
                        </p>
                        <p className={styles.PriceMobileDiscount}>
                          {item.readymade_discount.toFixed(0)}% OFF
                        </p>
                      </div>
                    ) : (
                      <div className={styles.PriceMobile}>
                        <p className={styles.PriceMobileMain}>
                          {item.currency_symbol}
                          {item.readymade_price}
                        </p>
                      </div>
                    )
                  ) : item.custom_offer_price > 0 ? (
                    <div className={styles.PriceMobile}>
                      <p className={styles.PriceMobileMain}>
                        {item.currency_symbol}
                        {item.custom_offer_price}
                      </p>
                      <p className={styles.PriceMobileOriginal}>
                        {item.currency_symbol}
                        {item.custom_price}
                      </p>
                      <p className={styles.PriceMobileDiscount}>
                        {item.custom_discount.toFixed(0)}% OFF
                      </p>
                    </div>
                  ) : (
                    <div className={styles.PriceMobile}>
                      <p className={styles.PriceMobileMain}>
                        {item.currency_symbol}
                        {item.custom_price}
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={(e) => move_to_wishlist(item, e)}
                    className={styles.MoveToWishListBtnMobile}
                  >
                    Move to Whishlist
                  </Button>
                  <Button
                    onClick={(e) => remove_item(item, e)}
                    className={styles.RemoveBTNMobile}
                  >
                    Remove item
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.mobileButton}>
              <Button
                onClick={e => move_to_wishlist(item, e)}
                className={styles.MoveToWishListBtnMobile}
              >
                Move to Whishlist
              </Button>
              <Button
                onClick={e => remove_item(item, e)}
                className={styles.RemoveBTNMobile}
              >
                Remove item
              </Button>
              <hr />
            </div>
            {item.type === 'customise' ? <CheckOutProcess /> : <></>}
          </div>
        );
      })}
    </div>
  );
};

export function CheckOutProcess() {
  return (
    <div className={styles.CheckOutProcess}>
      <h1>Check out process</h1>
      <li>
        On ordering customized product type, we’ll stitch this product for your
        body measurement. You can add the measurement after the payment.
      </li>
      <Button
        variant='contained'
        color='secondary'
        className={styles.CheckOutProcessBtn}
        startIcon={<PlayCircleFilledIcon />}
      >
        Watch Measurement Video
      </Button>
    </div>
  );
}
