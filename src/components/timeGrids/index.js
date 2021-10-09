import React, { Component, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import moment, { min } from "moment";

import TimeSlot from "./DayList/TimeSlot";

import DayList from "./DayList";
import EventTypesList from "./EventTypesList";

import "./style.css";
import PropTypes from "prop-types";

class DayBlocks extends Component {
  constructor(props) {
    super(...arguments);

    this.updateDays();

    this.state = {
      TimeSlot,
    };
  }

  updateDays(props = this.props) {
    const days = [];
    var min = moment().startOf("year").subtract(1, "year");
    var max = moment().startOf("year").add(1, "year");
    let year,
      month,
      day,
      isSelected = false,
      startDate = null,
      endDate = null;
    for (year = min.year(); year <= max.year(); year++) {
      for (month = 1; month <= 12; month++) {
        for (
          day = 1;
          day <= moment(year + ":" + month, "YYYY:MM").daysInMonth();
          day++
        ) {
          days.push({ year, month, day, isSelected, startDate, endDate });
        }
      }
    }
    this.days = days;
    this.min = min;
    this.max = max;
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.time.final && this.props.time != prevProps.time) {
      console.log("New");
      console.log(this.props.time);
      console.log("prev");
      console.log(prevProps.time);
      console.log(this.props.time.start.date);
      console.log(this.props.time.end.date);

      let startDate, endDate;
      if (
        this.props.time.start.date.diff(this.props.time.end.date, "days") > 0
      ) {
        startDate = this.props.time.end;
        endDate = this.props.time.start;
      } else {
        startDate = this.props.time.start;
        endDate = this.props.time.end;
      }

      const newDays = this.days.slice();
      for (
        var i = startDate.date.diff(this.min, "days");
        i <= endDate.date.diff(this.min, "days");
        i++
      ) {
        newDays[i] = {
          ...newDays[i],
          isSelected: true,
          startDate: startDate,
          endDate: endDate,
        };
      }

      this.setState({ days: newDays });
      console.log(this.days[i]);
    }
  }

  render() {
    return (
      <div className="days-wrapper">
        <div className="timeGrids-container">
          <DayList
            days={this.days}
            TimeSlot={this.TimeSlot}
            min={this.min}
            max={this.max}
          />
        </div>
        <EventTypesList height={this.height} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

export default connect(mapStateToProps, {})(DayBlocks);
