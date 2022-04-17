import React, { useEffect, useState } from "react";
import { isBetween } from "moment";
import { connect } from "react-redux";

import { setTimeRange } from "../../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day

const TimeSlot = ({
  time: { isDragSelect },
  setTimeRange,
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
      onMouseEnter={() => {
        if (isDragSelect) {
          setTimeRange({ date, index });
        }
      }}
    >
      {property && property.title}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps, {
  setTimeRange,
})(TimeSlot);
