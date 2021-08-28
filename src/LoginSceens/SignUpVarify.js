import React, { useState } from "react";
import styles from "./style/SignUpVarify.module.scss";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogin from "./useLogin";
import { useSelector } from "react-redux";
import common_axios from "../utils/axios.config";

/**
 * 
OtpInput not work properly
 */
const SignUpVarify = () => {

  const { login_Model_Hide } = useLogin();
  const [text, setText] = useState('')
  const { name, password, email } = useSelector(state => state.root.login.signup_creds)

  const getStarted = async () => {
    if (text.length !== 4) {
      alert('Enter a valid OTP');
      return;
    }

    const { data } = await common_axios.post('/otp_varify', {
      email,
      password,
      name,
      otp: text
    });

    console.log(data)

    if(data){
      if(data.success){
        login_Model_Hide()
      }
    }
  }


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
          onChange={(event) => setText(event.target.value)}
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
        <Link>
          Didn't receive code? <b style={{ color: '#0000EE' }}>Resend code</b>
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
