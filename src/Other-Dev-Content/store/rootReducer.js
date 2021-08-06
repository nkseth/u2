import {combineReducers} from 'redux'
import SingUpReducer from './Singup/singh.reducer'
import PopupReducer from './popup/popup.reducer'
import OtpVerificationReducer from './otp/otpverify.reducer'

export default combineReducers({
    SingUpReducer,
    PopupReducer,
    OtpVerificationReducer
})