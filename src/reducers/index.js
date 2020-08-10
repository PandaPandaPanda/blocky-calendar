import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import navbarReducer from "./navbarReducer";

export default combineReducers({
  event: eventReducer,
  navbar: navbarReducer,
});
