import { GET_USERS_SUCCESS } from "../actions/types";

const initState = {
  users: [],
  products: [],
  orders: [],
};

export const AdminReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_USERS_SUCCESS:
      return { ...store, users: payload };
    default:
      return store;
  }
};
