import React from 'react';

const Switcher = props => {

  return(
    <>
      <button onClick={() => props.handleBackground()}>CHANGE THEME</button>
    </>
  );
};

export default Switcher;