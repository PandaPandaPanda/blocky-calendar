import { SET_DATE } from "./types";

export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: date,
  };
};
