import React, { useState, useEffect } from "react";
// import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";

import { addEvent } from "../../actions/eventActions";

import M from "materialize-css/dist/js/materialize.min.js";

import moment from "moment";

const AddLogModal = ({
  event: {
    event: { start, end },
  },
  addEvent,
}) => {
  // _id, title, start, end, estimate hours (optional)
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Set values
    setStartDate(moment(start).format("MMM DD, YYYY"));

    var elem = document.getElementsByName("startDate")[0];
    elem.focus();
    var instance = M.Datepicker.init(elem);
    // Highlight instance
    instance.setDate(new Date(start));
  }, [start]);

  useEffect(() => {
    // Set values
    setEndDate(moment(end).format("MMM DD, YYYY"));

    var elem = document.getElementsByName("endDate")[0];
    elem.focus();
    var instance = M.Datepicker.init(elem);
    // Highlight instance
    instance.setDate(new Date(end));
  }, [end]);

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "Please enter a title" });
    } else {
      // Check if startDate is before endDate

      const newEvent = {
        title,
        start: moment(startDate, "MMM DD, YYYY").toDate(),
        end: moment(endDate, "MMM DD, YYYY").toDate(),
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
              id="startDate"
              type="text"
              name="startDate"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                console.log(startDate);
              }}
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
              type="text"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
};

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, { addEvent })(AddLogModal);
