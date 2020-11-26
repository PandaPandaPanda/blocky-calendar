import React, { useState, useEffect, useRef } from "react";
// import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";

import { addEvent } from "../../actions/eventActions";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import moment from "moment";

const AddEventModal = ({
  event: {
    event: { start, end },
  },
  addEvent,
}) => {
  // _id, title, start, end, estimate hours (optional)
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");
  const refStart = useRef("");
  const refEnd = useRef("");

  useEffect(() => {
    var options = {
      defaultDate: new Date(moment(start).format("MMM DD, YYYY")),
      setDefaultDate: true,
    };
    var elem = document.getElementsByName("startDate")[0];
    var instance = M.Datepicker.init(elem, options);
    // instance.open();
    instance.setDate(new Date(moment(start).format("MMM DD, YYYY")));
  }, [start]);

  useEffect(() => {
    var options = {
      defaultDate: new Date(moment(end).format("MMM DD, YYYY")),
      setDefaultDate: true,
    };
    var elem = document.getElementsByName("endDate")[0];
    var instance = M.Datepicker.init(elem, options);
    // instance.open();
    instance.setDate(new Date(moment(end).format("MMM DD, YYYY")));
  }, [end]);

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "Please enter a title" });
    } else {
      // Check if startDate is before endDate

      const newEvent = {
        title,
        start: moment(refStart.current.value, "MMM DD, YYYY").toDate(),
        // Calendar always select the start of the day, add one to makeup for the end date
        end: moment(refEnd.current.value, "MMM DD, YYYY")
          .add(1, "days")
          .toDate(),
        hour: hour ? hour : null,
      };
      addEvent(newEvent);

      M.toast({ html: `Event added` });

      // Clear Fields
      setTitle("");
      setHour("");
    }
  };

  return (
    <div id="add-event-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter A New Event</h4>
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

export default connect(mapStateToProps, { addEvent })(AddEventModal);
