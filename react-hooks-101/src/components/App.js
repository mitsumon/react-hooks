import React, { useEffect, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import MoreEvents from './MoreEvents';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import axios from 'axios'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'
const APP_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    moreEvents: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log("Let's fetch data here." + JSON.stringify(state.moreEvents));
  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  //     dispatch({ type: 'GET_EVENTS', data: response.data });
      
  //   })();
  // }, [state]);
  // useEffect(() => {
  //   localStorage.setItem(APP_KEY, JSON.stringify(state));
  // }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
        <MoreEvents />
      </div>
    </AppContext.Provider>
  );
}

export default App;
