import { enjoy } from "./playStart.js";

const play = document.querySelector('#play');
const playNext = document.querySelector('#next');


play.addEventListener('click', enjoy.playStart);


// playNext.addEventListener('click', enjoy.playNext(enjoy.position + 1));