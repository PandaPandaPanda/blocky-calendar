import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Block from "./Block";

const DayWrapper = ({ date }) => {
  const d = date.format("DD"),
    m = date.format("MMM"),
    y = date.format("YYYY");
  const [times, setTime] = useState([]);
  const [blocks, setBlocks] = useState([]);

  // Display the time in a day
  for (var i = 0; i < 24; i++) {
    times.push(<div key={i}>{i + ":00"}</div>);
  }

  // Individual 15min time blocks
  for (var i = 0; i < 96; i++) {
    blocks.push(<Block key={i} index={i} />);
  }

  return (
    <div className="day-wrapper">
      <div className="date-label">
        <span>{m}</span>
        <span>{d}</span>
        <span>{y}</span>
      </div>
      <div className="time-label">{times.map((time) => time)}</div>
      <div className="block-wrapper">{blocks.map((block) => block)}</div>
    </div>
  );
};

DayWrapper.propTypes = {};

export default DayWrapper;
