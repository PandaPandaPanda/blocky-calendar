import {
  ADD_EVENT_TYPE,
  ADD_EVENT_TYPE_ERROR,
  SET_CURRENT_EVENT_TYPE,
  UPDATE_EVENT_TYPE,
  UPDATE_EVENT_TYPE_ERROR,
  DELETE_EVENT_TYPE,
  DELETE_EVENT_TYPE_ERROR,
} from "../actions/types";

import moment from "moment";

const initialState = {
  // Later get these from database
  eventTypes: [
    {
      _id: "1",
      title: "Math",
      color: "#33991a",
    },
    {
      _id: "2",
      title: "English",
      color: "#ffff99",
    },
  ],

  // selected event
  eventType: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT_TYPE:
      return {
        ...state,
        eventTypes: [...state.eventTypes, { ...action.payload }],
        event: {},
      };
    case UPDATE_EVENT_TYPE:
      return {
        ...state,
        eventTypes: state.eventTypes.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        eventType: {},
      };
    case DELETE_EVENT_TYPE:
      return {
        ...state,
        eventTypes: state.eventTypes.filter(
          (item) => item._id !== action.payload
        ),
        eventType: {},
      };
    case (ADD_EVENT_TYPE_ERROR,
    UPDATE_EVENT_TYPE_ERROR,
    DELETE_EVENT_TYPE_ERROR):
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT_EVENT_TYPE:
      return {
        ...state,
        eventType: action.payload,
      };
    default:
      return state;
  }
};
