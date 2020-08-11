import React from "react";
import moment from "moment";

import TimeSlotMatrics from "./TimeSlotMatrics";

import "./style.css";
import PropTypes from "prop-types";

const DayBlocks = (props) => {
  return (
    <div className="days-wrapper">
      <TimeSlotMatrics date={moment().subtract(1, "day")} />
      <TimeSlotMatrics date={moment()} />
      <TimeSlotMatrics date={moment().add(1, "day")} />
    </div>
  );
};

DayBlocks.propTypes = {};

export default DayBlocks;
