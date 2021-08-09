/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import classNames from './ShiftDates.module.css';

const renderShifts = (shifts) => (
  shifts.map(({ startDate, endDate }, index) => (
    <span key={index}>
      {`${new Date(startDate).toUTCString()} - ${new Date(endDate).toUTCString()}`}
    </span>
  ))
);

// using index as keys is bad practise.
// but currently we do not have any other option. so went with index

const ShiftDates = ({ shifts }) => (
  <div className={classNames.shiftsContainer}>
    <i className="fas fa-calendar-alt" />
    <div className={classNames.shifts}>
      <h3>Shift Date</h3>
      {renderShifts(shifts)}
    </div>
  </div>
);

ShiftDates.propTypes = {
  shifts: PropTypes.arrayOf(PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  })).isRequired,
};

export default ShiftDates;
