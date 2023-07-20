import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
  REMOVE_LOADING,
} from "./actions/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initState = {
  isLoading: false,
  isLoggedIn: false,
  isAdmin: true,
  currentUser: {},
};

export const Reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload);
      toast("User Registered!");
      return { ...store, isLoggedIn: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      toast("Login Successfull!");
      return { ...store, isLoggedIn: true };
    case REGISTER_FAIL:
      toast("Email already registered!");
      return { ...store, isLoggedIn: false };
    case LOGIN_FAIL:
      toast("Invalid Credentials!");
      return { ...store, isLoggedIn: false };
    case LOGOUT:
      toast("User Logged Out!");
      return { ...store, isLoggedIn: false, currentUser: {} };
    case SET_LOADING:
      return { ...store, isLoading: true };
    case REMOVE_LOADING:
      return { ...store, isLoading: false };
    default:
      return store;
  }
};
