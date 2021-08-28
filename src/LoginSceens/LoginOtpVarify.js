import React, { useState } from "react";
import styles from "./style/LoginOtpVarify.module.scss";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";
import { useSelector, useDispatch } from "react-redux";
import common_axios from "../utils/axios.config";
import { setUserData } from "../Redux/actions/homepage";

/*
OtpInput not work properly
 */
const LoginOtpVarify = () => {

  const dispatch = useDispatch()

  const { login_Model_Hide } = useLogin();
  const [text, setText] = useState('')
  const { name, password, email } = useSelector(state => state.root.login.login_creds)

  const getStarted = async () => {
    if (text.length !== 4) {
      alert('Enter a valid OTP');
      return;
    }


    const { data } = await common_axios.post('/auth/otp_varify', {
      email:'customer@demo.com',
      password:'123456',
      otp: text
    });

    if(data){
      //if(data.success){
        localStorage.setItem('user', JSON.stringify(data.data))
        dispatch(setUserData(data.data))
        login_Model_Hide()
      //}
    }
  }


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
          onChange={(event) => setText(event)}
          separator={<span>{"  "}</span>}
          isInputNum={true}
          value={text}
          name="otp"
        />
      </div>
      <div className={styles.LoginOtpVarify_Button}>
        <Button onClick={getStarted}>Get Started</Button>
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
