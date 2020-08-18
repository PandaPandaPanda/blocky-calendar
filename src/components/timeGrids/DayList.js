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
    return (
      <TimeSlotMatrics
        key={key}
        style={style}
        date={{ year, month, day }}
        TimeSlot={TimeSlot}
      />
    );
  };

  const getDateOffset = (date) => {
    // const {min, rowHeight, locale: {weekStartsOn}, height} = this.props;
    // const weeks = getWeek(startOfMonth(min), parse(date), weekStartsOn);

    // return date.diff(min, "days") * rowHeight - (height - rowHeight / 2) / 2;
    return date.diff(min, "days");
  };

  const scrollToDate = (date = 0, ...rest) => {
    let offsetTop = getDateOffset(date);
    console.log(offsetTop);
    listRef.current.scrollToItem(offsetTop, "center");
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
