import React, { useState, useEffect } from "react";

import TimeSlot from "./TimeSlot";

// import DragSelect from "../../utils/DragSelect";

import PropTypes from "prop-types";
import { Collapsible } from "materialize-css";

const TimeSlotMatrics = ({ date }) => {
  const d = date.format("DD"),
    m = date.format("MMM"),
    y = date.format("YYYY");

  var times = [],
    timeslots = [];

  // Display the time in a day
  for (let i = 0; i < 24; i++) {
    times.push(<div>{i + ":00"}</div>);
  }

  // Individual 15min timeslots
  for (let j = 0; j < 96; j++) {
    timeslots.push(<TimeSlot index={j} date={date} />);
  }

  return (
    <div className="day-wrapper">
      <div className="date-label">
        <span>{m}</span>
        <span>{d}</span>
        <span>{y}</span>
      </div>
      <div className="time-label">{times.map((time) => time)}</div>
      <div id={date.format("YYYYMMDD")} className="timeslots-wrapper">
        {timeslots.map((timeslot) => timeslot)}
      </div>
    </div>
  );
};

TimeSlotMatrics.propTypes = {};

export default TimeSlotMatrics;
