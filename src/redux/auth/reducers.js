import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  currentSuccess,
} from "./actions";

const initState = {
  name: "",
  email: "",
  password: "",
};

const user = createReducer(initState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logoutSuccess]: () => initState,
  [currentSuccess]: (_, action) => action.payload.user,
});

export default combineReducers({ user });
