import {
  BASIC_DETAILS,
  BASIC_ID,
  GENDER,
  GET_ALL_MEASUREMENTS,
  LOWER_BODY,
  GET_SINGLE_MEASUREMENT,
  UPPER_BODY,
  DELETE_MEASUREMENT,
} from "../actions/types";

const inialState = {
  measurement: null,
  gender: "male",
  basic_details: { name: "", fitting: "Regular", standard_size: "S" },
  upper_body: {
    neck: "",
    shoulder: "",
    chest: "",
    arm_hole: "",
    sleeve: "",
    wrist: "",
  },
  lower_body: {
    waist: "",
    hip_round: "",
    full_length: "",
    inseam: "",
    thigh: "",
    calf: "",
    ankle: "",
  },
  basic_id: null,
};

export const measurement_reducer = (state = inialState, action) => {
  switch (action.type) {
    case GET_SINGLE_MEASUREMENT:
      return {
        ...state,
        measurement: action.payload,
      };
    case GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case BASIC_DETAILS:
      return {
        ...state,
        basic_details: action.payload,
      };
    case UPPER_BODY:
      return {
        ...state,
        upper_body: action.payload,
      };
    case LOWER_BODY:
      return {
        ...state,
        lower_body: action.payload,
      };
    case BASIC_ID:
      return {
        ...state,
        basic_id: action.payload,
      };
    default:
      return state;
  }
};

export const allMeasurementsReducer = (
  inialState = { measurements: null },
  action
) => {
  switch (action.type) {
    case GET_ALL_MEASUREMENTS: {
      Object.assign(inialState, action.payload);
      return {
        ...inialState,
        measurements: action.payload,
      };
    }
    default:
      return inialState;
  }
};

export const deleteMeasurementReducer = (
  inialState = { message: [] },
  action
) => {
  switch (action.type) {
    case DELETE_MEASUREMENT: {
      return {
        ...inialState,
        message: action.payload,
      };
    }
    default:
      return inialState;
  }
};

export const saveMeasurementReducer = (
  inialState = { message: [] },
  action
) => {
  switch (action.type) {
    case DELETE_MEASUREMENT:
      return {
        ...inialState,
        message: action.payload,
      };
    default:
      return inialState;
  }
};
// export default measurement_reducer;
