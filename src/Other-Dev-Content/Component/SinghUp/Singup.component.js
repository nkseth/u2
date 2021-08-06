import {PureComponent} from 'react';
import { Row, Col,Button,Image } from 'antd';
import { Formik, Form, Field } from 'formik';
import {generateForm} from "../../utils/formgenerator"
import {Buttons} from "../../utils/buttons"
import Google from '../../images/icons/Icon.png';
import Facebook from '../../images/icons/fb.png';
import {SignupSchema} from '../../utils/ValidationSchema'
import PropTypes from 'prop-types';
import Otp from '../OtpSingup/Otpsingup.container'
import Login from '../Login/Login.container'

import './singhup.css'

class Singup extends PureComponent {
  static propTypes = {
    getStart:PropTypes.func.isRequired
}  

  renderSingupLoginButton(){
    const{isLogin,loginStatus} = this.props
    return <>
              <div className="signup dmsans-bold-cod-gray-16px"><a onClick={(()=>loginStatus(false))} className={!isLogin ? 'active':''}>Signup</a></div>
              <div className="login dmsans-normal-cod-gray-16px"><a onClick={(()=>loginStatus(true))} className={isLogin ? 'active':''}>Login</a></div>
            </>
  }

  renderSingupForm() {
    const{getStart,isLogin} = this.props
    const formField = [
      {
        label: 'Full Name',
        name: 'fullName',
        type: 'text',
      },
      {
        label: 'Email',
        name: 'email',
        type: 'text',
      },
      {
        label: 'Phone no.',
        name: 'phone',
        type: 'text',
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
      },
    ];
    return (
      <div className="group-624 singup" id="">
        <Row>
          <Col span={12}>
            <img
              className="mask-group"
              src="https://anima-uploads.s3.amazonaws.com/projects/60a8e4bb63b3840740d1ac98/releases/60ac8342a33100c95e0676ce/img/mask-group-1@1x.png"
            />
          </Col>
         <Col span={12}> 
        <div className="singup_overlap-group">
          <div className="group-622">
            <div className="group-623">
              {this.renderSingupLoginButton()}    
            </div>
            <div className="group-176">
              <h1 className="title dmserifdisplay-normal-cod-gray-34px">Welcome!</h1>
              <p className="text-1 dmsans-normal-dove-gray-16px">Create a new account or log in to get started.</p>
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
              onSubmit={((event)=>{getStart(event)})}
              validationSchema={SignupSchema}
              // innerRef={innerForm}
            >
              {({ errors, touched }) => (
                <Form className="login__form" >
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {generateForm(formField,errors)}
                    
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
              
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="loginwith">
                  <Button>  
                    <img src={Google} className="googleImg"/><span>Google</span>
                    </Button>
                </Col>
                <Col span={12} className="loginwithface">
                  <Button> <img src={Facebook} className="googleImg"/><span>Facebook</span></Button>
                </Col>
              </Row>
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

  render(){
    const {otpStatus,isLogin} = this.props
    return(<>
              { !isLogin ?
              <div>
                {!otpStatus ? this.renderSingupForm():<Otp/>}
              </div>
              :<Login isLogin = {isLogin}  renderSingupLoginButton ={this.renderSingupLoginButton.bind(this)} />}  
          </>
    )
  }
}

export default Singup;
