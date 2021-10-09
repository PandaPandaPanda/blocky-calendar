import { SET_TIME } from "../actions/types";

const initialState = {
  start: null,
  end: null,
  final: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      if (state.end != null && state.start != null) {
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
    default:
      return state;
  }
};
