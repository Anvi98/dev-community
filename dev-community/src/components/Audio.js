import React from 'react';

const Audio = () => {

  return(
    <div className='audioContainer'>
      <span className="audio_controller">
        <input type="range" min="1" max="100" value="50" class="slider" id="audioControl" />
      </span>
      <span id="next"><i className="fa fa-forward controller" ></i></span>
      <span id="play"><i className="fas fa-play controller"></i></span>
      <span id="back"><i className="fa fa-backward controller"></i></span>
    </div>
  );
}

export default Audio;