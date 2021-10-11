import {
  ADD_EVENT_TYPE,
  ADD_EVENT_TYPE_ERROR,
  UPDATE_EVENT_TYPE,
  UPDATE_EVENT_TYPE_ERROR,
  DELETE_EVENT_TYPE,
  DELETE_EVENT_TYPE_ERROR,
  SET_CURRENT_EVENT_TYPE,
} from "./types";

import { v4 as uuid } from "uuid"; //Dev use only

// Add new event
export const addEventType =
  ({ title, color }) =>
  async (dispatch) => {
    try {
      // Implement REST API Here

      // const res = await fetch("./logs");
      // const data = await res.json();

      // uuid as placeholder
      const id = uuid();

      const content = { title, color, _id: id };
      dispatch({
        type: ADD_EVENT_TYPE,
        payload: content,
      });
    } catch (err) {
      dispatch({
        type: ADD_EVENT_TYPE_ERROR,
        payload: err.response,
      });
    }
  };

// Update existing event
export const updateEventType =
  ({ title, color, _id: id }) =>
  async (dispatch) => {
    try {
      // Implement REST API Here

      // const res = await fetch("./logs");
      // const data = await res.json();

      // uuid as placeholder
      const content = { title, color, _id: id };
      dispatch({
        type: UPDATE_EVENT_TYPE,
        payload: content,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_EVENT_TYPE_ERROR,
        payload: err.response,
      });
    }
  };

// Delete existing event
export const deleteEventType = (_id) => async (dispatch) => {
  try {
    // Implement REST API Here

    // const res = await fetch("./logs");
    // const data = await res.json();

    dispatch({
      type: DELETE_EVENT_TYPE,
      payload: _id,
    });
  } catch (err) {
    dispatch({
      type: DELETE_EVENT_TYPE_ERROR,
      payload: err.response,
    });
  }
};

export const setCurrentEventType = (currentEvent) => {
  return {
    type: SET_CURRENT_EVENT_TYPE,
    payload: currentEvent,
  };
};
