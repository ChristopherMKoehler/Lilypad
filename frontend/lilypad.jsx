import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () =>{
  window.SessionUtil = SessionUtil;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Testing Testing</h1>, root);
});
