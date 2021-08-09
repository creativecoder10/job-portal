import React from 'react';
import PropTypes from 'prop-types';

import classNames from './Location.module.css';

const Location = ({ address, miles }) => (
  <div className={classNames.locationContainer}>
    <i className="fas fa-map-marker-alt" />
    <div className={classNames.location}>
      <h3>Location</h3>
      <span>
        {address}
      </span>
      <span className={classNames.miles}>
        {`${miles} miles from your job search location`}
      </span>
    </div>
  </div>
);

Location.propTypes = {
  address: PropTypes.string.isRequired,
  miles: PropTypes.string.isRequired,
};

export default Location;
