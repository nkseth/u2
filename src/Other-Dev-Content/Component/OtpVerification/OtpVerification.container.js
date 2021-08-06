import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OtpVerificationComponent from "./OtpVerificatin.component";
import {verfyOtp} from '../../store/otp/otpverify.actio';


const mapStateToProps = state => ({
    singDetails:state.SingUpReducer.singUpDetails
})
const mapDispatchToProps = dispatch => ({
    verfyOTP: state => dispatch(verfyOtp(state)),
})

class OtpVerificationContainer extends PureComponent{
    static propTypes = {
        isOpen:PropTypes.bool.isRequired,
        // singUpDetails:PropTypes.object.isRequired
    }

    state={
        otp:'',
        isCurrect:true
    }

    enterOtp(event){
        this.setState({
            otp:event
        })
    }

    verifyOtp(event){
     event.preventDefault()  
     const{module,verfyOTP} =this.props
     verfyOTP({status:true,module:module})
    }

    render(){
        return <OtpVerificationComponent
                    {...this.props}
                    {...this.state}
                    enterOtp = {this.enterOtp.bind(this)}
                    verifyOtp={this.verifyOtp.bind(this)}
                />
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OtpVerificationContainer);