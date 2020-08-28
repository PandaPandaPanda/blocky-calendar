import { SET_DATE, SET_VIEWING_DATE } from "./types";

export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: date,
  };
};

export const setViewingDate = (date) => {
  return {
    type: SET_VIEWING_DATE,
    payload: date,
  };
};
