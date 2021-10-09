import { SET_TIME, SET_HOVER } from "../actions/types";

const initialState = {
  start: null,
  end: null,
  final: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      if (state.final == true) {
        return {
          ...state,
          start: action.payload,
          // Reset end
          end: null,
          final: false,
        };
      } else if (state.start != null) {
        return {
          ...state,
          end: action.payload,
          final: true,
        };
      } else {
        return {
          ...state,
          start: action.payload,
          // Reset end
          end: null,
          final: false,
        };
      }
    case SET_HOVER:
      if (state.final == false && state.start != null) {
        return {
          ...state,
          end: action.payload,
        };
      } else {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};
