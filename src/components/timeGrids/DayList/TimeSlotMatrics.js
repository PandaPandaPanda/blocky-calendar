import React, { useRef, Component, Fragment } from "react";
import moment from "moment";

import TimeSlot from "./TimeSlot";

import PropTypes from "prop-types";
import { render } from "react-dom";

const TimeSlotMatrics = ({
  date: { year, month, day },
  style,
  isSelected,
  startDate,
  endDate,
}) => {
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
    times.push(<div key={i}>{i + ":00"}</div>);
  }

  // if (isSelected) {
  //   if () {

  //   } else if(startDate.diff(endDate, "days") == 0)
  //   timeslots.push(
  //     <TimeSlot key={j} index={j} date={year + ":" + month + ":" + day} isSelected = {true}/>
  //   );
  // } else {
  //   timeslots.push(
  //     <TimeSlot key={j} index={j} date={year + ":" + month + ":" + day} isSelected = {false}/>
  //   );
  // }
  // Individual 15min timeslots
  if (isSelected) {
    if (startDate.date.diff(endDate.date, "days") == 0) {
      for (let j = 1; j <= 96; j++) {
        timeslots.push(
          <TimeSlot
            key={j}
            index={j}
            date={year + ":" + month + ":" + day}
            isSelected={
              j <= endDate.index && j >= startDate.index ? true : false
            }
          />
        );
      }
    } else {
      var today = moment(year + ":" + month + ":" + day, "YYYY:MM:DD");
      if (startDate.date.diff(today, "days") == 0) {
        for (let j = 1; j <= 96; j++) {
          timeslots.push(
            <TimeSlot
              key={j}
              index={j}
              date={year + ":" + month + ":" + day}
              isSelected={j >= startDate.index ? true : false}
            />
          );
        }
      } else if (endDate.date.diff(today, "days") == 0) {
        for (let j = 1; j <= 96; j++) {
          timeslots.push(
            <TimeSlot
              key={j}
              index={j}
              date={year + ":" + month + ":" + day}
              isSelected={j <= endDate.index ? true : false}
            />
          );
        }
      } else {
        for (let j = 1; j <= 96; j++) {
          timeslots.push(
            <TimeSlot
              key={j}
              index={j}
              date={year + ":" + month + ":" + day}
              isSelected={true}
            />
          );
        }
      }
    }
  } else {
    for (let j = 1; j <= 96; j++) {
      timeslots.push(
        <TimeSlot
          key={j}
          index={j}
          date={year + ":" + month + ":" + day}
          isSelected={false}
        />
      );
    }
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
        <div className="timeslots-wrapper">
          {timeslots.map((timeslot) => timeslot)}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotMatrics;
