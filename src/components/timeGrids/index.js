import React, { Component, useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import moment, { min } from "moment";

import TimeSlot from "./TimeSlot";

import DayList from "./DayList";

import { setDate } from "../../actions/navbarActions";

import "./style.css";
import PropTypes from "prop-types";

class DayBlocks extends Component {
  constructor(props) {
    super(...arguments);

    this.updateDays();

    this.state = {
      TimeSlot,

      // width= 400, };
    };
  }

  updateDays(props = this.props) {
    const days = [];
    var min = moment().startOf("year").subtract(1, "year");
    var max = moment().startOf("year").add(1, "year");
    console.log(min, max);
    let year, month, day;
    for (year = min.year(); year <= max.year(); year++) {
      for (month = 1; month <= 12; month++) {
        for (
          day = 1;
          day <= moment(year + ":" + month, "YYYY:MM").daysInMonth();
          day++
        ) {
          days.push({ day, month, year });
        }
      }
    }

    this.days = days;
    this.min = min;
    this.max = max;
    this.height = 690;
    this.rowHeight = 685;
  }

  render() {
    return (
      <div className="days-wrapper">
        <div className="timeGrids-container">
          <DayList
            ref={(instance) => {
              this._DayList = instance;
            }}
            days={this.days}
            TimeSlot={this.TimeSlot}
            min={this.min}
            max={this.max}
            height={this.height}
            rowHeight={this.rowHeight}
          />
        </div>
      </div>
    );
  }
}

export default DayBlocks;
