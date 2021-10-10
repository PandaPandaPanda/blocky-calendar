import { SET_CURRENT_EVENT_TYPE_LIST_ITEM } from "./types";

export const setCurrentEventTypesListItem = (property) => {
  return {
    type: SET_CURRENT_EVENT_TYPE_LIST_ITEM,
    payload: property, // { _id, title, color }
  };
};
