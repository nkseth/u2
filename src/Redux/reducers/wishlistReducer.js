import {
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST_UPDATE,
  GET_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../actions/types";

export const getWishListReducer = (initialState = { list: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WISHLIST:
      return { ...initialState, list: payload };

    default:
      return initialState;
  }
};

export const updateWishlistReducer = (
  initialState = { added: false, removed: false },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_WISHLIST:
      return { ...initialState, added: payload };
    case REMOVE_FROM_WISHLIST:
      return { ...initialState, removed: payload };
    case CLEAR_WISHLIST_UPDATE:
      return { ...initialState, ...payload };
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
