import { createStore, combineReducers } from "redux";

import LoginReducer from "./reducer/login.reducer";

let store;

const reducer = combineReducers({
  auth: LoginReducer,
});

export function initStore() {
  store = createStore(reducer);
  return store;
}
