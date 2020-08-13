import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { setTimeStart, setTimeEnd } from "../../actions/timeActions";

import PropTypes from "prop-types";

// index ranges from 0 to 95 representing different times in a day
const TimeSlot = ({
  time: { start, end },
  setTimeStart,
  setTimeEnd,
  index,
  date,
}) => {
  const [ticked, setTicked] = useState(false);

  const onTicked = (e) => {
    setTicked((current) => !current);
  };

  const onMouseDown = (e) => {
    setTimeStart({ index, date, x: e.clientX, y: e.clientY });
  };

  const onMouseUp = (e) => {
    setTimeEnd({ index, date, x: e.clientX, y: e.clientY });
  };

  const checkOnDrag = (e) => {
    if (start !== null && end === null) {
      // Dragging
    }
  };

  return (
    <div
      className={`timeslot-container ${index} ${ticked && "tick"}`}
      onClick={() => onTicked()}
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

export default connect(mapStateToProps, { setTimeStart, setTimeEnd })(TimeSlot);
