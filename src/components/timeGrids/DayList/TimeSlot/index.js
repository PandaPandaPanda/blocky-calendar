import React, { useEffect, useState } from "react";
import { isBetween } from "moment";
import { connect } from "react-redux";

import { setTime } from "../../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day

const TimeSlot = ({ index, date, time: { start, end, final }, setTime }) => {
  return (
    <div
      className={`timeslot-container`}
      onMouseUp={() => setTime({ date, index })}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};
export default connect(mapStateToProps, {
  setTime,
})(TimeSlot);
