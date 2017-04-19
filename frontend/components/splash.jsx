import React from 'react';
import HeaderContainer from './header/header_container';

const Splash = ({children}) => {
  return (
    <div>
      <HeaderContainer />
      { children }
    </div>
  )
}

export default Splash;
