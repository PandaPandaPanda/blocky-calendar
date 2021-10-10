import React, { useEffect, useState } from "react";
import { isBetween } from "moment";
import { connect } from "react-redux";

import { setTimeRange, setHover } from "../../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day

const TimeSlot = ({
  // time: { final },
  setTimeRange,
  setHover,
  index,
  date,
  isSelected,
  property,
}) => {
  return (
    <div
      className={`timeslot-container`}
      style={{
        filter: isSelected ? "brightness(0.7)" : "brightness(1)",
        backgroundColor: property != null ? property.color : "#ececec",
      }}
      onMouseUp={() => {
        setTimeRange({ date, index });
      }}
      // onMouseEnter={() => {
      //   setHover({ date, index });
      // }}
    >
      {property && property.title}
    </div>
  );
};

export default connect(null, {
  setTimeRange,
  setHover,
})(TimeSlot);
