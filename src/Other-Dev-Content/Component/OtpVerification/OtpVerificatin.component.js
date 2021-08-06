import { PureComponent } from 'react'
import OtpInput from 'react-otp-input';
import { Row, Col,Button,Image } from 'antd';
import {Buttons} from "../../utils/buttons"
import './otpverification.css'

class OtpVerification extends PureComponent{
    
    render(){
        const {enterOtp,otp,verifyOtp} = this.props
        console.log(this.props)
        return(
                <>
                    <form class="otp_form" onSubmit={((event)=>verifyOtp(event))}>
                        <Row className="text-center">
                            <Col  xs={24} xl={4}>
                            </Col>
                            <Col  xs={24} xl={16} className="mt-4">
                                <OtpInput
                                    // numInputs={'numInputs'}
                                    // isDisabled={isDisabled}
                                    // hasErrored={hasErrored}
                                    errorStyle="error"
                                    onChange={((event)=>enterOtp(event))}
                                    separator={<span>{'  '}</span>}
                                    isInputNum={true}
                                    // isInputSecure={isInputSecure}
                                    shouldAutoFocus
                                    name='otp'
                                    value={otp}
                                    className={'digit-group'}
                                    />
                                    {/* <span className="text-danger mt-2">{errors.otp}</span> */}
                                </Col>
                                <Col  xs={24} xl={4}>
                            </Col>
                        </Row>
                        <div className="getStart mt-3">
                            {Buttons({type:'submit',name:'Login'})}
                        </div>
                    </form>    
                </>    
        );
    }
}

export default OtpVerification;