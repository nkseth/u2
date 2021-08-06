import {PureComponent} from 'react';
import { Row, Col,Button,Image } from 'antd';
import { Formik, Form, Field } from 'formik';
import {generateForm} from "../../utils/formgenerator"
import {Buttons} from "../../utils/buttons"
import Google from '../../images/icons/Icon.png';
import Facebook from '../../images/icons/fb.png';
import * as Yup from 'yup';
import {OtpSchema} from '../../utils/ValidationSchema'
import sideimg from '../../images/otp/sideimg.png'
import OtpVerification from '../../Component/OtpVerification/OtpVerification.container'
import '../SinghUp/singhup.css'
import './otp.css'

class Otp extends PureComponent {

  handleFormSubmission(event){
    console.log(event)
  }

  render() {
    const{singDetails,isChange,changeMobileNumber} = this.props
    
    const formField = [
        {
          label: 'Mobile Number',
          name: 'mobile',
          type: 'text',
          isdisable:!isChange ? true:false
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
        <div className="overlap-group_singup_otp">
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
              onSubmit={((event)=>{this.handleFormSubmission(event)})}
              validationSchema={OtpSchema}
              // innerRef={innerForm}
            >
              {({ errors, touched }) => (
                <Form className="login__form" >
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {generateForm(formField,errors)}  
                    <a onClick={(()=>changeMobileNumber())} className="changeMobile">Change</a>    
                  </Row>
                  <Row>
                      <Col xs={24} xl={24} className="otpText mt-5">
                         <span>Please enter the OTP sent to mobile number </span>
                      </Col>
                  </Row> 
                  
                </Form>
              )}
            </Formik>
            <OtpVerification/>  
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

export default Otp;
