import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ListApiUtil from './util/list_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.ListApiUtil = ListApiUtil;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
