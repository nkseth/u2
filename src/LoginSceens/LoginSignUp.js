import Login from "./Login";
import styles from "./style/Container.module.scss";
import Image from "../Images/login/MaskGroup.png";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import ResetPassword from "./ResetPassword";
import CreateNewPassword from "./CreateNewPassword";
import EmailSent from "./EmailSent";
import SignUp from "./SignUp";
import SignUpVarify from "./SignUpVarify";
import ForgotPasswordOtp from "./ForgotPasswordOtp";
import LoginOtpVarify from "./LoginOtpVarify";
import useLogin from "./useLogin";
import { Switch, Route } from "react-router-dom";

const Container = ({ children }) => {
  const { login_Model_Hide } = useLogin();
  return (
    <div className={styles.Container}>
      <div className={styles.OverLay} onClick={login_Model_Hide}  ></div>
      <div className={styles.Container_Box}>
        <div className={styles.Close_Button}>
          <IconButton onClick={login_Model_Hide}>
            <CloseRounded />
          </IconButton>
        </div>
        <div className={styles.Container_Image}>
          <img src={Image} alt="login" />
        </div>
        {children}
      </div>
    </div>
  );
};

const Page_Login = () => {
  const { loginMode } = useLogin();
  const Login_Mode = () => {
    switch (loginMode) {
      case "Login":
        return <Login />;
      case "LoginOtpVarify":
        return <LoginOtpVarify />;
      case "SignUp":
        return <SignUp />;
      case "SignUpVarify":
        return <SignUpVarify />;
      case "ForgotPasswordOtp":
        return <ForgotPasswordOtp />;
      case "ResetPassword":
        return <ResetPassword />;
      case "EmailSent":
        return <EmailSent />;
      case "CreateNewPassword":
        return <CreateNewPassword />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>{Login_Mode()}</Container>
    </>
  );
};

// const Page_LoginOtpVarify = () => {
//   return (
//     <>
//       <Container>
//         <LoginOtpVarify />
//       </Container>
//     </>
//   );
// };
// const Page_SignUp = () => {
//   return (
//     <>
//       <Container>
//         <SignUp />
//       </Container>
//     </>
//   );
// };
// const Page_SignUpVarify = () => {
//   return (
//     <>
//       <Container>
//         <SignUpVarify />
//       </Container>
//     </>
//   );
// };
// const Page_ForgotPasswordOtp = () => {
//   return (
//     <>
//       <Container>
//         <ForgotPasswordOtp />
//       </Container>
//     </>
//   );
// };
// const Page_ResetPassword = () => {
//   return (
//     <>
//       <Container>
//         <ResetPassword />
//       </Container>
//     </>
//   );
// };
// const Page_CreateNewPassword = () => {
//   return (
//     <>
//       <Container>
//         <CreateNewPassword />
//       </Container>
//     </>
//   );
// };
// const Page_EmailSent = () => {
//   return (
//     <>
//       <Container>
//         <EmailSent />
//       </Container>
//     </>
//   );
// };

export {
  Page_Login,
  // Page_LoginOtpVarify,
  // Page_SignUp,
  // Page_SignUpVarify,
  // Page_ResetPassword,
  // Page_ForgotPasswordOtp,
  // Page_EmailSent,
  // Page_CreateNewPassword,
};
