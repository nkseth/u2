import React, { useState, useEffect } from "react";
import styles from "./style/SignUpVarify.module.scss";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";
import { useSelector, useDispatch } from "react-redux";
import common_axios from "../utils/axios.config";
import { setUserData } from "../Redux/actions/homepage";
import { useCookies } from 'react-cookie';
/**
 * 
OtpInput not work properly
 */
const SignUpVarify = () => {

  const { login_Model_Hide , login_Mode_Handler,} = useLogin();
  const [cookies, setCookie] = useCookies(['user']);
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [editPhone, setEditPhone] = useState('')
  const { name, password, email, phone_no } = useSelector(state => state.root.login.signup_creds)

  useEffect(()=> {
    setEditPhone(phone_no)
  },[phone_no])

  const getStarted = async () => {
    if (text.length !== 4) {
      alert('Enter a valid OTP');
      return;
    }

    try {
      const { data } = await common_axios.post('/auth/otp_varify', {
        email,
        password,
        name,
        otp: text
      });

      console.log(data)

      if (data.data) {
        setCookie('data', data.data, { path: '/' })
        localStorage.setItem('token', JSON.stringify(data.data.api_token))
        dispatch(setUserData(data.data))
        login_Model_Hide()
      }
    } catch (e) {
      alert('Invalid OTP')
    }
  }

  const resend = async () => {
    try {
      const { data } = await common_axios.post('/auth/reSendOtp', {
        phone_no
      });

      console.log(data)

      if (data) {
        alert('OTP sent successfully.')
      }
    } catch (e) {
      alert('Unable to resend otp')
    }
  }


  return (
    <form className={styles.SignUpVarify}>
      <div className={styles.SignUpVarify_Input}>
        <label>Mobile Number</label>
        <input value={editPhone} onChange={(e)=> setEditPhone(e.target.value)} type="text" placeholder="Mobile Number" />
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
          onChange={(event) => setText(event)}
          separator={<span>{"  "}</span>}
          isInputNum={true}
          value={text}
          name="otp"
        />
      </div>
      <div className={styles.SignUpVarify_Button}>
        <Button onClick={getStarted}>Get Started</Button>
      </div>
      <div className={styles.SignUpVarify_Bottom_Link_1}>
        <Link onClick={resend}>
          Didn't receive code? <b style={{ color: '#0000EE' }}>Resend code</b>
        </Link>
      </div>
      <div className={styles.SignUpVarify_Bottom_Link_2}>
        <Link onClick={()=> login_Mode_Handler("Login")}>
          Already have an account? <b>Login</b>
        </Link>
      </div>
    </form>
  );
};

export default SignUpVarify;
