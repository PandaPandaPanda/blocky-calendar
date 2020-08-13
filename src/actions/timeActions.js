import { SET_TIME_START, SET_TIME_END } from "./types";

//  export const setDrag = () => {
//   return {
//     type: SET_DRAG,
//   };
// };

export const setTimeStart = (start) => {
  return {
    type: SET_TIME_START,
    payload: start,
  };
};

export const setTimeEnd = (end) => {
  return {
    type: SET_TIME_END,
    payload: end,
  };
};
