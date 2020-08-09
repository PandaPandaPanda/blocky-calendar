import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import "./styles.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const CalendarView = ({
  event: { events, event },
  resizeEvent,
  setCurrentEvent,
  setEditing,
}) => {
  const [day, setDay] = useState(new Date(moment().format()));

  useEffect(() => {
    // Initializes Materialize js
    M.AutoInit();
  }, []);

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
    <div className="App">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        views={["month", "agenda"]}
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        onSelectSlot={newEvent}
        onSelectEvent={onSelectEvent}
        // components={{ toolbar: CustomToolbar }}
        date={new Date(moment(day).format())}
        onNavigate={(day) => {
          setDay(day);
        }}
        resizable
        selectable
        style={{ height: "91vh" }}

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
        id="addEventModalTrigger"
        href="#add-event-modal"
        className="modal-trigger"
      ></a>
      <a
        id="editEventModalTrigger"
        href="#edit-event-modal"
        className="modal-trigger"
      ></a>
      <AddEventModal />
      <EditEventModal />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, {
  resizeEvent,
  setCurrentEvent,
  setEditing,
})(CalendarView);

class CustomToolbar extends React.Component {
  render() {
    const navigate = {
      PREVIOUS: "PREV",
      NEXT: "NEXT",
      TODAY: "TODAY",
      DATE: "DATE",
    };
    return (
      <div className="rbc-toolbar" style={{ display: "none" }}>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate("TODAY")}>
            today
          </button>
          <button type="button" onClick={() => this.navigate("PREV")}>
            back
          </button>
          <button type="button" onClick={() => this.navigate("NEXT")}>
            next
          </button>
        </span>
        <span className="rbc-toolbar-label">{this.props.label}</span>
      </div>
    );
  }

  navigate = (action) => {
    console.log(action);

    this.props.onNavigate(action);
  };
}
