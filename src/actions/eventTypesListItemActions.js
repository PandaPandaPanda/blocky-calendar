import { SET_CURRENT_EVENT_TYPE_LIST_ITEM } from "./types";

export const setCurrentEventTypesListItem = ({ _id, title, color }) => {
  return {
    type: SET_CURRENT_EVENT_TYPE_LIST_ITEM,
    payload: { _id, title, color },
  };
};
