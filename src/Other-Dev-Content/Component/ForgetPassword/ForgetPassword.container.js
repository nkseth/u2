import {PureComponent} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios'
import PropTypes from 'prop-types';
import ForgetPasswordComponent from "./ForgetPassword.component";
import {verfyOtp} from '../../store/otp/otpverify.actio';


const mapStateToProps = state => ({
    verificationStatus:state.OtpVerificationReducer.status,
    verificationModule:state.OtpVerificationReducer.module

})
const mapDispatchToProps = dispatch => ({
    verfyOtp: state => dispatch(verfyOtp(state)),
})

class ForgetPasswordContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired
    }

    state = {
        isChangePassword:false,
        isOtp:false,
        isMobileOrEmail:true,
        isEmail:false
    }

    mobileLogin(){
        this.setState({
            isMobileLogin:true,
        })
    }

    requestOtp(){
        this.setState({
            isOtp:true,
            isMobileOrEmail:false
        })
    }

    skipEmailVerification(){
       
        this.setState({
            isChangePassword:true,
            isOtp:false,
            isMobileOrEmail:true,
            isEmail:false
        })
    }    

    changePassword(){
        alert('done')
    }

    render(){
        
        const { 
            verificationStatus ,
            verificationModule
       } = this.props

        if(verificationStatus){
            this.setState({
                isOtp:false,
                isMobileOrEmail:false
            })
        }        

        return <ForgetPasswordComponent
                    {...this.props}
                    {...this.state}
                    mobileLogin = {this.mobileLogin.bind(this)}
                    requestOtp = {this.requestOtp.bind(this)}
                    changePassword={this.changePassword.bind(this)}
                    skipEmailVerification = {this.skipEmailVerification.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ForgetPasswordContainer);