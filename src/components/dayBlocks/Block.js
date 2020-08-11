import React, { useState } from "react";
import PropTypes from "prop-types";

// index ranges from 0 to 95 representing different times in a day
const Block = ({ index }) => {
  const [ticked, setTicked] = useState(false);

  const onTicked = () => {
    setTicked((current) => !current);
  };

  return (
    <div
      className={`block-container ${ticked && "tick"}`}
      onClick={() => onTicked()}
    ></div>
  );
};

Block.propTypes = {};

export default Block;
