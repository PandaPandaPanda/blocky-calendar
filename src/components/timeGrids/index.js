import React, { Component, useState, useEffect, useRef } from "react";
import moment, { min } from "moment";

import { connect } from "react-redux";
import {
  setCurrentEventTypesListItem,
  setErasing,
} from "../../actions/eventTypesListItemActions";

import MarkDown from "./MarkDown";
import TimeSlot from "./DayList/TimeSlot";
import DayList from "./DayList";
import EventTypesList from "./EventTypesList";

import "./style.css";
import PropTypes from "prop-types";

const deepCopy = (arr) => {
  let copy = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copy.push(deepCopy(elem));
    } else {
      copy.push(elem);
    }
  });
  return copy;
};

class DayBlocks extends Component {
  constructor(props) {
    super(...arguments);

    const days = [];
    var min = moment().startOf("year").subtract(1, "year");
    var max = moment().startOf("year").add(1, "year");
    for (let year = min.year(); year <= max.year(); year++) {
      for (let month = 1; month <= 12; month++) {
        for (
          let day = 1;
          day <= moment(year + ":" + month, "YYYY:MM").daysInMonth();
          day++
        ) {
          let timeslots = [];
          let isSelected = false;
          let property = null;
          for (let index = 0; index < 96; index++) {
            timeslots.push({ index, isSelected, property });
          }
          days.push({
            year,
            month,
            day,
            timeslots,
          });
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
    const { time, eventTypesListItem } = this.props;
    if (time != prevProps.time) {
      if (time.final && time.start != null && time.end != null) {
        console.log("select once");
        this.selectRange(time.start, time.end, true);
        this.setState({ prevTime: time });
      } else if (!time.final && this.state.prevTime != null) {
        this.selectRange(
          this.state.prevTime.start,
          this.state.prevTime.end,
          false
        );
        this.setState({ prevTime: null });
      }
    } else if (eventTypesListItem != prevProps.eventTypesListItem) {
      if (
        eventTypesListItem.currentEventTypesListItem !=
          prevProps.eventTypesListItem.currentEventTypesListItem &&
        time.final &&
        time.start != null &&
        time.end != null
      ) {
        console.log("paint once");
        this.paintRange(
          time.start,
          time.end,
          eventTypesListItem.currentEventTypesListItem
        );
        this.selectRange(
          this.state.prevTime.start,
          this.state.prevTime.end,
          false
        );
        this.setState({ prevTime: null });
      } else if (
        eventTypesListItem.erasing != prevProps.eventTypesListItem.erasing &&
        time.final &&
        time.start != null &&
        time.end != null
      ) {
        this.eraseRange(time.start, time.end);
        setErasing();
      }
    }
  }

  paintRange(date1, date2, property) {
    let startDate, endDate;
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

    let newDays = deepCopy(this.state.days);

    let startIndex = startDate.date.diff(this.state.min, "days");
    let endIndex = endDate.date.diff(this.state.min, "days");
    for (let i = startIndex; i <= endIndex; i++) {
      if (startIndex == endIndex) {
        for (let j = startDate.index; j <= endDate.index; j++) {
          newDays[i].timeslots[j].property = property;
        }
      } else {
        if (i == startIndex) {
          for (let j = startDate.index; j < 96; j++) {
            newDays[i].timeslots[j].property = property;
          }
        } else if (i == endIndex) {
          for (let j = 0; j <= endDate.index; j++) {
            newDays[i].timeslots[j].property = property;
          }
        } else {
          for (let j = 0; j < 96; j++) {
            newDays[i].timeslots[j].property = property;
          }
        }
      }
    }
    console.log(newDays);
    this.setState({ days: newDays });
  }

  selectRange(date1, date2, isTrue) {
    let startDate, endDate;
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

    let newDays = deepCopy(this.state.days);

    let startIndex = startDate.date.diff(this.state.min, "days");
    let endIndex = endDate.date.diff(this.state.min, "days");
    for (let i = startIndex; i <= endIndex; i++) {
      if (startIndex == endIndex) {
        for (let j = startDate.index; j <= endDate.index; j++) {
          newDays[i].timeslots[j].isSelected = isTrue;
        }
      } else {
        if (i == startIndex) {
          for (let j = startDate.index; j < 96; j++) {
            newDays[i].timeslots[j].isSelected = isTrue;
          }
        } else if (i == endIndex) {
          for (let j = 0; j <= endDate.index; j++) {
            newDays[i].timeslots[j].isSelected = isTrue;
          }
        } else {
          for (let j = 0; j < 96; j++) {
            newDays[i].timeslots[j].isSelected = isTrue;
          }
        }
      }
    }
    this.setState({ days: newDays });
  }

  eraseRange(date1, date2) {
    let startDate, endDate;
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

    let newDays = deepCopy(this.state.days);

    let startIndex = startDate.date.diff(this.state.min, "days");
    let endIndex = endDate.date.diff(this.state.min, "days");
    for (let i = startIndex; i <= endIndex; i++) {
      if (startIndex == endIndex) {
        for (let j = startDate.index; j <= endDate.index; j++) {
          newDays[i].timeslots[j].isSelected = false;
          newDays[i].timeslots[j].property = null;
        }
      } else {
        if (i == startIndex) {
          for (let j = startDate.index; j < 96; j++) {
            newDays[i].timeslots[j].isSelected = false;
            newDays[i].timeslots[j].property = null;
          }
        } else if (i == endIndex) {
          for (let j = 0; j <= endDate.index; j++) {
            newDays[i].timeslots[j].isSelected = false;
            newDays[i].timeslots[j].property = null;
          }
        } else {
          for (let j = 0; j < 96; j++) {
            newDays[i].timeslots[j].isSelected = false;
            newDays[i].timeslots[j].property = null;
          }
        }
      }
    }
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
    eventTypesListItem: state.eventTypesListItem,
  };
};

export default connect(mapStateToProps, { setCurrentEventTypesListItem })(
  DayBlocks
);
