import React from "react";
import { connect } from "react-redux";

import {
  setCurrentEventTypesListItem,
  setErasing,
} from "../../../actions/eventTypesListItemActions.js";
import EventTypesListItem from "./EventTypesListItem";
import "./style.css";

import PropTypes from "prop-types";

const EventTypesList = ({
  event: { events },
  eventTypes: { eventTypes },
  navbar: { viewingDate },
  time: { start, end, isDragSelect },
  setCurrentEventTypesListItem,
  setErasing,
  height,
}) => {
  const onEventTypesListItemClick = (_id, title, color) => {
    if (isDragSelect == false && start != null && end != null) {
      setCurrentEventTypesListItem({ _id, title, color });
    }
  };

  return (
    <div className="event-types-list-wrapper">
      <div>
        <h5>Temporary</h5>
        {events.map((item) => {
          if (viewingDate.isBetween(item.start, item.end, "day", "[)")) {
            return (
              <EventTypesListItem
                key={item._id}
                _id={item._id}
                title={item.title}
                color={item.color}
                onEventTypesListItemClick={onEventTypesListItemClick}
              />
            );
          }
        })}
      </div>
      <div>
        <h5>Recurring</h5>
        {eventTypes.map((item) => (
          <EventTypesListItem
            key={item._id}
            _id={item._id}
            title={item.title}
            color={item.color}
            onEventTypesListItemClick={onEventTypesListItemClick}
          />
        ))}
        <h5>Tools</h5>
        <EventTypesListItem
          _id={"eraser"}
          title={"Eraser"}
          color={"#000000"}
          onEventTypesListItemClick={setErasing}
        />
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

export default connect(mapStateToProps, {
  setCurrentEventTypesListItem,
  setErasing,
})(EventTypesList);
