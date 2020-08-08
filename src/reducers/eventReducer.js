import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  RESIZE_EVENT,
  RESIZE_ERROR,
  SET_EVENT_DURATION,
} from "../actions/types";

import moment from "moment";

const initialState = {
  // Later get these from database
  events: [
    {
      _id: 1,
      start: moment().startOf("day").toDate(),
      end: moment().startOf("day").add(2, "days").toDate(),
      title: "Some title",
    },
    {
      _id: 2,
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ],

  // selected event
  event: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, { ...action.payload }],
        event: {},
      };
    case SET_EVENT_DURATION:
      return {
        ...state,
        event: {
          ...state.event,
          start: action.payload.start,
          end: action.payload.end,
        },
      };
    case RESIZE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
    case (RESIZE_ERROR, ADD_EVENT_ERROR):
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
