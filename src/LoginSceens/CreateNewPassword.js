import React from "react";
import styles from "./style/CreateNewPassword.module.scss";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";

const CreateNewPassword = () => {
  const { login_Model_Hide, login_Mode_Handler } = useLogin();
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
        <Button className={styles.Create_Button} onClick={login_Model_Hide}>Reset Password</Button>
        <Button className={styles.GoBack_Button} onClick={() => login_Mode_Handler("ResetPassword")} type="submit">
          Go Back
        </Button>
      </div>
    </form>
  );
};

export default CreateNewPassword;
