import { SET_DRAGING, SET_TIME_START, SET_TIME_END } from "../actions/types";

const initialState = {
  start: null,
  end: null,
  hoveringDate: null,
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
        dragging: false,
        hoveringDate: null,
        end: action.payload,
      };
    case SET_DRAGING:
      return {
        ...state,
        dragging: true,
        hoveringDate: action.payload,
      };
    default:
      return state;
  }
};
