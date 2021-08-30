import React, { useState } from "react";
import styles from "./style/SignUp.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import GoogleIcon from "../Images/login/google.svg";
import FacebookIcon from "../Images/login/facebook.svg";
import useLogin from "./useLogin";
import common_axios from "../utils/axios.config";
import { useSelector, useDispatch } from "react-redux";
import { setSignupCreds } from "../Redux/actions/homepage";

///

///
const SignUp = () => {

  const { login_Mode_Handler, loginMode } = useLogin();
  const [error, setError] = useState({ })
  const [loading, setLoading] = useState(false)
  const { signup_creds } = useSelector( state => state.root.login)
  const dispatch = useDispatch()

  console.log(signup_creds)

  const getStarted = async () => {

    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (signup_creds.name && signup_creds.name?.length < 2) {
      alert('Invalid Name')
      setError({ type: 'name', value: "Invalid Name" });
      return;
    }

    if (signup_creds.name && email_regex.test(signup_creds.email) === false) {
      alert('Invalid Email')
      setError({ type: 'email', value: "Invalid Email" })
      return;
    }

    if (signup_creds.name && signup_creds.phone_no?.length !== 10) {
      alert('Invalid Phone Number')
      setError({ type: 'phone_no', value: "Invalid Phone Number" })
      return;
    }

    if ( signup_creds.name && signup_creds.password?.length < 6) {
      alert('Invalid Password')
      setError({ type: 'password', value: "Invalid Password" })
      return;
    }

    setLoading(true)

    try{
      const { data } = await common_axios.post('/auth/register', {
        name: signup_creds.name,
        email: signup_creds.email,
        phone_no: signup_creds.phone_no,
        password: signup_creds.password
      })

      setLoading(false)

      if(data){
        login_Mode_Handler("SignUpVarify")
      }
    } catch (e){
      setError('Email or Phone number already exists.')
      alert('Email or Phone number already exists.')
      console.log(e)
    }
  }


  return (
    <form className={styles.SignUp}>
      <div className={styles.SignUp_Link}>
        <a
          style={{ color: loginMode === "SignUp" ? "#000" : "#666" }}
          onClick={() => login_Mode_Handler("SignUp")}
        >
          SignUp
        </a>
        <a
          style={{ color: loginMode === "Login" ? "#000" : "#666" }}
          onClick={() => login_Mode_Handler("Login")}
        >
          Login
        </a>
      </div>
      <div className={styles.SignUp_Input}>
        <label>Full name</label>
        <input value={signup_creds.name} 
        onChange={(e) => dispatch(setSignupCreds({...signup_creds, name:e.target.value}))} type="text" placeholder="Full name" />
      </div>{" "}
      <div className={styles.SignUp_Input}>
        <label>Email Id</label>
        <input value={signup_creds.email} onChange={(e) => dispatch(setSignupCreds({...signup_creds, email:e.target.value}))} type="text" placeholder="Email Id" />
      </div>{" "}
      <div className={styles.SignUp_Input}>
        <label>Phone Number</label>
        <input maxLength={10} value={signup_creds.phone_no} onChange={(e) => dispatch(setSignupCreds({...signup_creds, phone_no:e.target.value}))} type="text" placeholder="Enter your phone Number" />
      </div>{" "}
      <div className={styles.SignUp_Input}>
        <label>Password</label>
        <input value={signup_creds.password} onChange={(e) => dispatch(setSignupCreds({...signup_creds, password:e.target.value}))} type="password" placeholder="Create your password" />
      </div>
      <div className={styles.SignUp_Button}>
        <Button onClick={() => getStarted()}>
          Get Started
        </Button>
      </div>
      <div className={styles.SignUp_Social}>
        <Button>
          <img src={GoogleIcon} alt="GoogleIcon" />
          Google
        </Button>
        <Button>
          <img src={FacebookIcon} alt="FacebookIcon" />
          Facebook
        </Button>
      </div>
      <div className={styles.SignUp_Bottom}>
        <Link>
          Already have an account?<b>Login</b>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
