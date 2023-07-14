import { SET_LOADING_FAILURE, SET_LOADING_SUCCESS } from "./actions";

export const Reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_SUCCESS:
      return { ...store, isLoggedIn: true };
    case SET_LOADING_FAILURE:
      return { ...store, isLoggedIn: true };
    default:
      return store;
  }
};

const initState = {
  isLoggedIn: false,
};
