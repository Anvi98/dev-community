import { tooglePlay } from "./src/tooglePlay.js";

const play = document.querySelector('#play');
const listSong = ['./assets/musics/damso_FAIS_ÇA_BIEN.mp3', './assets/musics/lefa_02h00.mp3', './assets/musics/lefa_03h00.mp3'];
let song = new Audio(listSong[1]);
let isPlaying = false;

const playMusic = (e) => {
  let classList = [...e.target.classList];

  if(classList.includes('fa-pause')){
    song.onpause = () => {
      isPlaying = false;
    };
    tooglePlay(song, isPlaying);
    play.firstChild.remove();
    play.innerHTML = `<i class="fa fa-play"></i>`; 
  } else  {
    song.onplaying = () => {
      isPlaying = true;
    };
    tooglePlay(song, isPlaying);
    play.firstChild.remove();
    play.innerHTML = `<i class="fa fa-pause"></i>`;
  }

} 

play.addEventListener('click', playMusic);