import React from 'react';
import ListIndexContainer from '../lists/list_index_container';
import { Link } from 'react-router';

const navbar = (props) => {
  return (
    <div className="navbar">
      <ListIndexContainer />
    </div>
  );
};

export default navbar;
