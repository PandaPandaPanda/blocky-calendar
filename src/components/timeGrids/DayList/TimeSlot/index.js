import React, { useRef } from "react";
import { connect } from "react-redux";

import {
  setDragging,
  setTimeStart,
  setTimeEnd,
} from "../../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day

const TimeSlot = ({
  index,
  date,
  time: { start, final },
  setTimeStart,
  setTimeEnd,
  setDragging,
}) => {
  return (
    <div
      className={`timeslot-container`}
      onMouseDown={() => setTimeStart({ date, index })}
      onMouseOver={() => {
        if (start != null && final == false) {
          setDragging({ date, index });
        }
      }}
      onMouseUp={() => setTimeEnd({ date, index })}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};
export default connect(mapStateToProps, {
  setTimeStart,
  setTimeEnd,
  setDragging,
})(TimeSlot);
