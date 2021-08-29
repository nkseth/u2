import { USER_DATA } from "../actions/types";

const inialState = {
  user_data: {}
};

const mainreducer = (state = inialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user_data: action.payload,
      };

    default:
      return state;
  }
};

export default mainreducer;
