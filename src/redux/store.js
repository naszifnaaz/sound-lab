import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";

export const store = createStore(
  AuthReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
