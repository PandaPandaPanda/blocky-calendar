import moment from "moment";

import {
  SET_DAYS,
  SET_PREVTIME,
  SET_HOVER,
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
  final: true,
  days: days,
  prevTime: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_RANGE:
      if (state.final == true) {
        return {
          ...state,
          start: action.payload,
          // Reset end
          end: null,
          final: false,
        };
      } else if (state.start != null) {
        return {
          ...state,
          end: action.payload,
          final: true,
        };
      } else {
        return {
          ...state,
          start: action.payload,
          // Reset end
          end: null,
          final: false,
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
    case SET_HOVER:
      if (state.final == false && state.start != null) {
        return {
          ...state,
          end: action.payload,
        };
      } else {
        return {
          ...state,
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
