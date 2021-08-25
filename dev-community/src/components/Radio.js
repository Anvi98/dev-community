import React, { useState } from 'react';
import { listSongs } from '../song';

const getInitialIndexSong = () =>{
  const temp = localStorage.getItem("song");
  let song = JSON.parse(temp);
  if(song === null || song > listSongs.length - 1){
    return song = 0;
  } else {
    return song ;
  }
};

let indexSong = getInitialIndexSong();
const song = new Audio(listSongs[indexSong]);

const Radio = props => {

  const [states, setStates] = useState({
    controlPlay: false,
    volume: 50, 
  });

  const playSong = () =>{
    song.play();
  };

  const pauseSong = () =>{
    song.pause();
  };

  const playNext = () =>{
    indexSong += 1;

    setStates({
      ...states,
      controlPlay: true,
    });

    if(indexSong > listSongs.length -1){
      indexSong = 0;
      song.src = listSongs[indexSong];
      song.play();
    } else {
      song.src = listSongs[indexSong];
      song.play();
    }
    localStorage.setItem('song', indexSong);
  };

  const playPrevious = () =>{
    indexSong -= 1;
    setStates({
      ...states,
      controlPlay: true,
    });
    if(indexSong < 0) {
      indexSong = listSongs.length - 1;
      song.src = listSongs[indexSong];
      song.play();
    } else {
      song.src = listSongs[indexSong];
      song.play(); 
    }
    localStorage.setItem('song', indexSong);
  };

  const handleVolume = (e) => {
    setStates({
      ...states,
      volume: e.target.value
    });
    song.volume = states.volume/100;
  };

  const handleControl = () => {
    setStates({
      ...states,
      controlPlay: !states.controlPlay,
    });

    if (states.controlPlay){
      pauseSong();
    } else {
      playSong();
    }
  };

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

export default Radio;