import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as TaskApiUtil from './util/task_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.TaskApiUtil = TaskApiUtil;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
