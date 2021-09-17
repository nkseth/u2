import { PureComponent } from 'react';
import { Row, Col, Button, Image } from 'antd';
import { Formik, Form, Field } from 'formik';
import { generateForm } from "../../utils/formgenerator"
import { Buttons } from "../../utils/buttons"
import { OtpSchema } from '../../utils/ValidationSchema'
import sideimg from '../../images/login/otp.png'
import OtpVerification from '../OtpVerification/OtpVerification.container'
import '../SinghUp/singhup.css'
import './loginverify.css'

class LoginVerification extends PureComponent {

  render() {
    const { singDetails, isChange, changeMobileNumber } = this.props

    const formField = [
      {
        label: 'Mobile Number',
        name: 'mobile',
        type: 'text',
        isdisable: false
      }
    ];

    return (
      <div className="group-624 singup otp" >
        <Row>
          <Col span={12}>
            <img
              className="mask-group"
              src={sideimg}
            />
          </Col>
          <Col span={12}>
            <div className="overlap-group">
              <div className="group-622">
                <div className="group-621">
                  <Formik
                    enableReinitialize={true}
                    initialValues={
                      {
                        mobile: singDetails.phone,
                        otp: '',
                      }
                    }
                    onSubmit={((event) => { this.handleFormSubmission(event) })}
                    validationSchema={OtpSchema}
                  // innerRef={innerForm}
                  >
                    {({ errors, touched }) => (
                      <Form className="login__form" >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {generateForm(formField, errors)}
                          <a onClick={(() => changeMobileNumber())} className="changeloginMobile">Change</a>
                        </Row>

                        <div className="getStart mt-3">
                          {Buttons({ type: 'submit', name: 'Send Otp' })}
                        </div>
                        <Row>
                          <Col xs={24} xl={24} className="otpText mt-5">
                            <span>Please enter the OTP sent to mobile number </span>
                          </Col>
                        </Row>

                      </Form>
                    )}
                  </Formik>
                  <OtpVerification />
                </div>

                <p className="subtext valign-text-middle dmsans-normal-slate-gray-14px">
                  <span>
                    <span className="span dmsans-normal-slate-gray-14px">Already have an account? </span>
                    <span className="span dmsans-bold-slate-gray-14px">Login</span>
                  </span>
                </p>
              </div>
            </div>

          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginVerification;
