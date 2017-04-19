import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import App from './app.jsx';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser){
      replace('/home');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    if(!store.getState().session.currentUser){
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path="/signup" component={ SessionFormContainer }  onEnter={ _redirectIfLoggedIn }/>
          <Route path="/home" onEnter={ _ensureLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
