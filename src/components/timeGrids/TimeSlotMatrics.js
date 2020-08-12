import React, { useRef } from "react";

import TimeSlot from "./TimeSlot";

import VisibilitySensor from "react-visibility-sensor";

// import DragSelect from "../../utils/DragSelect";

import PropTypes from "prop-types";
import { Collapsible } from "materialize-css";

const TimeSlotMatrics = ({ date, setCurrentView }) => {
  const d = date.format("DD"),
    m = date.format("MMM"),
    y = date.format("YYYY");

  var times = [],
    timeslots = [];

  const positionRef = useRef();

  // Display the time in a day
  for (let i = 0; i < 24; i++) {
    times.push(<div>{i + ":00"}</div>);
  }

  // Individual 15min timeslots
  for (let j = 0; j < 96; j++) {
    if (j === 96 / 2) {
      timeslots.push(<TimeSlot index={j} date={date} ref={positionRef} />);
    } else {
      timeslots.push(<TimeSlot index={j} date={date} />);
    }
  }

  // Check if this is the current page
  const onVisibilityChange = (isVisible) => {
    console.log("Element is now " + isVisible + " " + date.format("YYYYMMDD"));
  };
  window.onscroll = () => {
    setCurrentView(date);
  };

  return (
    <VisibilitySensor
      onChange={onVisibilityChange}
      scrollCheck="true"
      intervalCheck="false"
    >
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
    </VisibilitySensor>
  );
};

TimeSlotMatrics.propTypes = {};

export default TimeSlotMatrics;
