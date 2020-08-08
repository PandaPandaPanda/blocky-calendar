import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resizeEvent, setEventDuration } from "../../actions/eventActions";

import AddEventModal from "./AddEventModal";

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

const CalendarView = ({ event: { events }, resizeEvent, setEventDuration }) => {
  // const [draggedEvent, setdraggedEvent] = useState();

  // const handleDragStart = (event) => {
  //   setDraggedEvent(event);
  // };

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
    console.log(event.start + " " + event.end);

    setEventDuration(event);

    document.getElementById("addEventModalTrigger").click();

    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
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
        onSelectSlot={newEvent}
        resizable
        selectable
        style={{ height: "100vh" }}

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
      <AddEventModal />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, { resizeEvent, setEventDuration })(
  CalendarView
);
