export const tooglePlay = (song, isPlaying) =>{
  isPlaying ? song.pause() : song.play();
}
