import { enjoy } from "./control.js";
import { list } from "./song.js";
import { changeBackground } from "./changeBackground.js";

const play = document.querySelector('#play');
const playNext = document.querySelector('#next');
const playPrevious = document.querySelector('#back');
const switcherBackground = document.querySelector('.switcher');


play.addEventListener('click', () =>{
  const play = document.querySelector('#play');
  const classList = [...play.firstChild.classList];

  if(classList.includes('fa-play')){
    enjoy.playSong();
  } else {
    enjoy.pauseSong();
  }
});

switcherBackground.addEventListener('click', changeBackground);
playNext.addEventListener('click', enjoy.playNext);
playPrevious.addEventListener('click', enjoy.playPrevious);
