import React, { useState, useEffect } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { ReactComponent as LocationIcon } from "../../Images/icons/location.svg";
import SelectedFabricSample from "./Components/Selected-Fabric-Sample/index";
import SelectedSubscriptionPlans from "./Components/Selected-Subscription-plan";
import Container from "../../utils/Container/container";
import { Link, useHistory } from "react-router-dom";
import CustomDivider from "../../utils/Custom Divider/divider";
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomStepper from "../../utils/Stepper/stepper";
import styles from "./orderSummary.module.scss";
//icons
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReactComponent as CouponIcon } from "../../Images/icons/coupon.svg";
import common_axios from "../../utils/axios.config";
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData";
import { CheckOutProcess } from "../My-Bag/MyBag";
import close from "../Payment/close.svg";
import NewAddress from "../Delivery Address/Components/fabric-sample-card/NewAddress";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAddress } from "../../Redux/actions/checkout";
import {
  applyCoupons,
  getCartItems,
  getCoupons,
} from "../../Redux/actions/myBag";
import Loader from "../../utils/Loader/Loader";
import { getMyAddresses } from "../../Redux/actions/address";
import { SuccessPopUp } from "../../utils/Popups/SuccessPopup";
import CartOffers from "../My-Bag/Components/Offers/CartOffers";

export default function OrderSummary() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabView = useMediaQuery("(max-width:769px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [AddAddress, setAddAddress] = useState(false);
  const [customType, setCustomType] = useState(false);
  const [modal, setModal] = useState(false);
  const [coupon, setCoupon] = useState(null);
  const toggleModal = () => setModal((modal) => !modal);

  const { cart, loading } = useSelector((state) => state.root.cartItems);
  console.log(cart);

  useEffect(() => {
    if (cart?.items?.length > 0) {
      for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product.isCustomise === "on") {
          console.log(cart.items[i].product.isCustomise);
          setCustomType(true);
          break;
        }
      }
    }
    if (!cart) dispatch(getCartItems());
    dispatch(getCoupons());
  }, [dispatch, cart]);

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

  const applyCartCoupon = (e) => {
    e.preventDefault();
    if (!coupon) return alert("Select coupon first.");
    dispatch(applyCoupons(cart.id, coupon.id, cart.shop_id));
  };

  const checkout = (e) => {
    e.preventDefault();
    if (!cart.shipping_address) return alert("Add address to proceed..");
    history.push(`/payment/${cart.id}`);
  };

  return (
    <Container bottomDivider footerOnTabMob>
      {AddAddress && <NewAddress setAddAddress={setAddAddress} />}
      <CustomSection style={{ marginTop: "2em" }}>
        <Breadcrumb path="Home / My Bag" activePath="/ Order Summary" />
        <div>
          <CustomStepper activeStep={0} customType={customType} />
        </div>
        {!cart ? (
          <Loader />
        ) : (
          <div className={styles.container}>
            <div className={styles.firstContainer}>
              <div className={styles.mainHeader}>Order Summary</div>
              <div className={styles.borderDiv}>
                <div className={styles.OrderLine}>
                  <p>Delivery Address</p>
                  <CustomDivider />
                </div>

                <DeliveryAddress
                  setAddAddress={setAddAddress}
                  address={cart.shipping_address}
                  cartId={cart.id}
                />

                <div className={styles.OrderLine}>
                  <p>Order Details</p>
                  <CustomDivider />
                </div>
                {cart.items?.map((item, index) => {
                  return (
                    <>
                      <div className={styles.mainDiv}>
                        <img
                          src={item.feature_image}
                          alt="product"
                          className={styles.image}
                        />
                        <div style={{ padding: "0" }}>
                          <div>
                            <p className={styles.Itemname}>{item.title}</p>
                            <p>{item.fabric}</p>
                            <p className={styles.protype}>Product Type</p>
                            <p className={styles.protypetext}>
                              {item.type.toUpperCase()}
                            </p>
                            <div className={styles.quan}>
                              <p>Quantity</p>
                              <div style={{ display: "flex" }}>
                                <Button
                                  className={styles.addBtn}
                                  onClick={() =>
                                    substract_quantity(item, index)
                                  }
                                >
                                  <RemoveIcon style={{ width: "15px" }} />
                                </Button>
                                <div className={styles.quantity}>
                                  {item.quantity}
                                </div>
                                <Button
                                  className={styles.removeBtn}
                                  onClick={() => add_quantity(item, index)}
                                >
                                  <AddIcon style={{ width: "15px" }} />
                                </Button>
                              </div>
                            </div>
                            {mobileView && (
                              <div className={styles.PriceMobile}>
                                {item.type === "readymade" ? (
                                  item.readymade_offer_price > 0 ? (
                                    <p className={styles.PriceMobileMain}>
                                      {item.currency_symbol}
                                      {item.readymade_offer_price}
                                      <span
                                        className={styles.PriceMobileOriginal}
                                      >
                                        {item.currency_symbol}
                                        {item.readymade_price}
                                      </span>
                                      <span
                                        className={styles.PriceMobileDiscount}
                                      >
                                        {item.readymade_discount}% OFF
                                      </span>
                                    </p>
                                  ) : (
                                    <p className={styles.PriceMobileMain}>
                                      {item.currency_symbol}
                                      {item.readymade_price}
                                    </p>
                                  )
                                ) : item.custom_offer_price > 0 ? (
                                  <p className={styles.PriceMobileMain}>
                                    {item.currency_symbol}
                                    {item.custom_offer_price}
                                    <span
                                      className={styles.PriceMobileOriginal}
                                    >
                                      {item.currency_symbol}
                                      {item.custom_price}
                                    </span>
                                    <span
                                      className={styles.PriceMobileDiscount}
                                    >
                                      {item.custom_discount.toFixed(0)}% OFF
                                    </span>
                                  </p>
                                ) : (
                                  <p className={styles.PriceMobileMain}>
                                    {item.currency_symbol}
                                    {item.custom_price}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                          {!mobileView && (
                            <div className={styles.proMoney}>
                              {item.type === "readymade" ? (
                                item.readymade_offer_price > 0 ? (
                                  <p>
                                    {item.currency_symbol}
                                    {item.readymade_offer_price}
                                    <span>
                                      {item.currency_symbol}
                                      {item.readymade_price}
                                    </span>
                                    <span>{item.readymade_discount}% OFF</span>
                                  </p>
                                ) : (
                                  <p>
                                    {item.currency_symbol}
                                    {item.readymade_price}
                                  </p>
                                )
                              ) : item.custom_offer_price > 0 ? (
                                <p>
                                  {item.currency_symbol}
                                  {item.custom_offer_price}
                                  <span>
                                    {item.currency_symbol}
                                    {item.custom_price}
                                  </span>
                                  <span>
                                    {item.custom_discount.toFixed(0)}% OFF
                                  </span>
                                </p>
                              ) : (
                                <p>
                                  {item.currency_symbol}
                                  {item.custom_price}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
                {customType && (
                  <div
                    style={{
                      margin: mobileView ? "0" : "1em",
                      marginTop: "1em",
                      width: "100%",
                    }}
                  >
                    <CheckOutProcess />
                  </div>
                )}
              </div>

              <div>
                <div></div>
              </div>
              {mobileView ? (
                <></>
              ) : (
                <div
                  style={
                    tabView ? { marginTop: "1em", marginBottom: "-1em" } : {}
                  }
                >
                  Order confirmation email will be send to your email id
                </div>
              )}
            </div>
            <div className={styles.lastContainer}>
              <div>
                <div>Price Details</div>
                <div>
                  <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                  <div className={styles.selectedProductPrices}>
                    <div>
                      <label>Product Price</label>
                      <span>₹{cart.total}</span>
                    </div>
                    <div>
                      <label>Service charges</label>
                      <span>
                        ₹{cart.taxes}({cart.taxrate})
                      </span>
                    </div>
                    <div>
                      <label>Delivery charges</label>
                      <span>₹{cart?.delivery_charge}</span>
                    </div>
                  </div>
                  <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                </div>
                <div className={styles.totalAmtDiv}>
                  <div>
                    <label>Total Amount</label>
                    <span>₹{cart.grand_total}</span>
                  </div>
                  <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                </div>
                <div>
                  <Accordion
                    style={{
                      boxShadow: "none",
                      margin: 0,
                      padding: 0,
                    }}
                    className={styles.applyCouponDiv}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      IconButtonProps={{ size: "small" }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{
                        boxShadow: "none",
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
                        background: "#fff",
                        padding: ".8rem 0",
                      }}
                    >
                      <div className={styles.couponInputDiv}>
                        <div>
                          <input
                            type="text"
                            placeholder="Enter coupon code"
                            name="coupon"
                            value={coupon ? coupon.code : ""}
                          />
                          <span onClick={applyCartCoupon}>Apply</span>
                        </div>
                        <span
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={toggleModal}
                        >
                          View offers
                        </span>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              {modal && (
                <SuccessPopUp toggle={toggleModal}>
                  <CartOffers
                    coupon={coupon}
                    setCoupon={setCoupon}
                    toggle={toggleModal}
                  />
                </SuccessPopUp>
              )}
              <div className={styles.placeOrderBtnDiv}>
                <Button
                  variant="text"
                  color="default"
                  className={styles.placeOrderBtn}
                  onClick={checkout}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        )}
      </CustomSection>
    </Container>
  );
}

export function DeliveryAddress({ address, setAddAddress, cartId }) {
  const routerHistory = useHistory();
  return (
    <div className={styles.DeliveryAddress}>
      {address && (
        <div className={styles.mainDiv}>
          <div className={styles.firstAftermain}>
            <div>
              <span>{address.name}</span>
              <div className={styles.badge}>{address.address_type}</div>
            </div>
            <p>{`${address.address_line_1} - ${address.zip_code}`}</p>
            <p>
              <span>Contact:</span>&nbsp;
              <span>{address.phone}</span>
            </p>
          </div>

          <div>
            <Button
              variant="contained"
              color="default"
              className={styles.editBtn}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="default"
              className={styles.changeBtn}
              onClick={() => routerHistory.push(`/delivery-address/${cartId}`)}
            >
              Change
            </Button>
          </div>
        </div>
      )}
      <div className={styles.ActionBtnDiv}>
        {!address && (
          <div className={styles.btnDiv} style={{ marginBottom: "1rem" }}>
            <Button
              className={styles.addNewAddressBtn}
              variant="contained"
              color="default"
              endIcon={<AddIcon />}
              onClick={() => routerHistory.push(`/delivery-address/${cartId}`)}
            >
              Select Existing Address
            </Button>
          </div>
        )}
        <div className={styles.btnDiv} style={{ marginBottom: "1rem" }}>
          <Button
            className={styles.addNewAddressBtn}
            variant="contained"
            color="default"
            endIcon={<AddIcon />}
            onClick={() => setAddAddress(true)}
          >
            Add New Address
          </Button>
        </div>

        <div className={styles.btnDiv}>
          <Button
            className={styles.useCurrentLocationBtn}
            variant="contained"
            color="default"
            startIcon={<LocationIcon />}
          >
            Use current location
          </Button>
        </div>
      </div>
    </div>
  );
}
