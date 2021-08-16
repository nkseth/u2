import React, { useState } from "react";
import styles from "./style/SignUpVarify.module.scss";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";

/**
 * 
OtpInput not work properly
 */
const SignUpVarify = () => {
  const { login_Model_Hide } = useLogin();
  const [text,setText]=useState()
  return (
    <form className={styles.SignUpVarify}>
      <div className={styles.SignUpVarify_Input}>
        <label>Mobile Number</label>
        <input type="text" placeholder="+91987654321" />
        <button className={styles.Change_btn}>change</button>
      </div>
      <div className={styles.SignUpVarify_Text}>
        <p>Please enter the OTP sent to the mobile number</p>
      </div>
      <div className={styles.SignUpVarify_OTP}>
        <OtpInput
          containerStyle={{ display: "flex", justifyContent: "space-evenly" }}
          inputStyle={{ color: "#6c6c6c", fontSize: "16px" }}
          numInputs={4}
          errorStyle="error"
          onChange={(event) => console.log(event)}
          separator={<span>{"  "}</span>}
          isInputNum={true}
          value={1234}
          name="otp"
        />
      </div>
      <div className={styles.SignUpVarify_Button}>
        <Button onClick={login_Model_Hide}>Get Started</Button>
      </div>
      <div className={styles.SignUpVarify_Bottom_Link_1}>
        <Link>
          Didn't receive code? <b style={{color:'#0000EE'}}>Resend code</b>
        </Link>
      </div>
      <div className={styles.SignUpVarify_Bottom_Link_2}>
        <Link>
          Already have an account? <b>Login</b>
        </Link>
      </div>
    </form>
  );
};

export default SignUpVarify;
