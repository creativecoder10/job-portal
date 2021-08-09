import { SPINNER, JOBS_CONSTANTS } from '../../AppConstants';
import ServerRequest from '../../utils/service-request';
import alertActions from '../Alerts/Actions';

const { GET_MATCHING_JOBS } = JOBS_CONSTANTS;

const fetchWorkerJobs = () => async (dispatch) => {
  try {
    dispatch({ type: SPINNER });
    const workerJobs = await ServerRequest('matches', 'GET');
    dispatch({
      type: GET_MATCHING_JOBS,
      workerJobs,
    });
    dispatch({ type: SPINNER });

    return;
  } catch (err) {
    dispatch({ type: SPINNER });
    dispatch(alertActions.error(err.toString()));
  }
};

const jobOffer = (workerResponse, jobId) => async (dispatch) => {
  try {
    dispatch({ type: SPINNER });
    const { success, message } = await ServerRequest(`job/${jobId}/${workerResponse}`, 'GET');

    if (success) dispatch(alertActions.success(`you have successfully ${workerResponse}ed the job!`));
    else dispatch(alertActions.information(message));

    dispatch({ type: SPINNER });
  } catch (err) {
    dispatch({ type: SPINNER });
    dispatch(alertActions.error(err.toString()));
  }
};

export { fetchWorkerJobs, jobOffer };
