import React, { useState, useEffect, useRef } from "react";
// import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";

import { updateEvent } from "../../actions/eventActions";

import M from "materialize-css/dist/js/materialize.min.js";

import moment from "moment";

const EditEventModal = ({
  event: {
    event: { _id, title, hour, start, end },
    editing,
  },
  updateEvent,
}) => {
  // _id, title, start, end, estimate hours (optional)
  const [titleState, setTitle] = useState("");
  const [hourState, setHour] = useState("");
  const refStart = useRef("");
  const refEnd = useRef("");

  // ComponentDidMount
  useEffect(() => {
    setTitle(title);
    setHour(hour);

    var els = document.getElementsByClassName("input-field");
    Array.prototype.forEach.call(els, function (el) {
      // Do stuff here
      el.focus();
    });
  }, [editing]);

  useEffect(() => {
    var options = {
      defaultDate: new Date(moment(start).format("MMM DD, YYYY")),
      setDefaultDate: true,
    };
    var elem = document.getElementsByName("startDate")[0];
    var instance = M.Datepicker.init(elem, options);
    // instance.open();
    instance.setDate(new Date(moment(start).format("MMM DD, YYYY")));
  }, [start, editing]);

  useEffect(() => {
    var options = {
      defaultDate: new Date(moment(end).format("MMM DD, YYYY")),
      setDefaultDate: true,
    };
    var elem = document.getElementsByName("endDate")[0];
    var instance = M.Datepicker.init(elem, options);
    // instance.open();
    instance.setDate(new Date(moment(end).format("MMM DD, YYYY")));
  }, [end, editing]);

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "Please enter a title" });
    } else {
      // Check if startDate is before endDate

      const newEvent = {
        titleState,

        start: moment(refStart.current.value, "MMM DD, YYYY").toDate(),
        end: moment(refEnd.current.value, "MMM DD, YYYY")
          .add(1, "days")
          .toDate(),
        hour: hourState ? hourState : null,
      };
      updateEvent(newEvent);

      M.toast({ html: `Event added` });

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

export default connect(mapStateToProps, { updateEvent })(EditEventModal);
