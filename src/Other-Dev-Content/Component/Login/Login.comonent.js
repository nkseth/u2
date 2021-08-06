import {PureComponent} from 'react';
import { Row, Col,Button,Image } from 'antd';
import { Formik, Form, Field } from 'formik';
import {generateForm} from "../../utils/formgenerator"
import {Buttons} from "../../utils/buttons"
import Google from '../../images/icons/Icon.png';
import Facebook from '../../images/icons/fb.png';
import LoginSide from '../../images/login/Mask Group.png';
import {LoginSchema} from '../../utils/ValidationSchema'
import MobileLogin from '../MobileLogin/MobileLogin.container'
import ForgetPassword from '../../Component/ForgetPassword/ForgetPassword.container'
import '../SinghUp/singhup.css'
import './login.css'

class Login extends PureComponent {
  
  renderLoginForm() {
    const {isLogin,
          renderSingupLoginButton,
          mobileLogin,
          forgetPassword} =this.props
    const formField = [
      {
        label: 'Email id / Mobile Number',
        name: 'emailORmobile',
        type: 'text',
      },
      
      {
        label: 'Password',
        name: 'password',
        type: 'password',
      },
    ];
    return (
      <div className="group-624 singup" id="singup">
        <Row>
          <Col span={12}>
            <img
              className="mask-group"
              src={LoginSide}
            />
          </Col>
         <Col span={12}> 
        <div className="singup_overlap-group">
          <div className="group-622">
            <div className="group-623">
              {renderSingupLoginButton()}
            </div>
            <div className="group-176">
              <h1 className="title dmserifdisplay-normal-cod-gray-34px">Welcome!</h1>
              <p className="text-1 dmsans-normal-dove-gray-16px">Get access to your order, wishlist and recommendations.</p>
            </div>
            <div className="group-621">
            <Formik
              enableReinitialize={true}
              initialValues={
                 {
                  fullName: '',
                  email: '',
                  phone: '',
                  password:''
                }
              }
              onSubmit={((event)=>{mobileLogin(event)})}
              validationSchema={LoginSchema}
              // innerRef={innerForm}
            >
              {({ errors, touched }) => (
                <Form className="login__form" >
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {generateForm(formField,errors)}
                    <Col xs={24} xl={24} className="text-right text-danger">
                        <a onClick={(()=>forgetPassword())} >Forget password</a>
                      </Col>
                  </Row>

                  <div className="getStart">
                    {Buttons({type:'submit',name:'Get started'})}
                  </div>
                </Form>
              )}
            </Formik>
              
          </div>
            <div className="group-620">
            <div className="or-1">
              <img className="line-1" src={'https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/line-1@2x.png'} />
              <div className="or dmsans-normal-dove-gray-14px">{'OR'}</div>
              <img className="line-2" src={'https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60a8e510a2473b1db35c5cb5/img/line-2@2x.png'} />
            </div>          
              <div className="mobileLogin">
                <a onClick={(()=>mobileLogin())}>
                  {Buttons({type:'submit',name:'Login With Mobile Number'})}
                </a>  
            </div>        
              
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="mb-2">
                <Col span={12} className="loginwith ">
                  <Button>  
                    <img src={Google} className="googleImg"/><span>Google</span>
                    </Button>
                </Col>
                <Col span={12} className="loginwithface">
                  <Button> <img src={Facebook} className="googleImg"/><span>Facebook</span></Button>
                </Col>
              </Row>
            </div>
            <p className="subtext valign-text-middle dmsans-normal-slate-gray-14px mt-2">
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

  render(){
    const{isMobileLogin,isForgetPassword} = this.props
    return(
          <>
            { !isForgetPassword ? 
            <div>
              {!isMobileLogin ? this.renderLoginForm():<MobileLogin/>}
            </div>
            :<ForgetPassword/>}
            {/* LoginWithMobile */}
          </>
    )
  }
}

export default Login;
