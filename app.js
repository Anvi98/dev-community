
const play = document.querySelector('#play');
const container = document.querySelector('.container');

const playMusic = (e) => {
  let classList = [...e.target.classList];

  if(classList.includes('fa-pause')){
    player();
    play.firstChild.remove();
    play.innerHTML = `<i class="fa fa-play"></i>`; 
  } else  {
    play.firstChild.remove();
    play.innerHTML = `<i class="fa fa-pause"></i>`;
  }

} 

play.addEventListener('click', playMusic);