import {
    SAVE_SINGUP_DATA
} from "./singh.action"

export const initialState = {
    token:'',
    signupStatus : true,
    userIdStatus : false,
    otpStatus : false,
    forgotPassword:false,
    userDetails:{ },
    singUpDetails:{},
    forgotPasswordDetails:{
        username:'',
        opt:''
    }
}

export const SingUpReducer = (
    state = initialState,
    action
) => {

    switch (action.type) {

        case SAVE_SINGUP_DATA:
            return {...state ,
                singUpDetails:action.singUpDetails
            };
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

export default SingUpReducer;
