import { SET_DRAG, SET_TIME_START, SET_TIME_END } from "../actions/types";

const initialState = {
  start: null,
  end: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_START:
      return {
        ...state,
        start: action.payload,
        // Reset end
        end: null,
      };
    case SET_TIME_END:
      return {
        ...state,
        end: action.payload,
      };
    default:
      return state;
  }
};
