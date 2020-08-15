import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import moment from "moment";

import TimeSlotMatrics from "./TimeSlotMatrics";

import { setDate } from "../../actions/navbarActions";

import "./style.css";
import PropTypes from "prop-types";

const DayBlocks = ({
  time: { start, end, hoveringDate },
  navbar: { date: selectedDate },
  setDate,
}) => {
  // Update Current Viewing Date
  const [currentViewingDate, setCurrentViewingDate] = useState(selectedDate);

  // Handle Scroll to Date
  const setCurrentView = (viewingDate) => {
    if (viewingDate !== currentViewingDate) {
      setCurrentViewingDate(viewingDate);
      setDate(moment(viewingDate).startOf("day"));
    }
  };
  // useEffect(() => {
  //   // console.log(currentViewingDate, selectedDate);
  //   if (!currentViewingDate.isSame(selectedDate)) {
  //     console.log("NOT SAME");
  //   }
  // }, [currentViewingDate]);

  const [dayMatrics, setDayMatrics] = useState([
    <TimeSlotMatrics
      date={moment(selectedDate).subtract(2, "day")}
      setCurrentView={setCurrentView}
    />,
    <TimeSlotMatrics
      date={moment(selectedDate).subtract(1, "day")}
      setCurrentView={setCurrentView}
    />,
    <TimeSlotMatrics
      date={moment(selectedDate)}
      setCurrentView={setCurrentView}
    />,
    <TimeSlotMatrics
      date={moment(selectedDate).add(1, "day")}
      setCurrentView={setCurrentView}
    />,
    <TimeSlotMatrics
      date={moment(selectedDate).add(2, "day")}
      setCurrentView={setCurrentView}
    />,
  ]);

  // Scrolling Ref
  const containerRef = useRef();
  const wrapperRef = useRef();

  // Auto Scroll to center
  useEffect(() => {
    wrapperRef.current.scrollTop = (2 * containerRef.current.clientHeight) / 5;
  }, [containerRef, selectedDate]);

  // Handle date changes
  useEffect(() => {
    setDayMatrics([
      <TimeSlotMatrics
        date={moment(selectedDate).subtract(2, "day")}
        setCurrentView={setCurrentView}
      />,
      <TimeSlotMatrics
        date={moment(selectedDate).subtract(1, "day")}
        setCurrentView={setCurrentView}
      />,
      <TimeSlotMatrics
        date={moment(selectedDate)}
        setCurrentView={setCurrentView}
      />,
      <TimeSlotMatrics
        date={moment(selectedDate).add(1, "day")}
        setCurrentView={setCurrentView}
      />,
      <TimeSlotMatrics
        date={moment(selectedDate).add(2, "day")}
        setCurrentView={setCurrentView}
      />,
    ]);
  }, [selectedDate]);

  // Handling Time Block Selection
  useEffect(() => {
    if (end !== null || hoveringDate !== null) {
      var action;
      if (hoveringDate !== null) {
        action = "hover";
        var day1 = start,
          day2 = hoveringDate;
      } else {
        action = "tick";
        var day1 = start,
          day2 = end;
      }

      // First check which day comes first? Make day1 always the day before
      if (day1.date.isSameOrAfter(day2.date, "day")) {
        if (day1.date.isSame(day2.date, "day")) {
          if (day1.index > day2.index) {
            // If selection inside same day, day1.index after day2.index
            let temp = day1;
            day1 = day2;
            day2 = temp;
          }
        } else {
          // Not same day (day1 after day2) switch
          let temp = day1;
          day1 = day2;
          day2 = temp;
        }
      } else {
        // day1 is the start, day2 is the ending
      }

      if (day1.date.isSame(day2.date, "day")) {
        var date = document.getElementById(day1.date.format("YYYYMMDD"));
        var selectedSlots = [];
        for (var i = day1.index; i <= day2.index; i++) {
          var el = date.getElementsByClassName(i)[0];
          if (el.classList.contains("hover")) {
            el.classList.remove("hover");
          } else if (el.classList.contains("tick")) {
            el.classList.remove("tick");
          }
          el.classList.add(action);
          selectedSlots.push(el);
        }
      } else {
        // Tick day1 till end of day
        date = document.getElementById(day1.date.format("YYYYMMDD"));
        selectedSlots = [];
        for (i = day1.index; i < 96; i++) {
          const el = date.getElementsByClassName(i)[0];
          if (el.classList.contains("hover")) {
            el.classList.remove("hover");
          } else if (el.classList.contains("tick")) {
            el.classList.remove("tick");
          }
          el.classList.add(action);
          selectedSlots.push(el);
        }

        // Tick all interval date
        var intervalDate = day1.date.add(1, "day");
        while (!intervalDate.isSame(day2.date, "day")) {
          date = document.getElementById(intervalDate.format("YYYYMMDD"));
          console.log(date);
          selectedSlots = [];
          for (i = 0; i < 96; i++) {
            el = date.getElementsByClassName(i)[0];
            if (el.classList.contains("hover")) {
              el.classList.remove("hover");
            } else if (el.classList.contains("tick")) {
              el.classList.remove("tick");
            }
            el.classList.add(action);
            selectedSlots.push(el);
          }
          intervalDate = intervalDate.add(1, "day");
        }

        // Tick day2 from start of day
        date = document.getElementById(day2.date.format("YYYYMMDD"));
        selectedSlots = [];
        for (i = 0; i <= day2.index; i++) {
          el = date.getElementsByClassName(i)[0];
          if (el.classList.contains("hover")) {
            el.classList.remove("hover");
          } else if (el.classList.contains("tick")) {
            el.classList.remove("tick");
          }
          el.classList.add(action);
          selectedSlots.push(el);
        }
      }
    }
  }, [end, hoveringDate]);

  // useEffect(() => {
  //   console.log(document.getElementById("0").getBoundingClientRect());
  //   console.log(document.getElementById("1").getBoundingClientRect());
  //   console.log(document.getElementById("2").getBoundingClientRect());
  //   console.log(document.getElementById("3").getBoundingClientRect());
  //   console.log(document.getElementById("4").getBoundingClientRect());
  //   console.log(document.getElementById("5").getBoundingClientRect());
  //   console.log(document.getElementById("6").getBoundingClientRect());
  // }, [end]);

  return (
    <div className="days-wrapper" ref={wrapperRef}>
      <div className="timeGrids-container" ref={containerRef}>
        {dayMatrics.map((dayMatric) => dayMatric)}
      </div>
    </div>
  );
};

DayBlocks.propTypes = {};

const mapStateToProps = (state) => {
  return {
    time: state.time,
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, { setDate })(DayBlocks);
