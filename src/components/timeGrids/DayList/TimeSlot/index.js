import React, { useEffect, useState } from "react";
import { isBetween } from "moment";
import { connect } from "react-redux";

import { setTimeRange, setDragSelect } from "../../../../actions/timeActions";

import "./style.css";

// index ranges from 0 to 95 representing different times in a day

const TimeSlot = ({
  time: { isDragSelect, start },
  setTimeRange,
  setDragSelect,
  index,
  date,
  isSelected,
  title, 
  color
}) => {

  return (
    <div
      className={`timeslot-container`}
      style={{
        filter: isSelected ? "brightness(0.7)" : "brightness(1)",
        backgroundColor: color != null ? color : "#ececec",
      }}
      onMouseDown={() => {
        setDragSelect(true);
        setTimeRange({ date, index });
      }}
      onMouseUp={() => {
        setDragSelect(false);
      }}
      onMouseEnter={() => {
        if (isDragSelect) {
          setTimeRange({ date, index });
        }
      }}
    >
      {title != null && title}
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
  setDragSelect,
})(TimeSlot);
