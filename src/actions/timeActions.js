import { SET_TIME_RANGE, SET_HOVER } from "./types";

import moment from "moment";

export const setTimeRange = ({ date, index }) => {
  return {
    type: SET_TIME_RANGE,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};

export const setHover = ({ date, index }) => {
  return {
    type: SET_HOVER,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};
