import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .max(50, 'Too Long!')
      .required('Please Enter Full Name!'),
      phone: Yup.string()
      .min(10, 'Mobile Number should be 10 digits!')
      .max(10, 'Mobile Number should be 10 digits!')
      .required('Please Enter 10 digits mobile number!'),
      email: Yup.string().email('Invalid email').required('Please enter email!'),
      password: Yup.string()
      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Please enter password!'),
      // emailORmobile: Yup.string()
      // .required('Please enter Email or Mobile Number!'),
  });

  export const LoginSchema = Yup.object().shape({
    emailORmobile: Yup.string()
      .min(2, 'Mobile Number length should be 10 digits!')
      .max(50, 'Too Long!')
      .required('Please Enter 10 Digits Mobile Number or your register email!'),
    password: Yup.string()
      .min(8, 'Password length must be 8!')
      .max(15, 'Your password will hold 15 number or character!')
      .required('Please Enter Password!'), 
  });

  export const OtpSchema = Yup.object().shape({
    mobile: Yup.string()
      .min(2, 'Mobile Number length should be 10 digits!')
      .max(50, 'Too Long!')
      .required('Please Enter 10 Digits Mobile Number!'),
    otp: Yup.string()
      .min(4, 'Please Enter 4 Digits OTP!')
      .max(4, 'OTP should be 4 digits!')
      .required('Please Enter 4 Digits OTP!'), 
  });
  
  export const ForgetMobileSchema = Yup.object().shape({
    emailORmobile: Yup.string()
      .min(2, 'Mobile Number length should be 10 digits!')
      .max(50, 'Too Long!')
      .required('Please Enter 10 Digits Mobile Number or email!'), 
  });

  export const ChanePasswordSchema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
  });