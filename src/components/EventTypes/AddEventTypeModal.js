import React, { useState, useEffect, useRef } from "react";
// import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";

import { addEventType } from "../../actions/eventTypesActions";

import { BlockPicker } from "react-color";

import M from "materialize-css";

import "./style.css";

const AddEventTypeModal = ({ eventTypes: { eventTypes }, addEventType }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#e6ff80");

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "Please enter a title" });
    } else {
      // Check if startDate is before endDate

      let isUnique = true;

      eventTypes.map((eventType) => {
        if (eventType.title == title) {
          isUnique = false;
        }
      });

      if (isUnique) {
        const newEventType = {
          title: title,
          color: color,
        };

        addEventType(newEventType);

        M.toast({ html: `Event Type Added` });
      } else {
        M.toast({ html: `Duplicating Event Type` });
      }

      // Clear Fields
      setTitle("");
      setColor("#e6ff80");
    }
  };

  return (
    <div id="add-event-type-modal" className="modal">
      <div className="modal-content">
        <h4>Enter A New Event Type</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title" className="active">
              Title
            </label>
          </div>
        </div>

        <div className="row">
          <BlockPicker
            width="100%"
            onChangeComplete={(color) => setColor(color.hex)}
            color={color}
            colors={[
              "#FF6633",
              "#FFB399",
              "#FF33FF",
              "#FFFF99",
              "#00B3E6",
              "#E6B333",
              "#3366E6",
              "#999966",
              "#99FF99",
              "#B34D4D",
              "#80B300",
              "#809900",
              "#E6B3B3",
              "#6680B3",
              "#66991A",
              "#FF99E6",
              "#CCFF1A",
              "#FF1A66",
              "#E6331A",
              "#33FFCC",
              "#66994D",
              "#B366CC",
              "#4D8000",
              "#B33300",
              "#CC80CC",
              "#66664D",
              "#991AFF",
              "#E666FF",
              "#4DB3FF",
              "#1AB399",
              "#E666B3",
              "#33991A",
              "#CC9999",
              "#B3B31A",
              "#00E680",
              "#4D8066",
              "#809980",
              "#E6FF80",
              "#1AFF33",
              "#999933",
              "#FF3380",
              "#CCCC00",
              "#66E64D",
              "#4D80CC",
              "#9900B3",
              "#E64D66",
              "#4DB380",
              "#FF4D4D",
              "#99E6E6",
              "#6666FF",
            ]}
          />
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

const mapStateToProps = (state) => {
  return {
    eventTypes: state.eventTypes,
  };
};

export default connect(mapStateToProps, { addEventType })(AddEventTypeModal);
