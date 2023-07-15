import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

import AuthService from "../../services/auth.service";

export const register = (user) => async (dispatch) => {
  try {
    const res = await AuthService.register(user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const res = await AuthService.login(user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
