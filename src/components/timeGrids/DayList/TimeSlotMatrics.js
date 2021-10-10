import React, { useRef, Component, Fragment } from "react";
import moment from "moment";

import TimeSlot from "./TimeSlot";

import PropTypes from "prop-types";
import { render } from "react-dom";

const TimeSlotMatrics = ({ date: { year, month, day }, style, timeslots }) => {
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
    TimeslotItems = [];

  // Display the time in a day
  for (let i = 0; i < 24; i++) {
    times.push(<div key={i}>{i + ":00"}</div>);
  }

  // if (isSelected) {
  //   if () {

  //   } else if(startDate.diff(endDate, "days") == 0)
  //   TimeslotItems.push(
  //     <TimeSlot key={j} index={j} date={year + ":" + month + ":" + day} isSelected = {true}/>
  //   );
  // } else {
  //   TimeslotItems.push(
  //     <TimeSlot key={j} index={j} date={year + ":" + month + ":" + day} isSelected = {false}/>
  //   );
  // }
  // Individual 15min TimeslotItems

  for (let j = 0; j < 96; j++) {
    TimeslotItems.push(
      <TimeSlot
        key={j}
        date={year + ":" + month + ":" + day}
        index={j}
        isSelected={timeslots[j].isSelected}
      />
    );
  }

  return (
    <div style={style} id={year + ":" + month + ":" + day}>
      <div className="day-wrapper">
        <div className="date-label">
          <span>{m}</span>
          <span>{d}</span>
          <span>{y}</span>
        </div>
        <div className="time-label">{times.map((time) => time)}</div>
        <div className="timeslotItems-wrapper">
          {TimeslotItems.map((timeslot) => timeslot)}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotMatrics;
