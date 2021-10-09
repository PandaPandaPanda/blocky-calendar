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

    this.state = {
      TimeSlot,
      days: days,
      min: min,
      max: max,
      prevTime: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.time.final && this.props.time != prevProps.time) {
      // let startDate, endDate;
      // if (
      //   this.props.time.start.date.diff(this.props.time.end.date, "days") > 0
      // ) {
      //   startDate = this.props.time.end;
      //   endDate = this.props.time.start;
      // } else {
      //   startDate = this.props.time.start;
      //   endDate = this.props.time.end;
      // }

      this.paintRange(this.props.time.start, this.props.time.end, true);
      // this.paintRange(this.props.time.start, this.props.time.end, true);
      this.setState({ prevTime: this.props.time });
    } else if (!this.props.time.final && this.state.prevTime != null) {
      this.paintRange(
        this.state.prevTime.start,
        this.state.prevTime.end,
        false
      );
      this.setState({ prevTime: null });
    }
    if (this.state.days != prevState.days) {
      // console.log(this.state.days);
    }
  }

  paintRange(date1, date2, isTrue) {
    let startDate, endDate;
    console.log({ date1, date2 });
    if (date1.date.diff(date2.date, "days") > 0) {
      startDate = date2;
      endDate = date1;
    } else if (date1.date.diff(date2.date, "days") < 0) {
      startDate = date1;
      endDate = date2;
    } else {
      if (date1.index > date2.index) {
        startDate = date2;
        endDate = date1;
      } else {
        startDate = date1;
        endDate = date2;
      }
    }

    let newDays = [...this.state.days];
    for (
      let i = startDate.date.diff(this.state.min, "days");
      i <= endDate.date.diff(this.state.min, "days");
      i++
    ) {
      newDays[i] = {
        ...newDays[i],
        isSelected: isTrue,
        startDate: isTrue ? startDate : null,
        endDate: isTrue ? endDate : null,
      };
    }
    console.log(newDays);
    this.setState({ days: newDays });
  }

  render() {
    return (
      <div className="days-wrapper">
        <div className="timeGrids-container">
          <DayList
            days={this.state.days}
            TimeSlot={this.state.TimeSlot}
            min={this.state.min}
            max={this.state.max}
          />
        </div>
        <EventTypesList height={"100%"} />
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
