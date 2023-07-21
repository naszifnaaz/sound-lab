import UserService from "../../services/users.service";
import { GET_USERS_FAIL, GET_USERS_SUCCESS } from "./types";

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
