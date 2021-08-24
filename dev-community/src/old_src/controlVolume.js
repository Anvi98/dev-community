import { song } from "./control.js";

export const controlVolume = (e) => {
  const audio = document.querySelector('#audioControl');
  let volumeAudio = audio.value;
  song.volume = volumeAudio/100;
}