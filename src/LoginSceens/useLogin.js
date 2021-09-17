import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_MODE, LOGIN_MODEL } from "../Redux/reducers/loginreducer";

const useLogin = () => {
  const { isLoginModel, loginMode } = useSelector((state) => state.root.login);
  const dispatch = useDispatch();
  const Controller = useCallback(
    (type, value) => {
      dispatch({
        type: type,
        payload: value,
      });
    },
    [isLoginModel]
  );
  //For Open Login Model
  const login_Model_Show = useCallback(() => {
    Controller(LOGIN_MODEL, true);
  }, [isLoginModel]);
  //For Close Login Model
  const login_Model_Hide = useCallback(() => {
    Controller(LOGIN_MODEL, false);
    login_Mode_Handler("Login")
  }, [isLoginModel]);

  //For Changing  Mode
  const login_Mode_Handler = useCallback(
    (type) => {
      Controller(LOGIN_MODE, type);
    },
    [loginMode]
  );
  return {
    loginMode,
    isLoginModel,
    login_Model_Show,
    login_Model_Hide,
    login_Mode_Handler,
  };
};

export default useLogin;
