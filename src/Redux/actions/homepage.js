import {
  CREATE_CATEGORIES,
  RETRIEVE_CATEGORIES,
  UPDATE_CATEGORIES,
  DELETE_CATEGORIES,
  DELETE_ALL_CATEGORIES,
  SIGNUP_CREDS,
  LOGIN_CREDS,
  USER_DATA
} from "./types";

import HomepageDataService from "../services/homepage.service";

export const createCategories = (title, description) => async (dispatch) => {
  try {
    const res = await HomepageDataService.create({ title, description });

    dispatch({
      type: CREATE_CATEGORIES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const displayContent = () => {
  console.log('content displayed');
};

export const retrieveCategories = () => async (dispatch) => {
  try {
    const res = await HomepageDataService.getAll();

    dispatch({
      type: RETRIEVE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  try {
    const res = await HomepageDataService.update(id, data);

    dispatch({
      type: UPDATE_CATEGORIES,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await HomepageDataService.delete(id);

    dispatch({
      type: DELETE_CATEGORIES,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllCategories = () => async (dispatch) => {
  try {
    const res = await HomepageDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_CATEGORIES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findCategorysByTitle = (title) => async (dispatch) => {
  try {
    const res = await HomepageDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setSignupCreds = (val) => (
  {
    type: SIGNUP_CREDS,
    payload: val
  }
);

export const setLoginCreds = (val) => (
  {
    type: LOGIN_CREDS,
    payload: val
  }
);


export const setUserData = (val) => (
  {
    type: USER_DATA,
    payload: val
  }
);
