import {playStart} from "./playStart.js";
import { list } from "./song.js";
import { index } from "./playStart.js";

export let enjoy = new playStart();
export const song = new Audio(list[index]); 


song.addEventListener('ended', enjoy.playNext);

// song.addEventListener('ended', () =>{
//   while(position != list.length - 1){
//     position += 1;
//     song.autoplay;
//     song.currentTime = 0;
//     tooglePlay(song, isPlaying);
//     song.src = list[position];
//     song.load();
//     song.play();
//   }
// })