import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
