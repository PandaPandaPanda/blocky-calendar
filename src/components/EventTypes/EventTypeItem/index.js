import React from "react";
import { connect } from "react-redux";

import { setCurrentEventType } from "../../../actions/eventTypesActions";

import PropTypes from "prop-types";

import "./style.css";

const EventTypeItem = ({ title, color, _id, setCurrentEventType }) => {
  return (
    <li class="collection-item">
      <div>
        <span className="dot" style={{ backgroundColor: color }} />
        <span className="content">{title}</span>
        <a
          href="#edit-event-type-modal"
          className="modal-trigger secondary-content"
          onClick={() => setCurrentEventType({ title, color, _id })}
        >
          <i class="material-icons">edit</i>
        </a>
      </div>
    </li>
  );
};

EventTypeItem.propTypes = {};

export default connect(null, { setCurrentEventType })(EventTypeItem);
