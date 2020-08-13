import React, { useRef } from "react";
import { connect } from "react-redux";
import {
  setDragging,
  setTimeStart,
  setTimeEnd,
} from "../../actions/timeActions";

import PropTypes from "prop-types";

// index ranges from 0 to 95 representing different times in a day
const TimeSlot = ({
  time: { start, end },
  setTimeStart,
  setTimeEnd,
  setDragging,
  index,
  date,
}) => {
  const selfRef = useRef();

  const onMouseDown = (e) => {
    setTimeStart({ index, date, x: e.clientX, y: e.clientY });
  };

  const onMouseUp = (e) => {
    setTimeEnd({ index, date, x: e.clientX, y: e.clientY });
  };

  const checkOnDrag = (e) => {
    if (start !== null && end === null) {
      // Dragging
      setDragging({ index, date });
    }
  };

  return (
    <div
      ref={selfRef}
      className={`timeslot-container ${index}`}
      onMouseOver={() => checkOnDrag()}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};
TimeSlot.propTypes = {};

export default connect(mapStateToProps, {
  setTimeStart,
  setTimeEnd,
  setDragging,
})(TimeSlot);
