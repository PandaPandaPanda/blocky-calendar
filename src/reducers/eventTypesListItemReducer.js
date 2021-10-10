import { SET_CURRENT_EVENT_TYPE_LIST_ITEM } from "../actions/types";

const initialState = {
  currentEventTypesListItem: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_EVENT_TYPE_LIST_ITEM:
      return {
        ...state,
        currentEventTypesListItem: action.payload,
      };
    default:
      return state;
  }
};
