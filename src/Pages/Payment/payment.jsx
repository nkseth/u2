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
import { Product_Type, Product_Type_Change } from "../../Redux/MeasuremantData";
import tick from "./tick.svg";
import close from "./close.svg";
import { useSelector } from "react-redux";
import common_axios from "../../utils/axios.config";
const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
export default function Payment({ match }) {
  const history = useHistory();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  const [selectedUPIApp, setSelectedUPIApp] = useState("");
  const [PaymentDone, setPaymentDone] = useState(false);
  const {
    params: { id },
  } = match;

  const toggle = () => {
    setPaymentDone(false);
  };
  useEffect(() => {
    const unsub = () => {
      if (selectedPaymentMethod !== "upi") {
        setSelectedUPIApp("");
      }
    };
    unsub();
    return unsub;
  }, [selectedPaymentMethod]);

  const { order_summ } = useSelector((state) => state.root.main);

  console.log(order_summ);

  const initiate_payment = async () => {
    console.log(order_summ.id);
    try {
      const { data } = await common_axios.put(`/order/${order_summ.id}/save`, {
        address_id: id,
        payment_method_id: "3",
      });
      console.log(data);
      setPaymentDone(!PaymentDone);
    } catch (e) {
      console.log(e?.response?.data);
    }
  };

  return (
    <div className={styles.PaymentHeader}>
      <div className={styles.Navbar}>
        <h1>LOGO</h1>
        <CustomDivider />
      </div>
      {PaymentDone ? (
        <SuccessPopUp
          history={history}
          payment
          toggle={toggle}
          title={"Your payment is successfully done"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting"
          }
        />
      ) : (
        <></>
      )}
      <CustomSection style={{ marginTop: "2rem" }}>
        <Breadcrumb
          path="Home / My Bag / Order Summary"
          activePath="/ Payment"
        />
        <div>
          <CustomStepper activeStep={1} />
        </div>
        <div className={styles.container}>
          <div className={styles.firstContainer}>
            <div className={styles.paymentHeader}>Payment Option</div>
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
                      size="small"
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
                      size="small"
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
                        label="Card number"
                        placeholder="xxxx xxxx xxxx xxxx"
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <InputField
                        label="Name on card"
                        placeholder="eg. Robert Mathew"
                      />
                    </div>
                    <div>
                      <InputField label="Validity" placeholder="MM / YY" />
                      <InputField label="CVV" placeholder="eg. 983" />
                    </div>
                  </div>
                  <div className={styles.payBtnDiv}>
                    <Button
                      variant="contained"
                      color="default"
                      className={styles.payBtn}
                      onClick={() => {
                        setPaymentDone(!PaymentDone);
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
                    <span>{order_summ.total}</span>
                  </div>
                  <div>
                    <label>Service charges</label>
                    <span>{order_summ.taxes}</span>
                  </div>
                  <div>
                    <label>Delivery charges</label>
                    <span>
                      {order_summ.delivery_charge
                        ? order_summ.delivery_charge
                        : "₹0"}
                    </span>
                  </div>
                </div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              </div>
              <div className={styles.totalAmtDiv}>
                <div>
                  <label>Total Amount</label>
                  <span>{order_summ.grand_total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
    </div>
    // </Container>
  );
}

export function SuccessPopUp({ toggle, title, text, history, payment }) {
  return (
    <div className={styles.modal}>
      <div className={styles.SecondLayer} onClick={toggle}></div>
      <div className={styles.Popup}>
        <IconButton className={styles.CloseBtn} onClick={toggle}>
          <img src={close} />
        </IconButton>
        <img src={tick} />
        <h1>{title}</h1>
        <p>{text}</p>
        {payment ? (
          <>
            <Button
              className={styles.AddmeasureBTN}
              onClick={() =>
                history.push("/add-measurement-choose-standard-size")
              }
            >
              Add measurement
            </Button>
            <Button className={styles.LaterBTN} onClick={toggle}>
              I’ll do it later
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
