import React, { useRef, Component, Fragment } from "react";

import TimeSlot from "./TimeSlot";

import PropTypes from "prop-types";
import { render } from "react-dom";

const TimeSlotMatrics = ({ date: { year, month, day }, style }) => {
  const monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let m = monthsList[month - 1];
  let d = day;
  let y = year;

  var times = [],
    timeslots = [];

  // Display the time in a day
  for (let i = 0; i < 24; i++) {
    times.push(<div>{i + ":00"}</div>);
  }

  // Individual 15min timeslots
  for (let j = 0; j < 96; j++) {
    timeslots.push(<TimeSlot index={j} />);
  }

  return (
    <div className="day-wrapper" style={style}>
      <div className="date-label">
        <span>{m}</span>
        <span>{d}</span>
        <span>{y}</span>
      </div>
      <div className="time-label">{times.map((time) => time)}</div>
      <div className="timeslots-wrapper">
        {timeslots.map((timeslot) => timeslot)}
      </div>
    </div>
  );
};

export default TimeSlotMatrics;
