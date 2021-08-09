import { SPINNER, WORKER_CONSTANTS } from '../../AppConstants';
import ServerRequest from '../../utils/service-request';
import alertActions from '../Alerts/Actions';

const { GET_WORKER_PROFILE } = WORKER_CONSTANTS;

const fetchWorkerDetails = () => async (dispatch) => {
  try {
    dispatch({ type: SPINNER });
    const workerProfile = await ServerRequest('profile', 'GET');
    dispatch({
      type: GET_WORKER_PROFILE,
      workerProfile,
    });
    dispatch({ type: SPINNER });

    return;
  } catch (err) {
    dispatch({ type: SPINNER });
    dispatch(alertActions.error(err.toString()));
  }
};

export default fetchWorkerDetails;
