import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

import TimeSlotMatrics from "./TimeSlotMatrics";

import "./style.css";
import PropTypes from "prop-types";

const DayBlocks = ({ time: { start, end } }) => {
  useEffect(() => {
    if (end !== null) {
      var day1 = start,
        day2 = end;

      // First check which day comes first? Make day1 always the day before
      if (day1.date.isSameOrAfter(day2.date, "day")) {
        if (day1.date.isSame(day2.date, "day") && day1.index > day2.index) {
          // If selection inside same day, compare index
          let temp = day1;
          day1 = day2;
          day2 = temp;
        }
      } else {
        // day1 is the start, day2 is the ending
      }

      if ((day1.date.isSame(day2.date), "day")) {
        const date = document.getElementById(day1.date.format("YYYYMMDD"));
        var selectedSlots = [];
        for (var i = day1.index; i <= day2.index; i++) {
          const el = date.getElementsByClassName(i)[0];
          el.classList.add("tick");
          selectedSlots.push(el);
        }
        console.log();
      } else {
      }
    }
  }, [end]);

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
    <div className="days-wrapper">
      <TimeSlotMatrics date={moment()} />
    </div>
  );
};

DayBlocks.propTypes = {};

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps, {})(DayBlocks);
