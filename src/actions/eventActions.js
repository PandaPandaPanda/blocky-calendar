import { RESIZE_EVENT, RESIZE_ERROR } from "./types";

// Resize the selected event
export const resizeEvent = (data) => async (dispatch) => {
  try {
    var event = data.event;
    event.start = data.start;
    event.end = data.end;

    // Implement REST API Here

    // const res = await fetch("./logs");
    // const data = await res.json();

    dispatch({
      type: RESIZE_EVENT,
      payload: event,
    });
  } catch (err) {
    dispatch({
      type: RESIZE_ERROR,
      payload: err.response,
    });
  }
};
