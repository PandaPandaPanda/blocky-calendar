import React from "react";
import { connect } from "react-redux";

import { setCurrentEventTypesListItem } from "../../../actions/eventTypesListItemActions.js";
import EventTypesListItem from "./EventTypesListItem";
import "./style.css";

import PropTypes from "prop-types";

const EventTypesList = ({
  event: { events },
  eventTypes: { eventTypes },
  navbar: { viewingDate },
  time: { start, end, final },
  setCurrentEventTypesListItem,
  height,
}) => {
  const onEventTypesListItemClick = (_id, title, color) => {
    if (final == true && start != null && end != null) {
      setCurrentEventTypesListItem({ _id, title, color });
    }
  };

  return (
    <div className="event-types-list-wrapper">
      <div>
        <h6>Temporary</h6>
        {events.map((item) => {
          if (viewingDate.isBetween(item.start, item.end, "day", "[)")) {
            return (
              <EventTypesListItem
                key={item._id + "t"}
                _id={item._id + "t"}
                title={item.title}
                color={item.color}
                onEventTypesListItemClick={onEventTypesListItemClick}
              />
            );
          }
        })}
      </div>
      <div>
        <h6>Recurring</h6>
        {eventTypes.map((item) => (
          <EventTypesListItem
            key={item._id + "r"}
            _id={item._id + "r"}
            title={item.title}
            color={item.color}
            onEventTypesListItemClick={onEventTypesListItemClick}
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
    time: state.time,
  };
};

EventTypesList.propTypes = {};

export default connect(mapStateToProps, { setCurrentEventTypesListItem })(
  EventTypesList
);
