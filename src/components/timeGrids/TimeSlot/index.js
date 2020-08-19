import React, { useRef } from "react";
import {
  setDragging,
  setTimeStart,
  setTimeEnd,
} from "../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day
const TimeSlot = ({ index }) => {
  return <div className={`timeslot-container ${index}`}></div>;
};

export default TimeSlot;
