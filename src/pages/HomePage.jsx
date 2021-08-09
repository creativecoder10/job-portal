import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from './HomePage.module.css';

import Job from '../components/Job/Job';
import Spinner from '../components/UI/Spinner/Spinner';

import fetchWorkerDetails from '../store/Worker/Action';
import { fetchWorkerJobs } from '../store/Jobs/Action';

const renderJobs = (workerJobs) => workerJobs.map((job) => (
  <Job key={job.jobId} jobDetails={job} />
));

const HomePage = () => {
  const { jobs: workerJobs } = useSelector((state) => state.jobs);
  const { showSpinner } = useSelector((state) => state.spinner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkerDetails());
    dispatch(fetchWorkerJobs());
  }, []);

  return (
    <div className={classNames.container}>
      {showSpinner && <Spinner />}
      <h1>ALl Matching Jobs</h1>
      <div className={classNames.jobsContainer}>
        {renderJobs(workerJobs)}
      </div>
    </div>
  );
};

export default HomePage;
