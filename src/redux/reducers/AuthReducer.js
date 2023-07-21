import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
  REMOVE_LOADING,
} from "../actions/types";

const initState = {
  isLoading: false,
  isLoggedIn: false,
  isAdmin: false,
  currentUser: {},
};

export const AuthReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...store,
        isLoggedIn: true,
        currentUser: payload.email,
        isAdmin: payload.role === "user" ? false : true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...store,
        isLoggedIn: true,
        currentUser: payload.email,
        isAdmin: payload.role === "user" ? false : true,
      };
    case REGISTER_FAIL:
      return { ...store, isLoggedIn: false };
    case LOGIN_FAIL:
      return { ...store, isLoggedIn: false };
    case LOGOUT:
      return { ...store, isLoggedIn: false, currentUser: {}, isAdmin: false };
    case SET_LOADING:
      return { ...store, isLoading: true };
    case REMOVE_LOADING:
      return { ...store, isLoading: false };
    default:
      return store;
  }
};
