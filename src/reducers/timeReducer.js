import moment from "moment";

import {
  SET_DAYS,
  SET_PREVTIME,
  SET_DRAG_SELECT,
  SET_TIME_RANGE,
  CLEAR_INTERVAL,
} from "../actions/types";

const days = [];
var min = moment().startOf("year").subtract(1, "year");
var max = moment().startOf("year").add(1, "year");
for (let year = min.year(); year <= max.year(); year++) {
  for (let month = 1; month <= 12; month++) {
    for (
      let day = 1;
      day <= moment(year + ":" + month, "YYYY:MM").daysInMonth();
      day++
    ) {
      let timeslots = [];
      let isSelected = false;
      let property = null;
      for (let index = 0; index < 96; index++) {
        timeslots.push({ index, isSelected, property });
      }
      days.push({
        year,
        month,
        day,
        timeslots,
      });
    }
  }
}

const initialState = {
  start: null,
  end: null,
  days: days,
  prevTime: null,
  isDragSelect: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_RANGE:
      if (state.start == null) {
        return {
          ...state,
          start: action.payload,
          // Reset end
          end: null,
        };
      } else {
        return {
          ...state,
          end: action.payload,
        };
      }
    case SET_DAYS:
      return {
        ...state,
        days: action.payload,
      };
    case SET_PREVTIME:
      return {
        ...state,
        prevTime: action.payload,
      };
    case SET_DRAG_SELECT:
      if (action.payload === true) {
        return {
          ...state,
          isDragSelect: true,
          start: null,
          end: null,
        };
      } else {
        return {
          ...state,
          isDragSelect: false,
        };
      }

    case CLEAR_INTERVAL:
      return {
        ...state,
        start: null,
        end: null,
      };
    default:
      return state;
  }
};
