export const SET_LOADING = "SET_LOADING";
export const SET_LOADING_SUCCESS = "SET_LOADING_SUCCESS";
export const SET_LOADING_FAILURE = "SET_LOADING_FAILURE";

export const setLoadingSuccess = () => {
  return {
    type: SET_LOADING_SUCCESS,
  };
};

export const setLoadingFailure = () => {
  return {
    type: SET_LOADING_FAILURE,
  };
};
