import React from 'react';
import PropTypes from 'prop-types';

import classNames from './ReportTo.module.css';

const ReportTo = ({ reportTo, phone }) => (
  <div className={classNames.reportContainer}>
    <i className="fas fa-user" />
    <div className={classNames.reportTo}>
      <h3>Report To</h3>
      <span>
        {`${reportTo} ${phone}`}
      </span>
    </div>
  </div>
);

ReportTo.propTypes = {
  reportTo: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

ReportTo.defaultProps = {
  phone: '',
};

export default ReportTo;
