import {
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST_UPDATE,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
} from "../actions/types";

export const getWishListReducer = (initialState = { list: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WISHLIST: {
      Object.assign(initialState.list, payload);
      return { ...initialState, list: payload };
    }

    default:
      return initialState;
  }
};

export const updateWishlistReducer = (
  initialState = { added: null, loading: false, removed: null },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_FROM_WISHLIST_REQUEST:
      return { ...initialState, loading: true };
    case ADD_TO_WISHLIST: {
      return { ...initialState, added: payload, loading: false };
    }
    case REMOVE_FROM_WISHLIST_SUCCESS: {
      return { ...initialState, removed: payload, loading: false };
    }
    case CLEAR_WISHLIST_UPDATE: {
      return { ...initialState, added: null, removed: null, loading: false };
    }
    default:
      return initialState;
  }
};

// export const removeFromWishlistReducer = (
//   initialState = { removed: false },
//   action
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case REMOVE_FROM_WISHLIST:
//       return { ...initialState, removed: payload };

//     default:
//       return initialState;
//   }
// };

export const addToBagReducer = (initialState = { message: null }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_BAG:
      return { ...initialState, message: payload };

    default:
      return initialState;
  }
};
