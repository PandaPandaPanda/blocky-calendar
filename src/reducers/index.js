import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import navbarReducer from "./navbarReducer";
import timeReducer from "./timeReducer";
import eventTypesReducer from "./eventTypesReducer";
import eventTypesListItemReducer from "./eventTypesListItemReducer";

export default combineReducers({
  event: eventReducer,
  navbar: navbarReducer,
  time: timeReducer,
  eventTypes: eventTypesReducer,
  eventTypesListItem: eventTypesListItemReducer,
});
