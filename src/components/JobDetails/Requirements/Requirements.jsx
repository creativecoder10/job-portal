/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import classNames from './Requirements.module.css';

const renderRequirements = (requirements) => (
  requirements.map((requirement, index) => (
    <span key={index}>
      -
      {' '}
      {requirement}
    </span>
  ))
);

const Requirements = ({ requirements }) => (
  <div className={classNames.requirementsContainer}>
    <i className="fas fa-tools" />
    <div className={classNames.requirements}>
      <h3>Requirements</h3>
      {renderRequirements(requirements)}
    </div>
  </div>
);

Requirements.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Requirements;
