import { SET_DATE, SET_VIEWING_DATE } from "../actions/types";

import moment from "moment";

const initialState = {
  date: moment(),
  viewingDate: moment().startOf("day"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_VIEWING_DATE:
      return {
        ...state,
        viewingDate: action.payload,
      };
    default:
      return state;
  }
};
