import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { setDate } from "../../actions/navbarActions";

import moment from "moment";
import "react-datez/dist/css/react-datez.css";
import { ReactDatez, ReduxReactDatez } from "react-datez";

import "./style.css";
import PropTypes from "prop-types";

const Navbar = ({ setDate }) => {
  const [day, setDay] = useState(moment().format());
  const selectedDate = useSelector((state) => state.date);

  useEffect(
    (selectedDate) => {
      console.log(selectedDate);
      console.log(moment(selectedDate).format());
      setDay(moment(selectedDate).format());
    },
    [selectedDate]
  );

  return (
    <Fragment>
      <nav className="" style={{ position: "relative", zIndex: "100" }}>
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
          />
          <a href="#!" className="brand-logo center">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/calendar">Monthly Calendar</Link>
            </li>
            <li>
              <Link to="/day">Day Block</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/calendar">Monthly Calendar</Link>
        </li>
        <li>
          <Link to="/day">Day Block</Link>
        </li>
      </ul>
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     navbar: state.navbar,
//   };
// };

Navbar.propTypes = {};

export default connect(null, { setDate })(Navbar);
