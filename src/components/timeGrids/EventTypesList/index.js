import React from "react";
import { connect } from "react-redux";

import EventTypesListItem from "./EventTypesListItem";

import "./style.css";

import PropTypes from "prop-types";

const EventTypesList = ({ eventTypes: { eventTypes }, height }) => {
  return (
    <div className="event-types-list-wrapper">
      {eventTypes.map((item) => (
        <EventTypesListItem title={item.title} color={item.color} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eventTypes: state.eventTypes,
  };
};

EventTypesList.propTypes = {};

export default connect(mapStateToProps, {})(EventTypesList);
