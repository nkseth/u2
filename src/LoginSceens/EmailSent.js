import React from "react";
import styles from "./style/EmailSent.module.scss";
import Mailicon from "../Images/login/Mailicon.png";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import { useSelector } from "react-redux";


const EmailSent = () => {
  const { login_Mode_Handler } = useLogin();
  const { forgot_data } = useSelector(state => state.root.main);

  return (
    <div className={styles.EmailSent_Login}>
      <div>
        <img src={Mailicon} alt="Mailicon" />
      </div>
      <div>
        <h2>Email sent</h2>
      </div>
      <div>
        <p>
          We have sent an email with password reset link to
          {forgot_data.value?.length > 0 ? " " + forgot_data.value : ' ex*******@example.com'}
        </p>
      </div>
      <div>
        <Link onClick={() => login_Mode_Handler("CreateNewPassword")}>
          I'll confirm later
        </Link>
      </div>
    </div>
  );
};

export default EmailSent;
