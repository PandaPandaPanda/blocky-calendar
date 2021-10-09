import React, { useEffect, useState } from "react";
import { isBetween } from "moment";
import { connect } from "react-redux";

import { setTime } from "../../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day

const TimeSlot = ({ setTime, index, date, isSelected }) => {
  return (
    <div
      className={`timeslot-container`}
      style={{ filter: isSelected ? "brightness(0.8)" : "brightness(1)" }}
      onMouseUp={() => {
        setTime({ date, index });
      }}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return {
    // time: state.time,
  };
};
export default connect(mapStateToProps, {
  setTime,
})(TimeSlot);
