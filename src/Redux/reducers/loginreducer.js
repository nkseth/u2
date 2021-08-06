export const LOGIN_MODEL = "LOGIN_MODEL";
export const LOGIN_MODE = "LOGIN_MODE";
//Login SignUp
const inialState = {
  isLoginModel: false,
  loginMode: "Login",
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

    default:
      return state;
  }
};

export default loginreducer;
