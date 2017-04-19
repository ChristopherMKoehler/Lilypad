import React from 'react';
import GreetingContainer from './greetings/greeting_container';

const App = ({ children }) => {
  return (
    <div>
      <div className="header">
        <h1>Lilypad</h1>
      </div>
      <GreetingContainer />
      { children }
    </div>
  )
}

export default App;
