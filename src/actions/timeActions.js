import { SET_DRAGING, SET_TIME_START, SET_TIME_END } from "./types";

import moment from "moment";

//  export const setDrag = () => {
//   return {
//     type: SET_DRAG,
//   };
// };

export const setTimeStart = ({ date, index }) => {
  return {
    type: SET_TIME_START,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};

export const setTimeEnd = ({ date, index }) => {
  return {
    type: SET_TIME_END,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};

export const setDragging = ({ date, index }) => {
  return {
    type: SET_DRAGING,
    payload: { date: moment(date, "YYYY:MM:DD"), index },
  };
};
