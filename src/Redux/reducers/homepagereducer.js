import {
    CREATE_CATEGORIES,
    RETRIEVE_CATEGORIES,
    UPDATE_CATEGORIES,
    DELETE_CATEGORIES,
    DELETE_ALL_CATEGORIES,
  } from "../actions/types";
  
  const initialState = [];
  
  function homepageReducer(categories = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_CATEGORIES:
        return [...categories, payload];
  
      case RETRIEVE_CATEGORIES:
        return payload;
  
      case UPDATE_CATEGORIES:
        return categories.map((categories) => {
          if (categories.id === payload.id) {
            return {
              ...categories,
              ...payload,
            };
          } else {
            return categories;
          }
        });
  
      case DELETE_CATEGORIES:
        return categories.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_CATEGORIES:
        return [];
  
      default:
        return categories;
    }
  };
  
  export default homepageReducer;