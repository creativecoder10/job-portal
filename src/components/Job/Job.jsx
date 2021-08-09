import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from './Job.module.css';

const Job = ({ jobDetails }) => {
  const {
    jobId, jobTitle: { name: title, imageUrl }, company: { name }, wagePerHourInCents,
  } = jobDetails;

  return (
    <div className={classNames.container}>
      <Link to={`job/${jobId}`}>
        <img src={imageUrl} alt={title} className={classNames.imgContainer} />
      </Link>
      <h2 className={classNames.nameOfJob}>
        {title}
      </h2>
      <div className={classNames.jobDescription}>
        <span className={classNames.company}>
          <i className="fas fa-building" id={classNames.detailsIcon} />
          {name}
        </span>
        <span className={classNames.hourlyRate}>
          <i className="fas fa-coins" id={classNames.detailsIcon} />
          {`$${(wagePerHourInCents / 100).toFixed(2)} per hour`}
        </span>
      </div>
    </div>
  );
};

Job.propTypes = {
  jobDetails: PropTypes.shape({
    jobId: PropTypes.string.isRequired,
    jobTitle: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    wagePerHourInCents: PropTypes.number.isRequired,
  }).isRequired,
};

export default Job;
