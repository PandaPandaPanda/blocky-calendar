import {
  SET_TIME_RANGE,
  SET_HOVER,
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

export const setHover = ({ date, index }) => {
  return {
    type: SET_HOVER,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};

export const clearInterval = () => {
  return {
    type: CLEAR_INTERVAL,
    payload: undefined,
  };
};
