import {
  ADD_EVENT,
  ADD_EVENT_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  RESIZE_EVENT,
  RESIZE_ERROR,
  SET_CURRENT_EVENT,
  SET_EDITING,
} from "./types";

import { v4 as uuid } from "uuid"; //Dev use only

// Add new event
export const addEvent =
  ({ title, hour, start, end }) =>
  async (dispatch) => {
    try {
      // Implement REST API Here

      // const res = await fetch("./logs");
      // const data = await res.json();

      // uuid as placeholder
      const id = uuid();

      // Random Color
      const defaultColors = [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#B34D4D",
        "#80B300",
        "#809900",
        "#E6B3B3",
        "#6680B3",
        "#66991A",
        "#FF99E6",
        "#CCFF1A",
        "#FF1A66",
        "#E6331A",
        "#33FFCC",
        "#66994D",
        "#B366CC",
        "#4D8000",
        "#B33300",
        "#CC80CC",
        "#66664D",
        "#991AFF",
        "#E666FF",
        "#4DB3FF",
        "#1AB399",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
        "#4D8066",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#9900B3",
        "#E64D66",
        "#4DB380",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF",
      ];

      const content = {
        title,
        hour,
        start,
        end,
        _id: id,
        color: defaultColors[Math.floor(Math.random() * defaultColors.length)],
      };
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

// Update existing event
export const updateEvent =
  ({ _id, title, hour, start, end, color }) =>
  async (dispatch) => {
    try {
      // Implement REST API Here

      // const res = await fetch("./logs");
      // const data = await res.json();

      // uuid as placeholder
      const content = { title, hour, start, end, _id, color };
      dispatch({
        type: UPDATE_EVENT,
        payload: content,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_EVENT_ERROR,
        payload: err.response,
      });
    }
  };

// Delete existing event
export const deleteEvent = (_id) => async (dispatch) => {
  try {
    // Implement REST API Here

    // const res = await fetch("./logs");
    // const data = await res.json();

    dispatch({
      type: DELETE_EVENT,
      payload: _id,
    });
  } catch (err) {
    dispatch({
      type: DELETE_EVENT_ERROR,
      payload: err.response,
    });
  }
};

// Resize the selected event
export const resizeEvent =
  ({ event, start, end }) =>
  async (dispatch) => {
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
export const setCurrentEvent = (currentEvent) => {
  return {
    type: SET_CURRENT_EVENT,
    payload: currentEvent,
  };
};

export const setEditing = () => {
  return {
    type: SET_EDITING,
  };
};
