import { combineReducers } from 'redux';

import worker from './Worker/Reducer';
import jobs from './Jobs/Reducer';
import spinner from './Spinner/Reducer';
import alert from './Alerts/Reducer';

const rootReducer = combineReducers({
  worker,
  jobs,
  spinner,
  alert,
});

export default rootReducer;
