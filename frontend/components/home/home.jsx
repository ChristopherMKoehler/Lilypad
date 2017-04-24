import React from 'react';
import Navbar from '../navbar/navbar';
import HomeHeaderContainer from '../header/home_header_container';

const home = (props) => {
  return (
    <div>
      <HomeHeaderContainer />
      <div className="home-content">
        <Navbar />
        { props.children }
      </div>
    </div>
  );
};

export default home;
