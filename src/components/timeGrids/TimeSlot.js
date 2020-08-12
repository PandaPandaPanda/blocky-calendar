import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { setTimeStart, setTimeEnd } from "../../actions/timeActions";

import PropTypes from "prop-types";

// index ranges from 0 to 95 representing different times in a day
const TimeSlot = ({ setTimeStart, setTimeEnd, index, date }) => {
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

  return (
    <div
      className={`timeslot-container ${index} ${ticked && "tick"}`}
      onClick={() => onTicked()}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      a
    </div>
  );
};

TimeSlot.propTypes = {};

export default connect(null, { setTimeStart, setTimeEnd })(TimeSlot);
