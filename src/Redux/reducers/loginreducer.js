import { LOGIN_CREDS, SIGNUP_CREDS } from "../actions/types";

export const LOGIN_MODEL = "LOGIN_MODEL";
export const LOGIN_MODE = "LOGIN_MODE";
//Login SignUp
const inialState = {
  isLoginModel: false,
  loginMode: "Login",
  signup_creds: { name: '', email: '', password: '', phone_no: '' },
  login_creds: { email: '', password: '' }
};

const loginreducer = (state = inialState, action) => {
  switch (action.type) {
    case LOGIN_MODEL:
      return {
        ...state,
        isLoginModel: action.payload,
      };
    case LOGIN_MODE:
      return {
        ...state,
        loginMode: action.payload,
      };
    case SIGNUP_CREDS:
      return {
        ...state,
        signup_creds: action.payload,
      };
    case LOGIN_CREDS:
      return {
        ...state,
        login_creds: action.payload,
      };

    default:
      return state;
  }
};

export default loginreducer;
