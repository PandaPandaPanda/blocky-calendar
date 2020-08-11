import React, { useState, useEffect } from "react";

import TimeSlot from "./TimeSlot";

// import DragSelect from "../../utils/DragSelect";

import PropTypes from "prop-types";

const DayWrapper = ({ date }) => {
  const d = date.format("DD"),
    m = date.format("MMM"),
    y = date.format("YYYY");
  const [times, setTime] = useState([]);
  const [timeslots, setTimeslots] = useState([]);

  // Display the time in a day
  for (var i = 0; i < 24; i++) {
    times.push(<div key={i}>{i + ":00"}</div>);
  }

  // Individual 15min timeslots
  for (var i = 0; i < 96; i++) {
    timeslots.push(<TimeSlot key={i} index={i} />);
  }

  // var ds = new DragSelect({
  //   selectables: document.getElementsByClassName("block-container"),
  //   // area: document.getElementById("selectable-container"),
  // });

  // useEffect(() => {
  //   console.log(ds);
  // }, [ds]);

  return (
    <div className="day-wrapper">
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

DayWrapper.propTypes = {};

export default DayWrapper;
