import { PureComponent } from "react";
import { Row, Col, Button, Image } from "antd";
import { Formik, Form, Field } from "formik";
import { generateForm } from "../../utils/formgenerator";
import { Buttons } from "../../utils/buttons";
import MailIcon from "../../images/forgetpass/Mail icon.png";
import LoginSide from "../../images/login/Mask Group.png";
import { CSSTransition } from "react-transition-group";
import {
  ForgetMobileSchema,
  ChanePasswordSchema,
} from "../../utils/ValidationSchema";
import LoginVerification from "../MobileLogin/MobileLogin.container";
import OtpVerificatin from "../../Component/OtpVerification/OtpVerification.container";

import "../SinghUp/singhup.css";
import "../Login/login.css";
import "./forgetpass.css";

class ForgetPassword extends PureComponent {
  renderMobilenOrEmailForm() {
    const { isLogin, renderSingupLoginButton, mobileLogin, requestOtp } =
      this.props;
    const formField = [
      {
        label: "Email id / Mobile Number",
        name: "emailORmobile",
        type: "text",
      },
    ];
    return (
      <div className="group-624 singup" id="singup">
        <Row>
          <Col span={12}>
            <img className="mask-group" src={LoginSide} />
          </Col>
          <Col span={12}>
            <div className="singup_overlap-group">
              <div className="group-622">
                <div className="group-623"></div>
                <div className="group-176 mb-4">
                  <h1 className="title dmserifdisplay-normal-cod-gray-34px">
                    Reset Password
                  </h1>
                  <p className="text-1 dmsans-normal-dove-gray-16px">
                    Enter your registered email and we’ll send you a password
                    reset link to it.
                  </p>
                </div>
                <div className="group-621">
                  <Formik
                    enableReinitialize={true}
                    initialValues={{
                      fullName: "",
                      email: "",
                      phone: "",
                      password: "",
                    }}
                    onSubmit={(event) => {
                      requestOtp(event);
                    }}
                    validationSchema={ForgetMobileSchema}
                  >
                    {({ errors, touched }) => (
                      <Form className="forget_form">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {generateForm(formField, errors)}
                        </Row>

                        <div className="getStart">
                          {Buttons({ type: "submit", name: "Request OTP" })}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  renderEnterOtp() {
    return (
      <div className="group-624 singup" id="singup">
        <Row>
          <Col span={12}>
            <img className="mask-group" src={LoginSide} />
          </Col>
          <Col span={12}>
            <div className="singup_overlap-group">
              <div className="group-622">
                <div className="group-623"></div>
                <div className="group-176 mb-4">
                  <h1 className="title dmserifdisplay-normal-cod-gray-34px">
                    OTP Verification
                  </h1>
                  <p className="text-1 dmsans-normal-dove-gray-16px">
                    Please enter the OTP sent to number 9876543210.
                  </p>
                  <OtpVerificatin module={"forget"} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  renderEmailVerfication() {
    const { skipEmailVerification } = this.props;
    return (
      <div className="group-624 singup" id="singup">
        <Row>
          <Col span={12}>
            <img className="mask-group" src={LoginSide} />
          </Col>
          <Col span={12}>
            <div className="singup_overlap-group">
              <div className="group-622 emailsection">
                <div className="group-623"></div>
                <Row>
                  <Col span={24} className="text-center">
                    <img src={MailIcon} />
                  </Col>
                </Row>
                <div className="group-176 mb-4 text-center">
                  <h1 className="title dmserifdisplay-normal-cod-gray-34px text-center">
                    Email sent
                  </h1>
                  <p className="text-1 dmsans-normal-dove-gray-16px">
                    We have sent an email with password reset link to
                    e******@example.com
                  </p>
                  <a onClick={() => skipEmailVerification()} className="skip">
                    I’ll confirm later
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  renderPasswordChange() {
    const { changePassword } = this.props;
    const formField = [
      {
        label: "Password",
        name: "password",
        type: "password",
      },

      {
        label: "Confirm Password",
        name: "changepassword",
        type: "password",
      },
    ];
    return (
      <div className="group-624 singup" id="singup">
        <Row>
          <Col span={12}>
            <img className="mask-group" src={LoginSide} />
          </Col>
          <Col span={12}>
            <div className="singup_overlap-group">
              <div className="group-622">
                <div className="group-623"></div>
                <div className="group-176 mb-4">
                  <h1 className="title dmserifdisplay-normal-cod-gray-34px">
                    Create new password
                  </h1>
                  <p className="text-1 dmsans-normal-dove-gray-16px">
                    Your new password must be different from previous used
                    passwords.
                  </p>
                </div>
                <div className="group-621">
                  <Formik
                    enableReinitialize={true}
                    initialValues={{
                      fullName: "",
                      email: "",
                      phone: "",
                      password: "",
                    }}
                    onSubmit={(event) => {
                      changePassword(event);
                    }}
                    validationSchema={ChanePasswordSchema}
                    // innerRef={innerForm}
                  >
                    {({ errors, touched }) => (
                      <Form className="forget_form">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {generateForm(formField, errors)}
                        </Row>

                        <div className="getStart">
                          {Buttons({ type: "submit", name: "Reset Password" })}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const {
      isOtp,
      isMobileOrEmail,
      isChangePassword,
      verificationStatus,
      verificationModule,
    } = this.props;
    return (
      <>
        <div>
          {isOtp ? this.renderEnterOtp() : ""}
          {isMobileOrEmail ? this.renderMobilenOrEmailForm() : ""}
          {verificationStatus && !isChangePassword
            ? this.renderEmailVerfication()
            : ""}
          {isChangePassword ? this.renderPasswordChange() : ""}
        </div>

        {/* LoginWithMobile */}
      </>
    );
  }
}

export default ForgetPassword;
