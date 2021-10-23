import {
  GET_DESIGNER_PROFILE_FAILED,
  GET_DESIGNER_PROFILE_REQUEST,
  GET_DESIGNER_PROFILE_SUCCESS,
} from "../actions/types";

export const designerProfileReducer = (
  state = { designer: null, loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DESIGNER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case GET_DESIGNER_PROFILE_SUCCESS:
      return { ...state, designer: payload, loading: false };
    case GET_DESIGNER_PROFILE_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
