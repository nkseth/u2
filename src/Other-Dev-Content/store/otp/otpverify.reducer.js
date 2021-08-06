import   {
    VERIFY_OTP
} from './otpverify.actio'

export const initialState = {
    status:false,
    module:''
}

export const PopupReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case VERIFY_OTP:        
            return {
                    ...state ,
                    status:action.otpverifyDetails.status,
                    module:action.otpverifyDetails.module
            }
        default:
            return state
    }
}

export default PopupReducer;
