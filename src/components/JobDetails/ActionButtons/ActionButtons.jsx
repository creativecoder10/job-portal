import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import classNames from './ActionButtons.module.css';

import { jobOffer } from '../../../store/Jobs/Action';

const ActionButtons = () => {
  const dispatch = useDispatch();
  const { jobId } = useParams();

  return (
    <div className={classNames.buttonsContainer}>
      <button
        type="button"
        className={classNames.rejectBtn}
        onClick={() => dispatch(jobOffer('reject', jobId))}
      >
        No Thanks
      </button>
      <button
        type="button"
        className={classNames.acceptBtn}
        onClick={() => dispatch(jobOffer('accept', jobId))}
      >
        {'I\'ll take it'}
      </button>
    </div>
  );
};

export default ActionButtons;
