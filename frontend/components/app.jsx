import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import HeaderContainer from './header/header_container';

const App = (props) => {
  return (
    <div>
      <GreetingContainer />
      { props.children }
    </div>
  );
};

export default App;
