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
        <h1>OTP Verification</h1>
        <p>
          Please enter the OTP sent to number +91987654321
          <b>
            <Link style={{ color: "#0000EE" }}>change</Link>
          </b>
        </p>
      </div>

      <div className={styles.ForgotPasswordOtp_OTP}>
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
      <div className={styles.ForgotPasswordOtp_Button}>
        <Button
          className={styles.GetBTN}
          onClick={() => login_Mode_Handler("EmailSent")}
        >
          Get Started
        </Button>
        <Button
          className={styles.GoBack_Button}
          onClick={() => login_Mode_Handler("ResetPassword")}
          type="submit"
        >
          Go Back
        </Button>
      </div>
      <div className={styles.ForgotPasswordOtp_Bottom}>
        <Link>
          Didn't receive code? <b style={{ color: "#0000EE" }}>Resend code</b>
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordOtp;
