import React from "react";
import styles from "./style/CreateNewPassword.module.scss";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";

const CreateNewPassword = () => {
  const { login_Model_Hide } = useLogin();
  return (
    <form className={styles.CreateNewPassword}>
      <div className={styles.CreateNewPassword_Title}>
        <h1>Create New Password</h1>
        <p>Your new password must be different from old password</p>
      </div>{" "}
      <div className={styles.CreateNewPassword_Input}>
        <label>Password</label>
        <input type="password" placeholder="password" />
      </div>{" "}
      <div className={styles.CreateNewPassword_Input}>
        <label>Confirm Password</label>
        <input type="password" placeholder="password" />
      </div>{" "}
      <div className={styles.CreateNewPassword_Button}>
        <Button onClick={login_Model_Hide}>Reset Password</Button>
      </div>
    </form>
  );
};

export default CreateNewPassword;
