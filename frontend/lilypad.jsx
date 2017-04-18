import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logIn } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.logIn = logIn;
  ReactDOM.render(<Root store={ store }/>, root);
});
