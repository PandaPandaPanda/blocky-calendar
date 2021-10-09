import React from "react";
import { connect } from "react-redux";

import EventTypesListItem from "./EventTypesListItem";

import "./style.css";

import PropTypes from "prop-types";

const EventTypesList = ({
  event: { events },
  eventTypes: { eventTypes },
  navbar: { viewingDate },
  height,
}) => {
  return (
    <div className="event-types-list-wrapper">
      <div>
        <h6>Temporary</h6>
        {events.map((item) => {
          if (viewingDate.isBetween(item.start, item.end, "day", "[)")) {
            return (
              <EventTypesListItem
                key={item.title + "0"}
                title={item.title}
                color={item.color}
              />
            );
          }
        })}
      </div>
      <div>
        <h6>Recurring</h6>
        {eventTypes.map((item) => (
          <EventTypesListItem
            key={item.title + "1"}
            title={item.title}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eventTypes: state.eventTypes,
    event: state.event,
    navbar: state.navbar,
  };
};

EventTypesList.propTypes = {};

export default connect(mapStateToProps, {})(EventTypesList);
