import { SET_TIME } from "./types";

import moment from "moment";

export const setTime = ({ date, index }) => {
  return {
    type: SET_TIME,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};
