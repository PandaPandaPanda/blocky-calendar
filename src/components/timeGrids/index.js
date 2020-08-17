import React, { Component, useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import moment from "moment";

import TimeSlot from "./TimeSlot";

import DayList from "./DayList";

import { setDate } from "../../actions/navbarActions";

import "./style.css";
import PropTypes from "prop-types";

class DayBlocks extends Component {
  constructor(props) {
    super(...arguments);

    this.updateDays(props);

    this.state = { TimeSlot };
  }

  updateDays() {
    const min = moment().startOf().subtract(1, "year");
    const max = moment().startOf().add(1, "year");

    const days = [];
    let year, month, day;
    for (year = min.year(); year <= max.year(); year++) {
      for (month = 1; month <= 12; month++) {
        for (
          day = 1;
          day <= moment(year + month, "YYYYMM").daysInMonth();
          day++
        ) {
          days.push({ day, month, year });
        }
      }
    }

    this.days = days;
  }

  render() {
    return (
      <div className="days-wrapper">
        <div className="timeGrids-container">
          <DayList days={this.days} TimeSlot={TimeSlot} />
        </div>
      </div>
    );
  }
}

export default DayBlocks;
