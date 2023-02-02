import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";

const todoApp = combineReducers({
  todos,
});

export default todoApp;
