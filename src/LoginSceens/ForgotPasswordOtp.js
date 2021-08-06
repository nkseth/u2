import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./style/ForgotPasswordOtp.module.scss";
import OtpInput from "react-otp-input";
import useLogin from "./useLogin";
const ForgotPasswordOtp = () => {
  const { login_Mode_Handler } = useLogin();
  return (
    <form className={styles.ForgotPasswordOtp}>
      <div className={styles.ForgotPasswordOtp_Title}>
        <h1>OTP Varification</h1>
        <p>
          Please enter the OTP sent to number +91987654321
          <b>
            <Link>change</Link>
          </b>
        </p>
      </div>

      <div className={styles.ForgotPasswordOtp_OTP}>
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
      <div className={styles.ForgotPasswordOtp_Button}>
        <Button onClick={() => login_Mode_Handler("ResetPassword")}>
          Get Started
        </Button>
      </div>
      <div className={styles.ForgotPasswordOtp_Bottom}>
        <Link>
          Didn't receive code? <b>Resend code</b>
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordOtp;
