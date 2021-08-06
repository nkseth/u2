import React from "react";
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
  return (
    <form className={styles.SignUpVarify}>
      <div className={styles.SignUpVarify_Input}>
        <label>Mobile Number</label>
        <input type="text" placeholder="+91987654321" />
        <button>change</button>
      </div>
      <div className={styles.SignUpVarify_Text}>
        <p>Please enter the OTP sent to the mobile number</p>
      </div>
      <div className={styles.SignUpVarify_OTP}>
        <OtpInput
          containerStyle={{ display: "flex", justifyContent: "space-evenly" }}
          inputStyle={{ color: "#0a0a0a", fontSize: "16px" }}
          numInputs={4}
          errorStyle="error"
          onChange={(event) => console.log(event)}
          separator={<span>{"  "}</span>}
          isInputNum={true}
          name="otp"
        />
      </div>
      <div className={styles.SignUpVarify_Button}>
        <Button onClick={login_Model_Hide}>Get Started</Button>
      </div>
      <div className={styles.SignUpVarify_Bottom_Link_1}>
        <Link>
          Didn't receive code? <b>Resend code</b>
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
