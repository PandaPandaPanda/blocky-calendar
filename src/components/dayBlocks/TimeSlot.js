import React, { useState } from "react";
import PropTypes from "prop-types";

// index ranges from 0 to 95 representing different times in a day
const Block = ({}) => {
  const [ticked, setTicked] = useState(false);

  const onTicked = () => {
    setTicked((current) => !current);
  };

  return (
    <div
      className={`timeslot-container ${ticked && "tick"}`}
      onClick={() => onTicked()}
    >
      a
    </div>
  );
};

Block.propTypes = {};

export default Block;
