import { enjoy } from "./control.js";
import { list } from "./song.js";

const play = document.querySelector('#play');
const playNext = document.querySelector('#next');
const playPrevious = document.querySelector('#back');


play.addEventListener('click', () =>{
  const play = document.querySelector('#play');
  const classList = [...play.firstChild.classList];

  if(classList.includes('fa-play')){
    enjoy.playSong();
  } else {
    enjoy.pauseSong();
  }
});


playNext.addEventListener('click', enjoy.playNext);
playPrevious.addEventListener('click', enjoy.playPrevious);
