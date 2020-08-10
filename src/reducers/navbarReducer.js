import { SET_DATE } from "../actions/types";

import moment from "moment";

const initialState = {
  date: moment(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};
