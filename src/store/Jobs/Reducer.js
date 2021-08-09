import { JOBS_CONSTANTS } from '../../AppConstants';

const { GET_MATCHING_JOBS } = JOBS_CONSTANTS;

const initialState = {
  jobs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHING_JOBS:
      return {
        jobs: action.workerJobs,
      };
    default:
      return state;
  }
};

export default reducer;
