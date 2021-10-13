import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Radio, IconButton } from "@material-ui/core";
import Container from "../../utils/Container/container";
import { useHistory } from "react-router-dom";
import Logo from "../../Images/logo/U2icon.svg";
import InputField from "./Components/Input-Field/inputField";
import CustomDivider from "../../utils/Custom Divider/divider";
import CustomSection from "../../utils/Custom Section/section";
import CustomStepper from "../../utils/Stepper/stepper";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import styles from "./payment.module.scss";

//icons
import AddIcon from "@material-ui/icons/Add";
import { ReactComponent as PayPalIcon } from "../../Images/icons/paypal.svg";
import tick from "./success.gif";
import close from "./close.svg";
import { useDispatch, useSelector } from "react-redux";

import { getCartItems } from "../../Redux/actions/myBag";
import Loader from "../../utils/Loader/Loader";
import { clearCheckoutErrors, setPayment } from "../../Redux/actions/checkout";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
export default function Payment({
  match: {
    params: { id },
  },
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  const [selectedUPIApp, setSelectedUPIApp] = useState("");
  const [PaymentDone, setPaymentDone] = useState(false);

  console.log(id);
  const toggle = () => {
    setPaymentDone(false);
  };

  const { cart } = useSelector((state) => state.root.cartItems);
  const { info, loading, error } = useSelector((state) => state.root.payment);
  useEffect(() => {
    // if (!loading && info) setPaymentDone(!PaymentDone);
    if (error) {
      alert("Error - Payment can't be processed now. Try again later");
      dispatch(clearCheckoutErrors());
    }
    dispatch(getCartItems());
    // unsub();
    // return unsub;
    if (!loading && info) razorPayment();
  }, [dispatch, info, error, loading]);

  const unsub = () => {
    if (selectedPaymentMethod !== "upi") {
      setSelectedUPIApp("");
    }
  };

  const loadRazorPay = () => {
    return new Promise((resolve) => {
      const razorPayScript = document.createElement("script");
      razorPayScript.src = "https://checkout.razorpay.com/v1/checkout.js";
      razorPayScript.onload = () => resolve(true);
      razorPayScript.onerror = () => resolve(false);
      console.log("pay", razorPayScript);
      document.body.appendChild(razorPayScript);
    });
  };
  const razorPayment = async () => {
    const res = await loadRazorPay();
    if (!res) {
      alert(
        "Razorpay SDK failed to load. Check your internet connection or try later."
      );
    }

    if (res) {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: "50000", //=Rs500, String In Paise(smallest currency of India)
        currency: "INR",
        name: "U2 Unique & Universal",
        description: "Test Transaction",
        image: Logo, //"https://example.com/your_logo"
        // order_id: "12349dsfsfs_efewrriewf_dfrfd", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
          setPaymentDone(!PaymentDone);
        },
        prefill: {
          name: "User",
          email: "vishal@example.com",
          contact: "9999999999", //cart.shipping_address.phone, // "9999999999",
        },
        // notes: {
        //   address: "Razorpay Corporate Office",
        // },
        theme: {
          color: "#6a5b40",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      // paymentObject.on("payment.failed", function (response) {
      //   alert(response.error.code);
      //   alert(response.error.description);
      //   alert(response.error.source);
      //   alert(response.error.step);
      //   alert(response.error.reason);
      //   alert(response.error.metadata.order_id);
      //   alert(response.error.metadata.payment_id);
      // });
      // document.getElementById("rzp-button1").onclick = function (e) {
      //   paymentObject.open();
      //   e.preventDefault();
      // };
    }
  };
  const initiate_payment = async (e) => {
    e.preventDefault();
    if (!cart) return alert("You cart is empty.");
    dispatch(setPayment(cart.id));
  };

  return (
    <Container bottomDivider footerOnTabMob>
      <div className={styles.PaymentHeader}>
        {PaymentDone ? (
          <SuccessPopUp
            history={history}
            payment
            orderId={id}
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
                      <span>( Phone pe / Paytm / Googlepay)</span>
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
                      onClick={() =>
                        setSelectedPaymentMethod("creditDebitCard")
                      }
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
                        onClick={
                          initiate_payment
                          //   () => {
                          //   setPaymentDone(!PaymentDone);
                          // }
                        }
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
                {!cart ? (
                  <Loader />
                ) : (
                  <>
                    <div>
                      <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                      <div className={styles.selectedProductPrices}>
                        <div>
                          <label>Product Price</label>
                          <span>₹{cart.total}</span>
                        </div>
                        <div>
                          <label>Service charges</label>
                          <span>₹{cart.taxes}</span>
                        </div>
                        <div>
                          <label>Delivery charges</label>
                          <span>
                            {cart.delivery_charge ? cart.delivery_charge : "₹0"}
                          </span>
                        </div>
                      </div>
                      <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                    </div>
                    <div className={cart.totalAmtDiv}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <label>Total Amount</label>
                        <span>₹{cart.grand_total}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </CustomSection>
      </div>
    </Container>
  );
}

export function SuccessPopUp({ toggle, title, text, history, payment }) {
  const { info, loading, error } = useSelector((state) => state.root.payment);
  return (
    <div className={styles.modal}>
      <div className={styles.SecondLayer} onClick={toggle}></div>
      <div className={styles.Popup}>
        <IconButton className={styles.CloseBtn} onClick={toggle}>
          <img src={close} alt="close" />
        </IconButton>
        <img src={tick} alt="tick" />
        <h1>{title}</h1>
        <p>{text}</p>
        {payment ? (
          <>
            <Button
              className={styles.AddmeasureBTN}
              onClick={() =>
                history.push(`/add-measurement-choose-standard-size/${info.id}`)
              }
              disabled={!info}
            >
              Add measurement
            </Button>
            <Button
              className={styles.LaterBTN}
              onClick={() => history.push(`/all-orders`)}
              disabled={!info}
            >
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
