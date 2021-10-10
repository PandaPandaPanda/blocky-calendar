import {
  SET_CURRENT_EVENT_TYPE_LIST_ITEM,
  SET_ERASING,
} from "../actions/types";

const initialState = {
  currentEventTypesListItem: null,
  erasing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_EVENT_TYPE_LIST_ITEM:
      return {
        ...state,
        currentEventTypesListItem: action.payload,
      };
    case SET_ERASING:
      return {
        ...state,
        erasing: !state.erasing,
      };
    default:
      return state;
  }
};
