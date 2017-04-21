import React from 'react';
import Navbar from '../navbar/navbar';
import HomeHeaderContainer from '../header/home_header_container';
import GreetingContainer from '../greetings/greeting_container';

const home = (props) => {
  return (
    <div>
      <HomeHeaderContainer />
      <div className="home-content">
        <Navbar />
      </div>
    </div>
  );
};

export default home;
