import { RESIZE_EVENT, RESIZE_ERROR } from "../actions/types";
import moment from "moment";

const initialState = {
  // Later get these from database
  events: [
    {
      _id: 1,
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
    {
      _id: 2,
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESIZE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
    case RESIZE_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
