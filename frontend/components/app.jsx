import React from 'react';

import HeaderContainer from './header/header_container';

const App = (props) => {
  return (
    <div>
      { props.children }
    </div>
  );
};

export default App;
