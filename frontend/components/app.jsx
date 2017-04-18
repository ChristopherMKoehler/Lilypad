import React from 'react';
import GreetingContainer from './greetings/greeting_container';

const App = ({ children }) => {
  return (
    <div>
      <h1>Lilypad</h1>
      <GreetingContainer />
      { children }
    </div>
  )
}

export default App;
