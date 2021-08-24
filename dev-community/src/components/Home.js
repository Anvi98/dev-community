import React, { useState } from 'react';
import Switcher from './Switcher';
import Audio from './Audio';
import '../components/App.css';


const Home = () => {

  // ***  From List of Images Switch Backrounds
  const listImages = ['pics/download.jpeg','pics/2.jpeg','pics/3.jpeg','pics/4.jpeg','pics/5.jpeg'];
  const getInitialTheme = () => {
    const temp = localStorage.getItem("position");
    let savedPosition = JSON.parse(temp);
    if(savedPosition === null || savedPosition > listImages.length - 1){
      return savedPosition = 0;
    } else {
      return savedPosition ;
    }
  };

  let image = getInitialTheme();
  const [theme, setTheme] = useState(listImages[image]);

  // When event onClick is raised from Switcher Component, this function handle the background Switching
  // And save the actual background to the localStorage.
  const handleBackground = () => {
    image += 1;
    if(image == null || image === listImages.length) {
      image = 0;
      setTheme(listImages[image]);
    } else {
      setTheme(listImages[image]);
    }
    localStorage.setItem('position', image);
  };
  // ***---------------- 

  const im = {
    color: "red",
    backgroundImage: `url(${theme})`,
    backgroundSize: "cover"
  };

  return(
    <div className='container' style={im}>
      <h1>Hello To our community!!</h1>
      <Switcher handleBackground={handleBackground}/>
      <Audio />
    </div>

  );
};

export default Home;