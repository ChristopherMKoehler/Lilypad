import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import Home from './home/home';
import App from './app.jsx';
import TaskIndexContainer from './tasks/task_index_container';
import TaskShowContainer from './tasks/task_show_container';

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
          <Route path="/home" onEnter={ _ensureLoggedIn } component={ Home }>
            <Route path="lists/:id" onEnter={ _ensureLoggedIn } component={ TaskIndexContainer }>
              <Route path="tasks/:taskId" onEnter={ _ensureLoggedIn } component={ TaskShowContainer }/>
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
