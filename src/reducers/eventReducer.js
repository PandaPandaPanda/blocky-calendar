import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  RESIZE_EVENT,
  RESIZE_ERROR,
  SET_CURRENT_EVENT,
  SET_EDITING,
} from "../actions/types";

import moment from "moment";

const initialState = {
  // Later get these from database
  events: [
    {
      _id: 1,
      start: moment().startOf("day").toDate(),
      end: moment().startOf("day").add(2, "days").toDate(),
      title: "1",
      color: "#99E6E6",
    },
    {
      _id: 2,
      start: moment().startOf("day").toDate(),
      end: moment().startOf("day").add(1, "days").toDate(),
      title: "2",
      color: "#4DB380",
    },
    {
      _id: 3,
      start: moment().startOf("day").toDate(),
      end: moment().startOf("day").add(1, "days").toDate(),
      title: "3",
      color: "#99E6E6",
    },
    {
      _id: 4,
      start: moment().startOf("day").toDate(),
      end: moment().startOf("day").add(2, "days").toDate(),
      title: "4",
      color: "#99E6E6",
    },
  ],

  // selected event
  event: {},
  editing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, { ...action.payload }],
        event: {},
        editing: false,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
        event: {},
        editing: false,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((events) => events._id !== action.payload),
        event: {},
        editing: false,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case RESIZE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
    case (RESIZE_ERROR,
    ADD_EVENT_ERROR,
    UPDATE_EVENT_ERROR,
    DELETE_EVENT_ERROR):
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_EDITING:
      return {
        ...state,
        editing: true,
      };
    default:
      return state;
  }
};
