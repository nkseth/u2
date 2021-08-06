import   {
    TOGGLE_POPUP
} from './popup.action.js'

export const initialState = {
    isOpen:false,
}

export const PopupReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case TOGGLE_POPUP:        
            return {
                    ...state ,
                    isOpen:action.status
                }
        // case SIGNUP_STATUS:
        //     return {
        //             ...state,
        //             signupStatus:action.status,
        //             userIdStatus:false,
        //             otpStatus:false,
        //             forgotPassword:false,
        //         }
        // case USERID_STATUS:
        //     return {
        //         ...state,
        //             userIdStatus:action.status,
        //             signupStatus:false,
        //             otpStatus:false,
        //             forgotPassword:false,
        //         }
        // case OTP_STATUS:
        //     return {
        //         ...state,
        //         otpStatus:action.status,
        //         signupStatus:false,
        //         userIdStatus:false,
        //         forgotPassword:false,
        //         singupFormData:action.singupFormData
        //     }
        
        // case FORGOT_PASSWORD:
        //     return {
        //         ...state,
        //         forgotPassword:action.status,
        //         otpStatus:false,
        //         signupStatus:false,
        //         userIdStatus:false,
        //     }


        // case SAVE_LOGUSER_DETAILS:
        //     return{
        //         ...state,
        //         userDetails:action.userDetails
        //     }

        // case SAVE_USERNAME:
        //     saveUsername(state,action.username)
        //     // var forgotPasswordDetails['username'] = action.username
        //     return{
        //         ...state               
        //     } 

        // case SAVE_OTP:
        //     saveOtp(state,action.otp)
        //     // var forgotPasswordDetails['username'] = action.username
        //     return{
        //         ...state               
        //     } 

        default:
            return state
    }
}

export default PopupReducer;
