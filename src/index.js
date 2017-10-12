import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';

// Import all of our components
import App from './App';
import './index.css';
import IndexReducer from './index-reducer';


// use Redux DevTools
/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/*eslint-enable */

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware()),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
