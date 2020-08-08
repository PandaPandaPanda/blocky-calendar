import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  RESIZE_EVENT,
  RESIZE_ERROR,
  SET_EVENT_DURATION,
} from "./types";

import { v4 as uuid } from "uuid"; //Dev use only

// Add new event
export const addEvent = ({ title, hour, start, end }) => async (dispatch) => {
  try {
    // Implement REST API Here

    // const res = await fetch("./logs");
    // const data = await res.json();

    // uuid as placeholder
    const id = uuid();
    const content = { title, hour, start, end, _id: id };
    console.log(content);
    dispatch({
      type: ADD_EVENT,
      payload: content,
    });
  } catch (err) {
    dispatch({
      type: ADD_EVENT_ERROR,
      payload: err.response,
    });
  }
};

// Resize the selected event
export const resizeEvent = ({ event, start, end }) => async (dispatch) => {
  try {
    var updatedEvent = event;
    event.start = start;
    event.end = end;

    // Implement REST API Here

    // const res = await fetch("./logs");
    // const data = await res.json();

    dispatch({
      type: RESIZE_EVENT,
      payload: updatedEvent,
    });
  } catch (err) {
    dispatch({
      type: RESIZE_ERROR,
      payload: err.response,
    });
  }
};

// Set event duration on monthly calendar for newly added event
export const setEventDuration = ({ start, end }) => {
  const duration = { start, end };

  return {
    type: SET_EVENT_DURATION,
    payload: duration,
  };
};
