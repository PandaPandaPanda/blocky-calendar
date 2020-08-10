import React from "react";
import moment from "moment";

import DayWrapper from "./DayWrapper";

import "./style.css";
import PropTypes from "prop-types";

const DayBlocks = (props) => {
  return (
    <div className="days-wrapper">
      <DayWrapper date={moment().subtract(1, "day")} />
      <DayWrapper date={moment()} />
      <DayWrapper date={moment().add(1, "day")} />
    </div>
  );
};

DayBlocks.propTypes = {};

export default DayBlocks;
