import { WORKER_CONSTANTS } from '../../AppConstants';

const { GET_WORKER_PROFILE } = WORKER_CONSTANTS;

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKER_PROFILE:
      return {
        ...state,
        ...action.workerProfile,
      };
    default:
      return state;
  }
};

export default reducer;
