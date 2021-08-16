import React from "react";
import styles from "./style/Login.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import GoogleIcon from "../Images/login/google.svg";
import {useMediaQuery} from '@material-ui/core'
import FacebookIcon from "../Images/login/facebook.svg";
import { useTheme } from '@material-ui/core/styles';
import useLogin from "./useLogin";
const Login = () => {
  const { login_Mode_Handler, loginMode } = useLogin();
  const theme=useTheme()
  const match=useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.Screen_Login}>
      <div className={styles.Screen_Login_Link}>
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
      <div className={styles.Screen_Login_Title}>
        <h1>Welcome Back!</h1>
        <p>Get access to your order, wishlist and recommendations</p>
      </div>
      <div className={styles.Screen_Login_Input}>
        <label>Email Id/Phone Number</label>
        <input type="text" placeholder="Email Id/Phone Number" />
      </div>
      <div className={styles.Screen_Login_Input}>
        <label>Password</label>
        <input type="password" placeholder="password" />
        <span>
          <Link onClick={() => login_Mode_Handler("ForgotPasswordOtp")}>
            Forgot password
          </Link>
        </span>
      </div>
      <div className={styles.Screen_Login_Button}>
        <Button onClick={() => login_Mode_Handler("LoginOtpVarify")}>
          Login
        </Button>
      </div>
      <div className={styles.Screen_Login_Line}>
        <span>OR</span>
      </div>
      {
        match?null:<div className={styles.Screen_Login_Button}>
        <Button>Login with Mobile Number</Button>
      </div>
      }
      
      <div className={styles.Screen_Login_Social}>
        <Button>
          <img src={GoogleIcon} alt="GoogleIcon" />
          Google
        </Button>
        <Button>
          <img src={FacebookIcon} alt="FacebookIcon" />
          Facebook
        </Button>
      </div>
      <div className={styles.Screen_Login_Bottom}>
        <Link>
          Already have an account?<b>Login</b>
        </Link>
      </div>
    </form>
  );
};

export default Login;
