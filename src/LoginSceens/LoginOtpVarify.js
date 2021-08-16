import React from "react";
import styles from "./style/LoginOtpVarify.module.scss";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";

/*
OtpInput not work properly
 */
const LoginOtpVarify = () => {
  const { login_Model_Hide } = useLogin();
  return (
    <form className={styles.LoginOtpVarify}>
      <div className={styles.LoginOtpVarify_Title}>
        <h1>Welcome Back!</h1>
      </div>
      <div className={styles.LoginOtpVarify_Input}>
        <label>Mobile Number</label>
        <input type="text" placeholder="+91987654321" />
        <button className={styles.Btn_color}>change</button>
      </div>
      <div className={styles.LoginOtpVarify_Button}>
        <Button onClick={login_Model_Hide}>Send OTP</Button>
      </div>
      <div className={styles.LoginOtpVarify_Text}>
        <p>Please enter the OTP sent to the mobile number</p>
      </div>
      <div className={styles.LoginOtpVarify_OTP}>
        <OtpInput
          containerStyle={{ display: "flex", justifyContent: "space-evenly" }}
          inputStyle={{ color: "#6c6c6c", fontSize: "16px" }}
          numInputs={4}
          errorStyle="error"
          onChange={(event) => console.log(event)}
          separator={<span>{"  "}</span>}
          isInputNum={true}
          name="otp"
        />
      </div>
      <div className={styles.LoginOtpVarify_Button}>
        <Button onClick={login_Model_Hide}>Get Started</Button>
      </div>
      <div className={styles.LoginOtpVarify_Bottom_Link_1}>
        <Link>
          Didn't receive code? <b style={{color:'#0000EE'}}>Resend code</b>
        </Link>
      </div>
    </form>
  );
};

export default LoginOtpVarify;
