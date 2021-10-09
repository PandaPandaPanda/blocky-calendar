import { SET_TIME, SET_HOVER } from "./types";

import moment from "moment";

export const setTime = ({ date, index }) => {
  return {
    type: SET_TIME,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};

export const setHover = ({ date, index }) => {
  return {
    type: SET_HOVER,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};
