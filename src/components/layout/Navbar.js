import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setDate } from "../../actions/navbarActions";

import moment from "moment";
import M from "materialize-css/dist/js/materialize.min.js";
import "react-datez/dist/css/react-datez.css";
import { ReactDatez } from "react-datez";

import "./style.css";
import PropTypes from "prop-types";

const Navbar = ({ navbar: { date: selectedDate }, setDate }) => {
  // For now hardcoded the date range, congruen to DayList/index.js
  var min = moment().startOf("year").subtract(1, "year");
  var max = moment().startOf("year").add(1, "year");

  const [day, setDay] = useState(moment().format());

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    setDay(selectedDate);
  }, [selectedDate]);

  return (
    <Fragment>
      <nav
        className=""
        id="navbar"
        style={{ position: "relative", zIndex: "100" }}
      >
        <div className="nav-wrapper">
          <ReactDatez
            allowPast
            dateFormat="MMM DD, YYYY"
            name="dateInput"
            handleChange={(date) => {
              if (date !== "") {
                // Local useState
                setDay(date);
                // Set date for redux
                setDate(date);
              }
            }}
            value={day}
            wrapperStyle={{
              display: "inline-block",
              margin: " 0.15rem 1rem 0rem 1rem",
              width: "11rem",
            }}
            inputStyle={{
              background: "white",
              borderRadius: "1rem",
              paddingLeft: "1rem",
            }}
            startDate={min.format("MMM DD, YYYY")}
            endDate={max.format("MMM DD, YYYY")}
          />
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/blocky-calendar/calendar">Monthly Calendar</Link>
            </li>
            <li>
              <Link to="/blocky-calendar/day">Day Block</Link>
            </li>
            <li>
              <Link to="/blocky-calendar/event-types">Event Types</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/blocky-calendar/calendar">Monthly Calendar</Link>
        </li>
        <li>
          <Link to="/blocky-calendar/day">Day Block</Link>
        </li>
        <li>
          <Link to="/blocky-calendar/event-types">Event Types</Link>
        </li>
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

Navbar.propTypes = {};

export default connect(mapStateToProps, { setDate })(Navbar);
