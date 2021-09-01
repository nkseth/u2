import React from "react";
import styles from "./style/ResetPassword.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";
const ResetPassword = () => {
  const { login_Mode_Handler } = useLogin();
  return (
    <form className={styles.ResetPassword}>
      <div className={styles.ResetPassword_Title}>
        <h1 style={{marginBottom:'1rem'}}>Reset Password</h1>
        <p>
          Enter your registered email we'll send you a password reset link to
          it.
        </p>
      </div>
      <div className={styles.ResetPassword_Input}>
        <label>Email Id/Phone Number</label>
        <input type="text" placeholder="Email Id/Phone Number" />
      </div>
      <div className={styles.ResetPassword_Button}>
        <Button onClick={() => login_Mode_Handler("EmailSent")} type="submit">
          Request OTP
        </Button>
      </div>
    </form>
  );
};

export default ResetPassword;
