import React, { Component } from "react";
import moment, { min } from "moment";

import { connect } from "react-redux";
import {
  setCurrentEventTypesListItem,
  setErasing,
} from "../../actions/eventTypesListItemActions";
import { setDays, setPrevTime, clearInterval } from "../../actions/timeActions";

import MarkDown from "./MarkDown";
import TimeSlot from "./DayList/TimeSlot";
import DayList from "./DayList";
import EventTypesList from "./EventTypesList";

import "./style.css";
import PropTypes from "prop-types";

class DayBlocks extends Component {
  constructor(props) {
    super(...arguments);

    var min = moment().startOf("year").subtract(1, "year");
    var max = moment().startOf("year").add(1, "year");

    this.state = {
      TimeSlot,

      min: min,
      max: max,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    const { time, eventTypesListItem } = this.props;

    if (time.end != prevProps.time.end || time.start != prevProps.time.start) {
      if (time.isDragSelect && time.start != null && time.end != null) {
        this.selectRange(time.start, time.end, true);
        this.props.setPrevTime({ start: time.start, end: time.end });
      } else if (time.isDragSelect && time.prevTime != null) {
        this.selectRange(time.prevTime.start, time.prevTime.end, false);
        this.props.setPrevTime(null);
      }
    } else if (eventTypesListItem != prevProps.eventTypesListItem) {
      if (!time.isDragSelect && time.start != null && time.end != null) {
        if (
          eventTypesListItem.currentEventTypesListItem !=
            prevProps.eventTypesListItem.currentEventTypesListItem &&
          time.prevTime
        ) {
          this.paintRange(
            time.start,
            time.end,
            eventTypesListItem.currentEventTypesListItem._id
          );
          this.selectRange(time.prevTime.start, time.prevTime.end, false);
          this.props.setPrevTime(null);
        } else if (
          eventTypesListItem.erasing != prevProps.eventTypesListItem.erasing
        ) {
          this.eraseRange(time.start, time.end);
          setErasing();
        }
      }

      clearInterval();
    }
  }

  paintRange(date1, date2, eventId) {
    let startDate, endDate;
    if (this.isBefore(date1, date2)) {
      startDate = date1;
      endDate = date2;
    } else {
      startDate = date2;
      endDate = date1;
    }

    let newDays = [...this.props.time.days]; // shallow copy

    let startIndex = startDate.date.diff(this.state.min, "days");
    let endIndex = endDate.date.diff(this.state.min, "days");
    for (let i = startIndex; i <= endIndex; i++) {
      if (startIndex == endIndex) {
        for (let j = startDate.index; j <= endDate.index; j++) {
          newDays[i].timeslots[j].eventId = eventId;
        }
      } else {
        if (i == startIndex) {
          for (let j = startDate.index; j < 96; j++) {
            newDays[i].timeslots[j].eventId = eventId;
          }
        } else if (i == endIndex) {
          for (let j = 0; j <= endDate.index; j++) {
            newDays[i].timeslots[j].eventId = eventId;
          }
        } else {
          for (let j = 0; j < 96; j++) {
            newDays[i].timeslots[j].eventId = eventId;
          }
        }
      }
    }
    this.props.setDays(newDays);
  }

  selectRange(date1, date2, isTrue) {
    let newDays = [...this.props.time.days]; // shallow copy

    // clear previous select (handle with user drag to decrease select amount)
    if (isTrue && this.props.time.prevTime != null) {
      let prevDate1 = this.props.time.prevTime.start;
      let prevDate2 = this.props.time.prevTime.end;

      let startDate, endDate;
      if (this.isBefore(prevDate1, prevDate2)) {
        startDate = prevDate1;
        endDate = prevDate2;
      } else {
        startDate = prevDate2;
        endDate = prevDate1;
      }

      let startIndex = startDate.date.diff(this.state.min, "days");
      let endIndex = endDate.date.diff(this.state.min, "days");
      for (let i = startIndex; i <= endIndex; i++) {
        if (startIndex == endIndex) {
          for (let j = startDate.index; j <= endDate.index; j++) {
            newDays[i].timeslots[j].isSelected = false;
          }
        } else {
          if (i == startIndex) {
            for (let j = startDate.index; j < 96; j++) {
              newDays[i].timeslots[j].isSelected = false;
            }
          } else if (i == endIndex) {
            for (let j = 0; j <= endDate.index; j++) {
              newDays[i].timeslots[j].isSelected = false;
            }
          } else {
            for (let j = 0; j < 96; j++) {
              newDays[i].timeslots[j].isSelected = false;
            }
          }
        }
      }
    }

    let startDate, endDate;
    if (this.isBefore(date1, date2)) {
      startDate = date1;
      endDate = date2;
    } else {
      startDate = date2;
      endDate = date1;
    }

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
    this.props.setDays(newDays);
  }

  eraseRange(date1, date2) {
    let startDate, endDate;
    if (this.isBefore(date1, date2)) {
      startDate = date1;
      endDate = date2;
    } else {
      startDate = date2;
      endDate = date1;
    }

    let newDays = [...this.props.time.days]; // shallow copy

    let startIndex = startDate.date.diff(this.state.min, "days");
    let endIndex = endDate.date.diff(this.state.min, "days");
    for (let i = startIndex; i <= endIndex; i++) {
      if (startIndex == endIndex) {
        for (let j = startDate.index; j <= endDate.index; j++) {
          newDays[i].timeslots[j].isSelected = false;
          newDays[i].timeslots[j].eventId = null;
        }
      } else {
        if (i == startIndex) {
          for (let j = startDate.index; j < 96; j++) {
            newDays[i].timeslots[j].isSelected = false;
            newDays[i].timeslots[j].eventId = null;
          }
        } else if (i == endIndex) {
          for (let j = 0; j <= endDate.index; j++) {
            newDays[i].timeslots[j].isSelected = false;
            newDays[i].timeslots[j].eventId = null;
          }
        } else {
          for (let j = 0; j < 96; j++) {
            newDays[i].timeslots[j].isSelected = false;
            newDays[i].timeslots[j].eventId = null;
          }
        }
      }
    }
    this.props.setDays(newDays);
  }

  isBefore(date1, date2) {
    if (date1.date.diff(date2.date, "days") > 0) {
      return false;
    } else if (date1.date.diff(date2.date, "days") < 0) {
      return true;
    } else if (date1.index > date2.index) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="days-wrapper">
        <div className="timeGrids-container">
          <DayList
            days={this.props.time.days}
            TimeSlot={this.state.TimeSlot}
            min={this.state.min}
            max={this.state.max}
          />
        </div>
        <EventTypesList height={"100%"} />
        <MarkDown />
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

export default connect(mapStateToProps, {
  setCurrentEventTypesListItem,
  setDays,
  setPrevTime,
  clearInterval,
})(DayBlocks);
