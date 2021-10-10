import { SET_CURRENT_EVENT_TYPE_LIST_ITEM, SET_ERASING } from "./types";

export const setCurrentEventTypesListItem = (property) => {
  return {
    type: SET_CURRENT_EVENT_TYPE_LIST_ITEM,
    payload: property, // { _id, title, color }
  };
};

export const setErasing = () => {
  return {
    type: SET_ERASING,
    payload: null,
  };
};
