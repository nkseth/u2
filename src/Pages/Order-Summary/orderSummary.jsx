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

export default function OrderSummary() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:769px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [data, setData] = useState([]);

  const [AddAddress, setAddAddress] = useState(false);
  const [priceDetails, setPriceDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";

  useEffect(() => {
    fetch_data();
  }, []);

  const fetch_data = async () => {
    const { data: val } = await common_axios.get("/carts");

    if (val.data?.length > 0) {
      setData(val.data[0].items);
      setPriceDetails(val.data[0]);
    }
    console.log(val);
    console.log(priceDetails);
  };

  return (
    <Container bottomDivider footerOnTabMob>
      {AddAddress ? <NewAddress setAddAddress={setAddAddress} /> : <></>}
      <CustomSection style={{ marginTop: "2em" }}>
        <Breadcrumb path="Home / My Bag" activePath="/ Order Summary" />
        <div>
          <CustomStepper activeStep={0} />
        </div>
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div className={styles.mainHeader}>Order Summary</div>
            <div className={styles.borderDiv}>
              <div className={styles.OrderLine}>
                <p>Delivery address</p>
                <CustomDivider />
              </div>
              <DeliveryAddress setAddAddress={setAddAddress} />
              <div className={styles.OrderLine}>
                <p>Order Details</p>
                <CustomDivider />
              </div>
              {data?.map((item) => {
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
                            {item.product.isVariant ? "Readymade" : "Custom"}
                          </p>
                          <div className={styles.quan}>
                            <p>Quantity</p>
                            <div style={{ display: "flex" }}>
                              <Button
                                className={styles.addBtn}
                                // onClick={() => substract_quantity(item, index)}
                              >
                                <RemoveIcon style={{ width: "15px" }} />
                              </Button>
                              <div className={styles.quantity}>
                                {item.quantity}
                              </div>
                              <Button
                                className={styles.removeBtn}
                                // onClick={() => add_quantity(item, index)}
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
                    <span>{priceDetails.total}</span>
                  </div>
                  <div>
                    <label>Service charges</label>
                    <span>
                      {priceDetails.taxes}({priceDetails.taxrate})
                    </span>
                  </div>
                  <div>
                    <label>Delivery charges</label>
                    {/* <span>₹100</span> */}
                  </div>
                </div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              </div>
              <div className={styles.totalAmtDiv}>
                <div>
                  <label>Total Amount</label>
                  <span>{priceDetails.grand_total}</span>
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
                onClick={() => history.push("/payment/0")}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </CustomSection>
    </Container>
  );
}

export function DeliveryAddress({ setAddAddress }) {
  const routerHistory = useHistory();
  return (
    <div className={styles.DeliveryAddress}>
      <div className={styles.mainDiv}>
        <div className={styles.firstAftermain}>
          <div>
            <span>John Hamilton</span>
            <div className={styles.badge}>primary</div>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <p>
            <span>Mobile:</span>&nbsp;
            <span>+91 9595 005067</span>
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
            change
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
