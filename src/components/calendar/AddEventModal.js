import React, { useState } from "react";
// import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEvent } from "../../actions/eventActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({
  event: {
    event: { start, end },
  },
  addEvent,
}) => {
  // _id, title, start, end, estimate hours (optional)
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "Please enter a title" });
    } else {
      const newEvent = { title, start, end, hour: hour ? hour : null };
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
