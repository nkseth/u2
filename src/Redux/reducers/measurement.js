import { BASIC_DETAILS, BASIC_ID, GENDER, LOWER_BODY, MY_MEASUREMENTS, UPPER_BODY } from "../actions/types";


const inialState = {
    my_measurements: [],
    gender: 'male',
    basic_details: { name: '', fitting:'Regular', standard_size:'S' },
    upper_body: { neck: '', shoulder: '', chest: '', arm_hole: '', sleeve: '', wrist: '' },
    lower_body: { waist: '', hip_round: '', full_length: '', inseam: '', thigh: '', calf: '', ankle: '' },
    basic_id: null,
};

const measurement_reducer = (state = inialState, action) => {
    switch (action.type) {
        case MY_MEASUREMENTS:
            return {
                ...state,
                my_measurements: action.payload,
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

export default measurement_reducer;
