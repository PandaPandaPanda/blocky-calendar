import React, { useState, useEffect, useRef } from "react";
// import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";

import { updateEvent, deleteEvent } from "../../actions/eventActions";

import M from "materialize-css";

import moment from "moment";

const EditEventModal = ({
  event: { event, editing },
  updateEvent,
  deleteEvent,
}) => {
  // _id, title, start, end, estimate hours (optional)
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");
  const refStart = useRef("");
  const refEnd = useRef("");

  // ComponentDidMount
  useEffect(() => {
    if (editing === true) {
      const { start, end } = event;

      document.getElementsByName("title")[1].focus();
      setTitle(event.title);
      // Preload hour input-field only if it exists
      if (event.hour) {
        document.getElementsByName("hour")[1].focus();
        setHour(event.hour);
      }

      var options = {
        defaultDate: new Date(moment(start).format("MMM DD, YYYY")),
        setDefaultDate: true,
      };
      var elem = document.getElementsByName("startDate")[1];
      var instance = M.Datepicker.init(elem, options);
      // instance.open();
      instance.setDate(new Date(moment(start).format("MMM DD, YYYY")));

      var els = document.getElementsByClassName("input-field");
      Array.prototype.forEach.call(els, function (el) {
        // Do stuff here
        el.focus();
      });

      var options = {
        defaultDate: new Date(moment(end).format("MMM DD, YYYY")),
        setDefaultDate: true,
      };
      // First on the list is AddEvenModal, then its EditEventModal
      var elem = document.getElementsByName("endDate")[1];
      var instance = M.Datepicker.init(elem, options);
      // instance.open();
      instance.setDate(new Date(moment(end).format("MMM DD, YYYY")));
    }
  }, [editing]);

  const onDelete = () => {
    deleteEvent(event._id);
  };

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "Please enter a title" });
    } else {
      // Check if startDate is before endDate

      const newEvent = {
        _id: event._id,
        title,
        start: moment(refStart.current.value, "MMM DD, YYYY").toDate(),
        end: moment(refEnd.current.value, "MMM DD, YYYY").toDate(),
        hour: hour ? hour : null,
      };
      updateEvent(newEvent);

      M.toast({ html: `Event Updated` });

      // Clear Fields
      setTitle("");
      setHour("");
    }
  };

  return (
    <div id="edit-event-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Event</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title" className="active">
              Event Title
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="number"
              name="hour"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
            <label htmlFor="hour" className="active">
              Estimate Hours to Complete (Optional)
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              ref={refStart}
              type="text"
              name="startDate"
              // value={startDate}
              // onChange={(e) => setStartDate(e.target.value)}
              className="datepicker"
            />
            <label htmlFor="startDate" className="active">
              Start Date
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              ref={refEnd}
              type="text"
              name="endDate"
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
              className="datepicker"
            />
            <label htmlFor="endDate" className="active">
              End Date
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onDelete}
          className="modal-close waves-effect waves-green btn-flat"
        >
          Delete
        </a>
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
  maxHeight: "100%",
  overflow: "visible",
};

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, { updateEvent, deleteEvent })(
  EditEventModal
);
