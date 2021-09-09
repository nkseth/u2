import React, { useState } from "react";
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
import styles from "./MyBag.module.scss";
//icons
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReactComponent as CouponIcon } from "../../Images/icons/coupon.svg";

export default function MyBag() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [quantity, setQuantity] = useState(1);
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";
  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={mobileView ? { marginTop: "0" } : { marginTop: "3em" }} >
        <Breadcrumb
          path='Home / Men / Blazers'
          activePath='/ My Bag'

        />
        <div>
        </div>
        <div className={styles.container}>
          {
            mobileView ?
              <MobileProductMyBag img={img} quantity={quantity} setQuantity={setQuantity} />

              :

              <div className={styles.firstContainer}>
                <div>My Bag</div>
                <div>
                  <img src={img} alt='product' className={styles.image} />
                  <div>
                    <div style={{ alignItems: "flex-start" }} >
                      <p className={styles.proName} >
                        Men Creamed Blazer With White
                        <br />
                        T-shirt Be Wearing in 2021
                      </p>
                      <p>Solid colour</p>

                      <div>

                        <h4>Product Type</h4>
                        <p>Readymade</p>
                        <Button className={styles.MoveToWishListBtn} >Move to Wishlist</Button>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                      <p>₹559</p>
                      <p className={styles.priceSpanP}  >
                        <span className={styles.priceSpan} >₹1499</span>
                        <span className={styles.priceSpan1} >63% OFF</span>
                      </p>
                      <div className={styles.quan} >
                        <p>Quantity</p>
                        <div style={{ display: "flex" }} >
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
                        <Button className={styles.RemoveBTN} >Remove item </Button>
                      </div>
                    </div>


                  </div>
                </div>
                <div>
                  <div>

                  </div>
                </div>
              </div>


          }
          <div className={styles.lastContainer}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>Price Details</div>
                <div className={styles.BtnlIkediv} >3</div>
              </div>
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
              </div>

              <Button
                variant='text'
                color='default'
                className={styles.placeOrderBtn}
                onClick={() => history.push("/delivery-address")}
              >
                Checkout
              </Button>
            </div>


          </div>
        </div>
      </CustomSection>
    </Container>
  );
}



const MobileProductMyBag = ({ img, quantity, setQuantity }) => {
  return (
    <div className={styles.MobileConatiner}>
      <h1 className={styles.h1}  >My Bag</h1>
      <div className={styles.mainDiv}>
        <div className={styles.ImageQuanDiv}>
          <img src={img} className={styles.mainimg} />

          {/* <div className={styles.quan} >
            <p>Quantity</p>
            <div style={{ display: "flex" }} >
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
            <Button className={styles.RemoveBTNMobile} >Remove item </Button>
          </div> */}

        </div>
        <div className={styles.InfoDiv} >
          <div className={styles.mainInfo}>
            <h1>Men Creamed Blazer With White
              T-shirt Be Wearing in 2021</h1>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "80%" }}  >
                <p className={styles.PType1}  >Product Type</p>
                <p className={styles.PType2} >Customised</p>
              </div>
              <div className={styles.quan} >
                <p>Quantity</p>
                <div style={{ display: "flex" }} >
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
                <Button className={styles.RemoveBTNMobile} >Remove item </Button>
              </div>
            </div>


            <div className={styles.PriceMobile}>
              <p className={styles.PriceMobileMain} >₹559</p>
              <p className={styles.PriceMobileOriginal} >₹11499</p>
              <p className={styles.PriceMobileDiscount} >13% OFF</p>
            </div>

            <Button className={styles.MoveToWishListBtnMobile}>Move to Whishlist</Button>
          </div>

        </div>
      </div>
    </div>
  )
}