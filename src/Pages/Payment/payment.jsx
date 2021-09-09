import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Radio, IconButton } from "@material-ui/core";
import Container from "../../utils/Container/container";
import { Link, useHistory } from "react-router-dom";
import InputField from "./Components/Input-Field/inputField";
import CustomDivider from "../../utils/Custom Divider/divider";
import CustomSection from "../../utils/Custom Section/section";
import CustomStepper from "../../utils/Stepper/stepper";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./payment.module.scss";
//icons
import AddIcon from "@material-ui/icons/Add";
import { ReactComponent as PayPalIcon } from "../../Images/icons/paypal.svg";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);
export default function Payment() {
  const history = useHistory();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  const [selectedUPIApp, setSelectedUPIApp] = useState("");
  useEffect(() => {
    const unsub = () => {
      if (selectedPaymentMethod !== "upi") {
        setSelectedUPIApp("");
      }
    };
    unsub();
    return unsub;
  }, [selectedPaymentMethod]);
  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={{ marginTop: "2rem" }}>
        <Breadcrumb
          path='Home / Men / Blazers / My Bag / Executive Measurement / Address'
          activePath='/ Order Summary'
        />
        <div>
          <CustomStepper activeStep={2} />
        </div>
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div>Payment Option</div>
            <div>
              <div className={styles.upiDiv}>
                <div>
                  <CustomRadio
                    checked={selectedPaymentMethod === "upi"}
                    onClick={() => setSelectedPaymentMethod("upi")}
                  />
                  <p>
                    <span>UPI</span>
                    <span>( Phone pe / Payatm / Googlepay)</span>
                  </p>
                </div>
                <div>
                  <span>Choose an App</span>
                  <div>
                    <CustomRadio
                      size='small'
                      onClick={() => {
                        if (selectedPaymentMethod === "upi") {
                          setSelectedUPIApp("phonepe");
                        }
                      }}
                      checked={selectedUPIApp === "phonepe"}
                    />
                    <span>Phonepe</span>
                  </div>
                  <div>
                    <CustomRadio
                      size='small'
                      onClick={() => {
                        if (selectedPaymentMethod === "upi") {
                          setSelectedUPIApp("upiId");
                        }
                      }}
                      checked={selectedUPIApp === "upiId"}
                    />
                    <span>Your UPI ID</span>
                  </div>
                </div>
              </div>
              <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              <div className={styles.paymentCardDiv}>
                <div>
                  <CustomRadio
                    checked={selectedPaymentMethod === "creditDebitCard"}
                    onClick={() => setSelectedPaymentMethod("creditDebitCard")}
                  />
                  <span>Credit / Debit Card</span>
                </div>
                <div>
                  <div>
                    <div>
                      <InputField
                        label='Card number'
                        placeholder='xxxx xxxx xxxx xxxx'
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <InputField
                        label='Name on card'
                        placeholder='eg. Robert Mathew'
                      />
                    </div>
                    <div>
                      <InputField label='Validity' placeholder='MM / YY' />
                      <InputField label='CVV' placeholder='eg. 983' />
                    </div>
                  </div>
                  <div className={styles.payBtnDiv}>
                    <Button
                      variant='contained'
                      color='default'
                      className={styles.payBtn}
                      onClick={() => {
                        history.push("/offers");
                      }}
                    >
                      Pay
                    </Button>
                  </div>
                </div>
              </div>
              <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              <div className={styles.netbankingDiv}>
                <CustomRadio
                  checked={selectedPaymentMethod === "netbanking"}
                  onClick={() => setSelectedPaymentMethod("netbanking")}
                />
                <span>Netbanking</span>
              </div>
              <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              <div className={styles.paypalDiv}>
                <CustomRadio
                  checked={selectedPaymentMethod === "paypal"}
                  onClick={() => setSelectedPaymentMethod("paypal")}
                />
                <PayPalIcon />
              </div>
              <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              <div className={styles.giftCardsCouponsDiv}>
                <IconButton style={{ color: "#000" }}>
                  <AddIcon />
                </IconButton>
                <span>Add gift cards/Coupons</span>
              </div>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </Container>
  );
}
