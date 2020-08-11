import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import navbarReducer from "./navbarReducer";
import timeReducer from "./timeReducer";

export default combineReducers({
  event: eventReducer,
  navbar: navbarReducer,
  time: timeReducer,
});
