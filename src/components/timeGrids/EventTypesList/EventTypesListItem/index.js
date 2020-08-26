import React, { useState } from "react";

import "./style.css";

import PropTypes from "prop-types";

const EventTypesListItem = ({ title, color }) => {
  const [hover, setHover] = useState(false);

  const itemStyle = {
    display: "block",
    width: "8rem",
    margin: "0.5rem",
    border: "2px solid " + color,
    padding: "0 0.5rem 0",
    letterSpacing: "0.5px",
    color: color,
    backgroundColor: "white",
    transition: "all 0.25s ease-in-out",
  };

  const itemHoverStyle = {
    display: "block",
    width: "8rem",
    margin: "0.5rem",
    border: "2px solid " + color,
    padding: "0 0.5rem 0",
    letterSpacing: "0.5px",
    transition: "all 0.25s ease-in-out",
    backgroundColor: color,
    color: "white",
  };

  var style;
  if (hover) {
    style = itemHoverStyle;
  } else {
    style = itemStyle;
  }

  return (
    <div className="event-types-list-item-wrapper">
      <a
        //eslint-dsiable-next-line
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
      </a>
    </div>
  );
};

EventTypesListItem.propTypes = {};

export default EventTypesListItem;
