import { ADDRESS, GET_DESIGNERS, ORDERS, REVIEWS } from "../actions/types";


const inialState = {
    address: [],
    designers: [],
    review: [],
    orders: []
};

const profile_reducer = (state = inialState, action) => {
    switch (action.type) {
        case ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        case GET_DESIGNERS:
            return {
                ...state,
                designers: action.payload,
            };
        case REVIEWS:
            return {
                ...state,
                review: action.payload,
            };
        case ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
};

export default profile_reducer;
