import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import TimeSlotMatrics from "./TimeSlotMatrics";

import { FixedSizeList } from "react-window";
import moment from "moment";
import AutoSizer from "react-virtualized-auto-sizer";

import { connect } from "react-redux";

const DayList = ({
  navbar: { date },
  days,
  TimeSlot,
  min,
  max,
  height,
  rowHeight,
}) => {
  const listRef = useRef();

  useEffect(() => {
    scrollToDate(moment(date));
  }, [date]);

  const renderDay = ({ index, style }) => {
    let { day, month, year } = days[index];
    let key = `${year}:${month}:${day}`;

    renderTodayPointer();
    setInterval(() => {
      renderTodayPointer();
    }, 60000);

    return (
      <TimeSlotMatrics
        key={key}
        style={style}
        date={{ year, month, day }}
        TimeSlot={TimeSlot}
      />
    );
  };

  // Find the current timeslot and append class "current" to it
  const renderTodayPointer = () => {
    // Remove previous pointer if there is any
    if (document.getElementsByClassName("current")[0]) {
      document.getElementsByClassName("current")[0].remove();
    }

    // Add a pointer
    const matricsElm = document.getElementById(moment().format("YYYY:M:D"));

    if (matricsElm !== null) {
      var overlay = document.createElement("div");
      overlay.className = "current";

      const time = moment().diff(moment().startOf("day"), "minutes");
      const current = matricsElm.getElementsByClassName(
        Math.ceil(time / 15)
      )[0];
      current.appendChild(overlay);
      current.getElementsByClassName(
        "current"
      )[0].style.transform = `translatex(${((time % 15) / 15) * 640}%)`;
    }
  };

  const getDateOffset = (date) => {
    return date.diff(min, "days");
  };

  const scrollToDate = async (date = 0, ...rest) => {
    let offsetTop = getDateOffset(date);
    await listRef.current.scrollToItem(offsetTop, "center");
    renderTodayPointer();
  };

  return (
    <FixedSizeList
      className="List"
      ref={listRef}
      height={height}
      width="100%"
      itemCount={days.length}
      itemSize={rowHeight}
      children={renderDay}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
  };
};

export default connect(mapStateToProps, {})(DayList);
