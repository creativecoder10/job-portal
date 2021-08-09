import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import alertActions from './store/Alerts/Actions';
import History from './store/Helpers/History';
import Nav from './components/Header/Nav';

import classNames from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

import AppRouter from './appRouter/AppRouter';

const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    // location, action as param
    History.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  const showToast = (type, msg) => {
    toast[type](msg, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={classNames.App}>
      <div className="alertBox">
        { alert.message && alert.type === 'alert-success' ? showToast('success', alert.message) : '' }
        { alert.message && alert.type === 'alert-danger' ? showToast('error', alert.message) : '' }
        { alert.message && alert.type === 'alert-info' ? showToast('info', alert.message) : '' }
      </div>
      <Nav />
      <AppRouter />
      <ToastContainer />
    </div>
  );
};

export default App;
