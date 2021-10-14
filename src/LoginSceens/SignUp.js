import React, { useEffect, useState } from "react";
import styles from "./style/SignUp.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import GoogleIcon from "../Images/login/google.svg";
import FacebookIcon from "../Images/login/facebook.svg";
import useLogin from "./useLogin";
import common_axios from "../utils/axios.config";
import { useSelector, useDispatch } from "react-redux";
import { setSignupCreds } from "../Redux/actions/homepage";
import { clearAuth, registerUser } from "../Redux/actions/auth";
///

///
const SignUp = () => {
  const { login_Mode_Handler, loginMode } = useLogin();
  // const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const { signup_creds } = useSelector((state) => state.root.login);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.root.registerUser);
  useEffect(() => {
    if (message) {
      setLoading(false);
      alert("Check your email for OTP");
      login_Mode_Handler("SignUpVarify");
      dispatch(clearAuth());
    }
    if (error) {
      setLoading(false);
      alert("Something went wrong. Pls try again.");
      dispatch(clearAuth());
    }
  }, [dispatch, message, error]);

  const getStarted = async (e) => {
    e.preventDefault();
    localStorage.setItem("OTPemail", "vishal111@gmail.com");
    return login_Mode_Handler("SignUpVarify");
    // const email_regex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    const email_regex = /\S+@\S+\.\S+/;
    const password_regex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );

    const checkEmail = email_regex.test(String(email).toLowerCase());
    const matchPassword = password.match(password_regex);
    if (name === "") return alert("Name is required.");
    if (email === "") return alert("Email is required.");
    if (!checkEmail) return alert("Invalid Email.");
    if (contact === "") return alert("Phone number is required.");
    if (contact.length !== 10) return alert("Invalid Phone number.");
    if (!matchPassword)
      return alert(`Password must have min length 8 and have one of each:-\n
   Upper Case,
   Lower Case,
   Number,
   Special Character.`);
    if (password === "") return alert("Please enter password");
    if (confirmPassword === "") return alert("Confirm your password");
    if (password !== confirmPassword)
      return alert("Password and confirm password don't match");

    // if (signup_creds.name && signup_creds.name?.length < 2) {
    //   alert("Invalid Name");
    //   setError({ type: "name", value: "Invalid Name" });
    //   return;
    // }

    // if (signup_creds.email && email_regex.test(signup_creds.email) === false) {
    //   alert("Invalid Email");
    //   setError({ type: "email", value: "Invalid Email" });
    //   return;
    // }

    // if (signup_creds.phone_no && signup_creds.phone_no?.length !== 10) {
    //   alert("Invalid Phone Number");
    //   setError({ type: "phone_no", value: "Invalid Phone Number" });
    //   return;
    // }

    // if (signup_creds.password && signup_creds.password?.length < 6) {
    //   alert("Invalid Password");
    //   setError({ type: "password", value: "Invalid Password" });
    //   return;
    // }

    setLoading(true);

    const userCreds = {
      name: name,
      email: email,
      phone_no: contact,
      password: password,
    };
    dispatch(registerUser(userCreds));
    // try {
    //   const { data } = await common_axios.post("/auth/register", {
    //     name: name,
    //     email: email,
    //     phone_no: contact,
    //     password: password,
    //     // name: signup_creds.name,
    //     // email: signup_creds.email,
    //     // phone_no: signup_creds.phone_no,
    //     // password: signup_creds.password,
    //   });

    //   setLoading(false);

    //   if (data) {
    //     login_Mode_Handler("SignUpVarify");
    //   }
    // } catch (e) {
    //   setError("Email or Phone number already exists.");
    //   alert("Email or Phone number already exists.");
    //   console.log(e);
    // }
  };

  return (
    <form className={styles.SignUp}>
      <div className={styles.SignUp_Link}>
        <span
          style={
            loginMode === "SignUp"
              ? { color: "#000", fontWeight: "bold", cursor: "pointer" }
              : { color: "#666", cursor: "pointer" }
          }
          onClick={() => login_Mode_Handler("SignUp")}
        >
          SignUp
        </span>
        <span
          style={
            loginMode === "Login"
              ? { color: "#000", fontWeight: "bold", cursor: "pointer" }
              : { color: "#666", cursor: "pointer" }
          }
          onClick={() => login_Mode_Handler("Login")}
        >
          Login
        </span>
      </div>
      <div className={styles.SignUp_Input}>
        <label>Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          // value={signup_creds.name}
          // onChange={(e) =>
          //   dispatch(setSignupCreds({ ...signup_creds, name: e.target.value }))
          // }
          type="text"
          placeholder="Enter Full name"
        />
      </div>
      <div className={styles.SignUp_Input}>
        <label>Email Id</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // value={signup_creds.email}
          // onChange={(e) =>
          //   dispatch(setSignupCreds({ ...signup_creds, email: e.target.value }))
          // }
          type="email"
          placeholder="Enter Email Id"
        />
      </div>
      <div className={styles.SignUp_Input}>
        <label>Phone Number</label>
        <input
          maxLength={10}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          // value={signup_creds.phone_no}
          // onChange={(e) =>
          //   dispatch(
          //     setSignupCreds({ ...signup_creds, phone_no: e.target.value })
          //   )
          // }
          type="number"
          placeholder="Enter your phone Number"
        />
      </div>
      <div className={styles.SignUp_Input}>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // value={signup_creds.password}
          // onChange={(e) =>
          //   dispatch(
          //     setSignupCreds({ ...signup_creds, password: e.target.value })
          //   )
          // }
          type="password"
          placeholder="Create your password"
        />
      </div>
      <div className={styles.SignUp_Input}>
        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Re-enter your password"
        />
      </div>
      <div className={styles.SignUp_Button}>
        <Button onClick={getStarted}>Get Started</Button>
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
        <Link onClick={() => login_Mode_Handler("Login")}>
          Already have an account?<b>Login</b>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
