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
  const tabView = useMediaQuery("(max-width:769px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [data, setData] = useState([])
  const [priceDetails, setPriceDetails] = useState({})
  const [quantity, setQuantity] = useState(1);
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";

  useEffect(() => {
    fetch_data()
  }, [])

  const fetch_data = async () => {
    const { data: val } = await common_axios.get('/carts')
    if (val.data?.length > 0) {
      setData(val.data[0].items)
      setPriceDetails(val.data[0])
    }
    console.log(val)
  }

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={{ marginTop: "2em" }} >
        <Breadcrumb
          path='Home / Men / Blazers / My Bag / Executive Measurement / Address'
          activePath='/ Order Summary'
        />
        <div>
          <CustomStepper activeStep={1} />
        </div>
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div>Order Summary</div>
            {data?.map((item) => {
              return (
                <div className={styles.borderDiv} >
                  <img src={img} alt='product' className={styles.image} />
                  <div>
                    <div>
                      <p>
                       {item.title}
                      </p>
                      <p>Solid colour</p>
                      <p className={styles.protype}  >Product Type</p>
                      <p className={styles.protypetext} >Readymade</p>
                      {mobileView && (
                        <div className={styles.PriceMobile}>
                          <p className={styles.PriceMobileMain} >₹559

                            <span className={styles.PriceMobileOriginal} >₹11499</span>
                            <span className={styles.PriceMobileDiscount} >13% OFF</span>

                          </p>

                        </div>
                      )}

                      {/* </div> */}
                    </div>
                    <div className={styles.proMoney} >
                      <p>₹559</p>
                      <p>
                        <span>₹1499</span>
                        <span>63% OFF</span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            <div>
              <div></div>
            </div>
            {
              mobileView ?


                <></>
                :
                <div style={tabView ? { marginTop: "1em", marginBottom: "-1em" } : {}}  >Order confirmation email will be send to your email id</div>
            }
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
