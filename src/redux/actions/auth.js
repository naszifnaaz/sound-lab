import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

import AuthService from "../../services/auth.service";

export const register = (user) => (dispatch) => {
  return AuthService.register(user).then((res) => {
    dispatch({
      type: REGISTER_SUCCESS,
    });
  });
};
