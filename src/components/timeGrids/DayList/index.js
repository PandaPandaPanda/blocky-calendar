import React, { useRef, useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import TimeSlotMatrics from "./TimeSlotMatrics";

import { setViewingDate } from "../../../actions/navbarActions";

import { FixedSizeList } from "react-window";
import moment from "moment";
import M from "materialize-css";

import { connect } from "react-redux";

import "./style.css";

const DayList = ({
  navbar: { date, viewingDate },
  setViewingDate,
  days,
  TimeSlot,
  min,
  max,
}) => {
  var listRef = useRef();
  var parentRef = useRef();

  const [height, setHeight] = useState(0);
  // const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(0);

  const updateSize = () => {
    if (parentRef.current) {
      setHeight(parentRef.current.offsetHeight);
      // setWidth(parentRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    M.AutoInit();
    setLoaded(true);
    updateSize();
    window.addEventListener("resize", () => updateSize());
  }, []);

  useEffect(() => {
    scrollToDate(moment(date));
  }, [loaded]);

  useEffect(() => {
    scrollToDate(moment(date));
    // renderTodayPointer();
  }, [date]);

  const getDateFromOffset = (offset) => {
    return moment(min).add(offset, "day");
  };

  const getDateOffset = (date) => {
    return date.diff(min, "days");
  };

  const scrollToDate = async (date = 0, ...rest) => {
    let offsetTop = getDateOffset(date);

    await listRef.current.scrollToItem(offsetTop, "center");
    // renderTodayPointer();
  };

  const renderDay = ({ index, style }) => {
    let { day, month, year, timeslots } = days[index];
    let key = `${year}:${month}:${day}`;

    // renderTodayPointer();
    // setInterval(() => {
    //   renderTodayPointer();
    // }, 60000);

    return (
      <TimeSlotMatrics
        key={key}
        style={style}
        date={{ year, month, day }}
        timeslots={timeslots}
        TimeSlot={TimeSlot}
      />
    );
  };

  // BUGGED
  // Find the current timeslot and append class "current" to it
  // const renderTodayPointer = () => {
  //   // Remove previous pointer if there is any
  //   if (document.getElementsByClassName("current")[0]) {
  //     document.getElementsByClassName("current")[0].remove();
  //   }

  //   // Add a pointer
  //   const matricsElm = document.getElementById(moment().format("YYYY:M:D"));

  //   if (matricsElm !== null) {
  //     var overlay = document.createElement("div");
  //     overlay.className = "current";

  //     const time = moment().diff(moment().startOf("day"), "minutes");
  //     const current = matricsElm
  //       .getElementsByClassName("timeslots-wrapper")[0]
  //       .children.item(Math.ceil(time / 15));
  //     current.appendChild(overlay);
  //     current.getElementsByClassName(
  //       "current"
  //     )[0].style.transform = `translatex(${((time % 15) / 15) * 640}%)`;
  //   }
  // };

  return (
    <div id="infiniteList" ref={parentRef}>
      <FixedSizeList
        ref={listRef}
        height={height}
        width={"100%"}
        itemCount={days.length}
        itemSize={height}
        children={renderDay}
        onScroll={(scrollTop) => {
          let temp = getDateFromOffset(
            Math.round(scrollTop.scrollOffset / height)
          );

          if (temp.diff(viewingDate, "day") != 0) {
            setViewingDate(temp.startOf("day"));
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, { setViewingDate })(DayList);
