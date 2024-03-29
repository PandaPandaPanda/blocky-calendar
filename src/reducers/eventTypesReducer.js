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
      _id: "1r",
      title: "Gym",
      color: "#33991a",
    },
    {
      _id: "2r",
      title: "Guitar",
      color: "#00FFFF",
    },
    {
      _id: "3r",
      title: "Reading",
      color: "#4D80CC",
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
    case SET_CURRENT_EVENT_TYPE:
      return {
        ...state,
        eventType: action.payload,
      };
    case ADD_EVENT_TYPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_EVENT_TYPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_EVENT_TYPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
