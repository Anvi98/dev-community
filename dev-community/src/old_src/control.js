import {playStart} from "./playStart.js";
import { list } from "./song.js";
import { index } from "./playStart.js";

export let enjoy = new playStart();
export const song = new Audio(list[index]); 

song.addEventListener('ended', enjoy.playNext);