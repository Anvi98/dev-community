export const changeBackground = () => {
  const bodi =  document.querySelector('body');
  const listImages = ['../assets/pics/2.jpeg','../assets/pics/3.jpeg','../assets/pics/4.jpeg','../assets/pics/5.jpeg'];
  
  let position = JSON.parse(localStorage.getItem('position'));

  if(position == null || position === listImages.length) {
    position = 0;
    bodi.style.backgroundImage = `url(${listImages[position]})`;
  } else {
    bodi.style.backgroundImage = `url(${listImages[position]})`;
  }

  position += 1;

  localStorage.setItem('position', JSON.stringify(position));
};