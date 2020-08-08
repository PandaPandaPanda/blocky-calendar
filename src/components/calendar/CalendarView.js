import React from "react";
import { connect } from "react-redux";
import { resizeEvent } from "../../actions/eventActions";

import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./styles.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const CalendarView = ({ event: { events }, resizeEvent }) => {
  // Resize event
  const onEventResize = (data) => {
    resizeEvent(data);
  };

  // Move event
  const onEventDrop = (data) => {
    resizeEvent(data);
    console.log(data);
  };

  return (
    <div className="App">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: "100vh" }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, { resizeEvent })(CalendarView);
