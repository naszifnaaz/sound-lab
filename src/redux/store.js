import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import { AdminReducer } from "./reducers/AdminReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  auth: AuthReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
