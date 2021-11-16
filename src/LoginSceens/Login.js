import React, { useEffect, useState } from "react";
import styles from "./style/Login.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import GoogleIcon from "../Images/login/google.svg";
import { useMediaQuery } from "@material-ui/core";
import FacebookIcon from "../Images/login/facebook.svg";
import { useTheme } from "@material-ui/core/styles";
import useLogin from "./useLogin";
import common_axios from "../utils/axios.config";
import { useSelector, useDispatch } from "react-redux";
import { setLoginCreds, setUserData } from "../Redux/actions/homepage";
import { useCookies } from "react-cookie";
import { login, socialLogin } from "../Redux/actions/auth";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Login = () => {
  const { login_Mode_Handler, loginMode, login_Model_Hide } = useLogin();
  const dispatch = useDispatch();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const { login_creds } = useSelector((state) => state.root.login);
  const { isAuthenticated } = useSelector((state) => state.root.auth);

  const { email, password } = login_creds;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    if (isAuthenticated) login_Model_Hide();
  }, [isAuthenticated]);

  const login_handler = async () => {
    if (email?.length === 0) {
      alert("Enter a valid email");
      setError({ type: "email", value: "Enter a valid email" });
      return;
    }

    if (password?.length < 6) {
      alert("Enter a valid password");
      setError({ type: "password", value: "Enter a valid password" });
      return;
    }

    setLoading(true);
    dispatch(login({ email, password }));
  };

  const signup = (response, type) => {
    
    setLoading(true);
    let postData;
    if(type == 'facebook' && response.email) {
      console.log('response.accessToken facebook', response.accessToken);
      postData = {
        'access_token' : response.accessToken
      }
      dispatch(socialLogin(postData, 'facebook'));
    }

    if(type == 'google' && response.profileObj.email) {
      console.log('response.accessToken google', response.accessToken)
      postData = {
        'access_token' : response.accessToken
      }
      dispatch(socialLogin(postData, 'google'));
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
    signup(response, 'facebook');
  }

  const responseGoogle = (response) => {
    console.log(response);
    signup(response, 'google');
  }

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
        <input
          value={email}
          onChange={(e) =>
            dispatch(setLoginCreds({ ...login_creds, email: e.target.value }))
          }
          type="text"
          placeholder="Email Id/Phone Number"
        />
      </div>
      <div className={styles.Screen_Login_Input}>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) =>
            dispatch(
              setLoginCreds({ ...login_creds, password: e.target.value })
            )
          }
          type="password"
          placeholder="password"
        />
        <span>
          <Link onClick={() => login_Mode_Handler("ResetPassword")}>
            Forgot password
          </Link>
        </span>
      </div>
      <div className={styles.Screen_Login_Button}>
        <Button onClick={() => login_handler()}>Login</Button>
      </div>
      <div className={styles.Screen_Login_Line}>
        <span>OR</span>
      </div>
      {match ? null : (
        <div className={styles.Screen_Login_Button}>
          <Button>Login with Mobile Number</Button>
        </div>
      )}

      <div className={styles.Screen_Login_Social}>
        
          <GoogleLogin
            clientId="162602749574-8tmi3mu59fsopou0fgfrdmn2uqvqpab3.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img src={GoogleIcon} alt="GoogleIcon" /> </Button>
            )}
            buttonText="Login"
        />
        
          <FacebookLogin
            appId="2888475091369881"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            textButton=""
            icon="fa-facebook"
            render={renderProps => (
              <Button onClick={renderProps.onClick}>
                <img src={FacebookIcon} alt="FacebookIcon" /></Button>
            )}
          />
          
        
      </div>
      <div className={styles.Screen_Login_Bottom}>
        <Link onClick={() => login_Mode_Handler("SignUp")}>
          New user?<b>Sign Up</b>
        </Link>
      </div>
    </form>
  );
};

export default Login;
