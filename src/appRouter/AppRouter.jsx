import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import JobDetails from '../components/JobDetails/JobDetails';

const AppRouter = () => (
  <>
    <Switch>
      <Route path="/job/:jobId" exact component={JobDetails} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default AppRouter;
