import {
  SET_TIME_RANGE,
  SET_DRAG_SELECT,
  SET_DAYS,
  SET_PREVTIME,
  CLEAR_INTERVAL,
} from "./types";

import moment from "moment";

export const setTimeRange = ({ date, index }) => {
  return {
    type: SET_TIME_RANGE,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};
export const setDays = (days) => {
  return {
    type: SET_DAYS,
    payload: days,
  };
};
export const setPrevTime = (time) => {
  return {
    type: SET_PREVTIME,
    payload: time,
  };
};

export const setDragSelect = (isTrue) => {
  return {
    type: SET_DRAG_SELECT,
    payload: isTrue,
  };
};

export const clearInterval = () => {
  return {
    type: CLEAR_INTERVAL,
    payload: undefined,
  };
};
