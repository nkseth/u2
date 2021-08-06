import React from "react";
import styles from "./style/SignUp.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import GoogleIcon from "../Images/login/google.svg";
import FacebookIcon from "../Images/login/facebook.svg";
import useLogin from "./useLogin";

///

///
const SignUp = () => {
  const { login_Mode_Handler, loginMode } = useLogin();

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
        <input type="text" placeholder="Full name" />
      </div>{" "}
      <div className={styles.SignUp_Input}>
        <label>Email Id</label>
        <input type="text" placeholder="Email Id" />
      </div>{" "}
      <div className={styles.SignUp_Input}>
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone Number" />
      </div>{" "}
      <div className={styles.SignUp_Input}>
        <label>Password</label>
        <input type="text" placeholder="Create your password" />
      </div>
      <div className={styles.SignUp_Button}>
        <Button onClick={() => login_Mode_Handler("SignUpVarify")}>
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
