import React, { useEffect, useState, Fragment } from "react";

import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  resizeEvent,
  setCurrentEvent,
  setEditing,
} from "../../actions/eventActions";

import AddEventModal from "./AddEventModal";
import EditEventModal from "./EditEventModal";

import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import M from "materialize-css";

import "./styles.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const CalendarView = ({
  event: { events },
  navbar: { date },
  resizeEvent,
  setCurrentEvent,
  setEditing,
}) => {
  useEffect(() => {
    M.AutoInit();
  });

  // Resize event
  const onEventResize = ({ event, start, end }) => {
    resizeEvent({ event, start, end });
  };

  // Move event
  const onEventDrop = ({ event, start, end }) => {
    resizeEvent({ event, start, end });
  };

  // New Event
  const newEvent = (event) => {
    setCurrentEvent(event);

    document.getElementById("addEventModalTrigger").click();
  };

  // Update selected event
  const onSelectEvent = (event) => {
    setCurrentEvent(event);

    setEditing();

    document.getElementById("editEventModalTrigger").click();
  };

  return (
    <Fragment>
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          // views={["month", "agenda"]}
          events={events}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          onSelectSlot={newEvent}
          onSelectEvent={onSelectEvent}
          toolbar={false}
          // components={{ toolbar: CustomToolbar }}
          date={moment(date).toDate()}
          // No use, just to dismiss the alert, date selection is handled by datepicker
          onNavigate={() => {}}
          resizable
          selectable
          style={{ height: "90vh" }}
          // messages={{
          //   showMore: (target) => (
          //     <div
          //       style={{ cursor: "pointer" }}
          //       onClick={(e, events) => {
          //         console.log(events);
          //         e.stopPropagation();
          //         e.preventDefault();
          //       }}
          //       className="tooltipped"
          //       data-position="bottom"
          //       data-tooltip={events[0].title}
          //     >
          //       {`+ ${target} more`}
          //     </div>
          //   ),
          // }}
          popup
          // Disbale redirec when cliking date pn calendar
          components={{
            month: {
              dateHeader: ({ date, label }) => {
                return <div>{label}</div>;
              },
            },
          }}
          //         onSelectSlot={this.newEvent}
          //         onDragStart={console.log}
          //         popup={true}
          //         dragFromOutsideItem={
          //           this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
          //         }
          //         onDropFromOutside={this.onDropFromOutside}
          //         handleDragStart={this.handleDragStart}
        />
        <a
          id="editEventModalTrigger"
          href="#edit-event-modal"
          className="modal-trigger"
        ></a>
        <a
          id="addEventModalTrigger"
          href="#add-event-modal"
          className="modal-trigger"
        ></a>
      </div>
      <AddEventModal />
      <EditEventModal />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event,
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, {
  resizeEvent,
  setCurrentEvent,
  setEditing,
})(CalendarView);
