import React, { useState } from "react";
import styles from "./style/ResetPassword.module.scss";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import { withStyles } from "@material-ui/core/styles";
import { Button, Radio, IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import common_axios from "../utils/axios.config";
import { useDispatch } from "react-redux";
import { setForgotData } from "../Redux/actions/auth";

const CustomRadio = withStyles({
  root: {
    color: "#9D9D9D",
    margin: 0,
    "&$checked": {
      color: "#857250",
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);


const ResetPassword = () => {


  const dispatch = useDispatch();
  const [type, setType] = useState('email')
  const [value, setValue] = useState('')

  const { login_Mode_Handler } = useLogin();

  const handlePress = async () => {

    const email_regex = /\S+@\S+\.\S+/;

    if (type == 'email' && email_regex.test(value) == false) {
      alert("Enter a valid email");
      return;
    }

    if (type == "phone" && value.length != 10) {
      alert("Enter a valid 10 digit mobile number");
      return;
    }

    try {
      const params = type == 'email' ? { slug: "email", email: value } : { slug: "phone_no", phone_no: value }

      const { data } = await common_axios.post('/auth/forgot', params)
      const verify_type = type == 'phone' ? "ForgotPasswordOtp" : "ForgotPasswordOtp"
      dispatch(setForgotData({type, value}))
      login_Mode_Handler(verify_type)
    } catch (e) {
      alert(e?.response?.data?.message)
      console.log(e)
    }
  }

  return (
    <form className={styles.ResetPassword}>
      <div className={styles.ResetPassword_Title}>
        <h1 style={{ marginBottom: '1rem' }}>Reset Password</h1>
        <p>
          Enter your registered email we'll send you a password reset link to it.
        </p>
      </div>
      <div className={styles.ChoicesDiv}>
        <p>Request Password Reset Link/OTP via</p>
        <div className={styles.HoriChoicesDiv}>
          <div className={styles.Radio} >
            <CustomRadio
              size='small'
              checked={type === 'email'}
              onClick={() => setType('email')}
            />
            <h3>Email</h3>
          </div>
          <div className={styles.Radio} >
            <CustomRadio
              size='small'
              checked={type === 'phone'}
              onClick={() => setType('phone')}
            />
            <h3>Phone Number</h3>
          </div>
        </div>
      </div>
      <div className={styles.ResetPassword_Input}>
        <label>{type === 'email' ? 'Enter Registered Email Id' : "Enter Registered Phone number"}</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type === 'email' ? 'email' : "number"}
          placeholder={type === 'email' ? 'Enter Email Id' : "Enter Phone number"}
        />
      </div>
      <div className={styles.ResetPassword_Button}>
        <Button className={styles.ResetPassword_Button_Button} onClick={() => handlePress()}>
          {type === 'email' ? 'Request Link' : "Request OTP"}
        </Button>
        <Button className={styles.GoBack_Button} onClick={() => login_Mode_Handler("Login")} type="submit">
          Go Back
        </Button>
      </div>
    </form>
  );
};

export default ResetPassword;
