import './control.js';
import { song } from './control.js';
import { list } from './song.js';


export class playStart {

  playSong(){
    const play = document.querySelector('#play');
    play.firstChild.remove();
    play.innerHTML = `<i class="fa fa-pause"></i>`;
    song.play();
  }

  pauseSong(){
    const play = document.querySelector('#play');
    play.firstChild.remove();
    play.innerHTML = `<i class="fa fa-play"></i>`;
    song.pause();
  }

  playNext(){
    index += 1;
    if(index > list.length -1){
      index = 0;
      const play = document.querySelector('#play');
      play.firstChild.remove();
      play.innerHTML = `<i class="fa fa-pause"></i>`;
      song.src = list[index];
      song.play();
    } else {
      const play = document.querySelector('#play');
      play.firstChild.remove();
      play.innerHTML = `<i class="fa fa-pause"></i>`;
      song.src = list[index];
      song.play();
    }
  }

  playPrevious(){
    index -= 1;
    if(index < 0) {
      index = list.length - 1;
      const play = document.querySelector('#play');
      play.firstChild.remove();
      play.innerHTML = `<i class="fa fa-pause"></i>`;
      song.src = list[index];
      song.play();
    } else {
      const play = document.querySelector('#play');
      play.firstChild.remove();
      play.innerHTML = `<i class="fa fa-pause"></i>`;
      song.src = list[index];
      song.play(); 
    }
  }
}


export let index = 0;
