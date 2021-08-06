export const VERIFY_OTP = 'VERIFY_OTP';

export const verfyOtp=(otpverifyDetails)=>{
    console.log(otpverifyDetails)
    return{
        type:VERIFY_OTP,
        otpverifyDetails
    }
}