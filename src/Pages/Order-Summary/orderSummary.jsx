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
import { getCartItems } from "../../Redux/actions/myBag";
import Loader from "../../utils/Loader/Loader";

export default function OrderSummary() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tabView = useMediaQuery("(max-width:769px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [data, setData] = useState([]);

  const [priceDetails, setPriceDetails] = useState({});
  const [AddAddress, setAddAddress] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";

  const { addressList, loading } = useSelector((state) => state.root.address);
  const { cart } = useSelector((state) => state.root.cartItems);
  console.log(addressList);
  console.log(cart);

  useEffect(() => {

    dispatch(getCartItems());
    dispatch(getAddress());
  }, [dispatch]);

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

  const checkout = (e) => {
    e.preventDefault();
    if (addressList.length > 0)
      localStorage.setItem("primaryAddress", addressList[0].address_line_1);
    else localStorage.setItem("primaryAddress", "Address");
    history.push(`/payment/${cart.id}`);
  };

  return (
    <Container bottomDivider footerOnTabMob>
      {AddAddress ? <NewAddress setAddAddress={setAddAddress} /> : <></>}
      <CustomSection style={{ marginTop: "2em" }}>
        <Breadcrumb path="Home / My Bag" activePath="/ Order Summary" />
        <div>
          <CustomStepper activeStep={0} />
        </div>
        {!cart ? (
          <Loader />
        ) : (
          <div className={styles.container}>
            <div className={styles.firstContainer}>
              <div className={styles.mainHeader}>Order Summary</div>
              <div className={styles.borderDiv}>
                <div className={styles.OrderLine}>
                  <p>Delivery address</p>
                  <CustomDivider />
                </div>
                {loading ? (
                  <Loader />
                ) : addressList ? (
                  <DeliveryAddress
                    setAddAddress={setAddAddress}
                    addresses={addressList}
                  />
                ) : null}
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
                            {/* <p>Solid colour</p> */}
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
                                <p className={styles.PriceMobileMain}>
                                  {item.currency_symbol}
                                  {item.readymade_price}
                                  <span className={styles.PriceMobileOriginal}>
                                    {item.currency_symbol}
                                    {item.readymade_price}
                                  </span>
                                  <span className={styles.PriceMobileDiscount}>
                                    {/* 13% OFF */}
                                  </span>
                                </p>
                              </div>
                            )}
                          </div>
                          {mobileView ? (
                            <></>
                          ) : (
                            <div className={styles.proMoney}>
                              <p>
                                {item.currency_symbol}
                                {item.readymade_price}
                              </p>
                              <p>
                                {/* <span>₹1499</span>
                              <span>63% OFF</span> */}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
                {Product_Type === "Customised" ? (
                  <div
                    style={{
                      margin: mobileView ? "0" : "1em",
                      marginTop: "1em",
                      width: "100%",
                    }}
                  >
                    <CheckOutProcess />
                  </div>
                ) : (
                  <></>
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
                      <span>{cart.total}</span>
                    </div>
                    <div>
                      <label>Service charges</label>
                      <span>
                        {cart.taxes}({cart.taxrate})
                      </span>
                    </div>
                    <div>
                      <label>Delivery charges</label>
                      <span>{cart?.deliveryCharge}</span>
                    </div>
                  </div>
                  <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                </div>
                <div className={styles.totalAmtDiv}>
                  <div>
                    <label>Total Amount</label>
                    <span>{cart.grand_total}</span>
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
                          />
                          <span>Apply</span>
                        </div>
                        <Link to="/">View offers</Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

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

export function DeliveryAddress({ addresses, setAddAddress }) {
  const routerHistory = useHistory();
  return (
    <div className={styles.DeliveryAddress}>
      <div className={styles.mainDiv}>
        <div className={styles.firstAftermain}>
          <div>
            <span>John Hamilton</span>
            <div className={styles.badge}>{addresses[0].address_type}</div>
          </div>
          <p>{`${addresses[0].address_line_1} - ${addresses[0].zip_code}`}</p>
          <p>
            <span>Contact:</span>&nbsp;
            <span>{addresses[0].phone}</span>
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
            onClick={() => routerHistory.push("/myaddresses")}
          >
            Change
          </Button>
        </div>
      </div>
      <div className={styles.ActionBtnDiv}>
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
