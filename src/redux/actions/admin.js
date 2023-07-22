import UserService from "../../services/users.service";
import {
  CHANGE_USER_ROLE_FAIL,
  CHANGE_USER_ROLE_SUCCESS,
  DEACTIVATE_USER_FAIL,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from "./types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getUsers();
    console.log("hello", res);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
    });
  }
};

export const changeUserRole = (id, role) => async (dispatch) => {
  console.log(id, role);
  try {
    await UserService.changeUserRole(id, role);
    toast("User role changed");
    dispatch(getUsers());
  } catch (err) {
    dispatch({
      type: CHANGE_USER_ROLE_FAIL,
    });
  }
};

export const deactivateUser = (id) => async (dispatch) => {
  try {
    await UserService.deactivateUser(id);
    toast("User Deactivated!");
    dispatch(getUsers());
  } catch (err) {
    dispatch({
      type: DEACTIVATE_USER_FAIL,
    });
  }
};
