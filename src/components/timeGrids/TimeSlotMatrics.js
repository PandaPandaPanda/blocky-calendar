import React, { useRef, Component, Fragment } from "react";

import TimeSlot from "./TimeSlot";

import VisibilitySensor from "react-visibility-sensor";

import moment from "moment";

import PropTypes from "prop-types";
import { render } from "react-dom";

const TimeSlotMatrics = ({ date: { year, month, day }, style }) => {
  let m = moment().month(month).format("MMM");
  let d = moment().day(day).format("DD");
  let y = moment().year(year).format("YYYY");

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
