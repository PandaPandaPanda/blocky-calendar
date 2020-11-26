import { SET_DRAGING, SET_TIME_START, SET_TIME_END } from "../actions/types";

const initialState = {
  start: null,
  end: null,
  final: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_START:
      return {
        ...state,
        start: action.payload,
        // Reset end
        end: null,
        final: false,
      };
    case SET_TIME_END:
      return {
        ...state,
        end: action.payload,
        final: true,
      };
    case SET_DRAGING:
      return {
        ...state,
        end: action.payload,
      };
    default:
      return state;
  }
};
