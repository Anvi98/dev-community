import React, { useState } from 'react';

const Audio = () => {

  const [states, setStates] = useState({
    controlPlay: false,
    volume: 50, 
  });

  const playSong = () =>{

  };

  const pauseSong = () =>{

  };

  const playNext = () =>{

  };

  const playPrevious = () =>{

  };

  const handleVolume = (e) => {
    setStates({
      ...states,
      volume: e.target.value
    });
  };

  const handleControl = () => {
    setStates({
      ...states,
      controlPlay: !states.controlPlay,
    })
    console.log(states.controlPlay);
  }

  return(
    <div className='audioContainer'>
      <span className="audio_controller">
        <input 
          type="range" 
          min="1" 
          max="100" 
          value= {states.volume}
          className="slider" 
          onChange = {handleVolume}
        />
      </span>
      <span><i className="fa fa-forward controller" onClick={playNext} ></i></span>
      <span><i className={`fas ${states.controlPlay ? 'fa-pause' : 'fa-play' }  controller`} onClick={handleControl}></i></span>
      <span><i className="fa fa-backward controller" onClick={playPrevious}></i></span>
    </div>
  );
}

export default Audio;