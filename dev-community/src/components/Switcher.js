import React from 'react';

const Switcher = props => {


  return(
    <>
      <button onClick={() => props.handleBackground()} className='switch'>CHANGE THEME</button>
    </>
  );
};

export default Switcher;