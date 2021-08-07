// import {tooglePlay} from './tooglePlay.js';
import { list } from './song.js';
import './control.js';
export class playStart {

  playStart(){

    const play = document.querySelector('#play');
    const classList = [...play.firstChild.classList];
    let position = 0;
    console.log(classList);
    
    let isPlaying = false;
    const tooglePlay = (song, isPlaying) =>{
      isPlaying ? song.pause() : song.play();
    }
    const song = new Audio(list[position]); 

    if(classList.includes('fa-play')){
      isPlaying = false;
      tooglePlay(song, isPlaying);
      play.firstChild.remove();
      play.innerHTML = `<i class="fa fa-pause"></i>`;
      
    } else {
      isPlaying = true;
      tooglePlay(song, isPlaying);
      play.firstChild.remove();
      play.innerHTML = `<i class="fa fa-play"></i>`;
    }
    song.addEventListener('ended', () => {
      if((position+1) <= list.length){
        song.src = list[position+1];
        position += 1;
        song.load();
        song.play();
      }

    })
  }

  playNext(){
    const play = document.querySelector('#next');
    tooglePlay(song, isPlaying);
  }

  playPrevious(){

  }
}
export let enjoy = new playStart();

// myAudio.onplaying = function() {
//   isPlaying = true;
// };
// myAudio.onpause = function() {
//   isPlaying = false;
// };