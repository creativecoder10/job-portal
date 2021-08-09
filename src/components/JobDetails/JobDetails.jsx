import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classNames from './JobDetails.module.css';

import Spinner from '../UI/Spinner/Spinner';

import ShiftDates from './ShiftDates/ShiftDates';
import Location from './Location/Location';
import ReportTo from './ReportTo/ReportTo';
import Requirements from './Requirements/Requirements';
import ActionButtons from './ActionButtons/ActionButtons';

const renderNumbers = (what, value) => (
  <div className={classNames.numberWrapper}>
    <span className={classNames.title}>
      {what}
    </span>
    <span className={classNames.value}>
      {value}
    </span>
  </div>
);

const JobDetails = () => {
  const { jobs } = useSelector((state) => state.jobs);
  const { showSpinner } = useSelector((state) => state.spinner);
  const { jobId } = useParams();

  const selectedJob = jobs.filter((job) => job.jobId === jobId);

  const {
    jobTitle: {
      name: jobTitle,
      imageUrl,
    },
    company: {
      name,
      address: {
        formattedAddress,
      },
      reportTo: {
        name: reportToName,
        phone,
      },
    },
    wagePerHourInCents,
    milesToTravel,
    shifts,
    requirements,
  } = selectedJob[0];

  return (
    <div className={classNames.jobDetailsCard}>
      {showSpinner && <Spinner />}
      <div className={classNames.imgContainer}>
        <img src={imageUrl} alt={jobTitle} className={classNames.imgResponsive} />
      </div>
      <div className={classNames.cardContainer}>
        <div className={classNames.textContainer}>
          <h2>{jobTitle}</h2>
          <p className={classNames.companyName}>{name}</p>
          <div className={classNames.priceContainer}>
            {renderNumbers('Distance', `${milesToTravel.toFixed(2)} Miles`)}
            {renderNumbers('Hourly Rate', `$${(wagePerHourInCents / 100).toFixed(2)}`)}
          </div>
          <ShiftDates shifts={shifts} />
          <div className={classNames.dividerLine} />

          <Location address={formattedAddress} miles={milesToTravel.toFixed(2)} />
          <div className={classNames.dividerLine} />

          <ReportTo reportTo={reportToName} phone={phone} />
          {requirements && (
            <>
              <div className={classNames.dividerLine} />
              <Requirements requirements={requirements} />
            </>
          )}
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
