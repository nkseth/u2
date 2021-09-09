import React, { useState, useEffect } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@material-ui/core";
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

export default function OrderSummary() {

  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [quantity, setQuantity] = useState(1);
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";

  useEffect(() => {
   fetch_data()
  },[])

  const fetch_data = async() => {
    const {data} = await common_axios.get('/carts')
    console.log(data)
  }

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection>
        <Breadcrumb
          path='Home / Men / Blazers / My Bag / Executive Measurement / Address'
          activePath='/ Order Summary'
        />
        <div>
          <CustomStepper activeStep={0} />
        </div>
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div>Order Summary</div>
            <div>
              <img src={img} alt='product' />
              <div>
                <div>
                  <p>
                    Men Creamed Blazer With White <br />
                    T-shirt Be Wearing in 2021
                  </p>
                  <p>Solid colour</p>
                  {mobileView && (
                    <span
                      style={{
                        fontFamily: "DM Serif Display",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "28px",
                      }}
                    >
                      ₹559
                    </span>
                  )}
                  <div>
                    <span>Quantity</span>
                    <div>
                      <Button
                        className={styles.addBtn}
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        <RemoveIcon style={{ width: "15px" }} />
                      </Button>
                      <div className={styles.quantity}>{quantity}</div>
                      <Button
                        className={styles.removeBtn}
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <AddIcon style={{ width: "15px" }} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <p>₹559</p>
                  <p>
                    <span>₹1499</span>
                    <span>63% OFF</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
            <div>Order confirmation email will be send to your email id</div>
          </div>
          <div className={styles.lastContainer}>
            <div>
              <div>Price Details</div>
              <div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                <div className={styles.selectedProductPrices}>
                  <div>
                    <label>Product Price</label>
                    <span>₹599</span>
                  </div>
                  <div>
                    <label>Service charges</label>
                    <span>₹50</span>
                  </div>
                  <div>
                    <label>Delivery charges</label>
                    <span>₹100</span>
                  </div>
                </div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              </div>
              <div className={styles.totalAmtDiv}>
                <div>
                  <label>Total Amount</label>
                  <span>₹749</span>
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
                    aria-controls='panel1a-content'
                    id='panel1a-header'
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
                          type='text'
                          placeholder='Enter coupon code'
                          name='coupon'
                        />
                        <span>Apply</span>
                      </div>
                      <Link to='/'>View offers</Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className={styles.placeOrderBtnDiv}>
              <Button
                variant='text'
                color='default'
                className={styles.placeOrderBtn}
                onClick={() => history.push("/delivery-address")}
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
