import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TimeSlotMatrics from "../TimeSlotMatrics";

import { FixedSizeList } from "react-window";

export default class DayList extends PureComponent {
  _getRef = (instance) => {};

  // componentDidMount() {
  //   this.scrollEl = this.VirtualList.rootNode;
  // }

  // componentWillReceiveProps({scrollDate}) {
  //   if (scrollDate !== this.props.scrollDate) {
  //     this.setState({
  //       scrollTop: this.getDateOffset(scrollDate),
  //     });
  //   }
  // }

  // getDateOffset(date) {
  //   const {min, rowHeight, locale: {weekStartsOn}, height} = this.props;
  //   const weeks = getWeek(startOfMonth(min), parse(date), weekStartsOn);

  //   return weeks * rowHeight - (height - rowHeight/2) / 2;
  // }

  renderDay = ({ index, style }) => {
    let { days, TimeSlot } = this.props;

    let { day, month, year } = days[index];
    let key = `${year}:${month}:${day}`;
    return (
      // <div style={style} index={index}>
      //   {key}
      // </div>
      <TimeSlotMatrics
        key={key}
        style={style}
        date={{ year, month, day }}
        TimeSlot={TimeSlot}
      />
    );
  };

  render() {
    let { days } = this.props;

    return (
      <FixedSizeList
        className="List"
        ref={this._getRef}
        height={690}
        width="100%"
        itemCount={days.length}
        itemSize={690}
      >
        {this.renderDay}
      </FixedSizeList>
    );
  }
}
