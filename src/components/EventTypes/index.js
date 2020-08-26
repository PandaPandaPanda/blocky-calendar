import React from "react";
import { connect } from "react-redux";

import AddBtn from "./AddBtn";
import AddEventTypeModal from "./AddEventTypeModal";
import EditEventTypeModal from "./EditEventTypeModal";
import EventTypeItem from "./EventTypeItem";

import "./style.css";

import PropTypes from "prop-types";

const EventTypes = ({ eventTypes: { eventTypes } }) => {
  return (
    <div className="container">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>Event Types</h4>
        </li>
        {eventTypes.map((eventType) => (
          <EventTypeItem
            color={eventType.color}
            title={eventType.title}
            _id={eventType._id}
          />
        ))}
      </ul>
      <AddEventTypeModal />
      <EditEventTypeModal />
      <AddBtn />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eventTypes: state.eventTypes,
  };
};

EventTypes.propTypes = {};

export default connect(mapStateToProps, {})(EventTypes);
