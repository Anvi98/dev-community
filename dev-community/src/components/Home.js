import React, { useState } from 'react';
import Switcher from './Switcher';
import '../components/App.css';


const Home = () => {

  const listImages = ['pics/download.jpeg','pics/2.jpeg','pics/3.jpeg','pics/4.jpeg','pics/5.jpeg'];

  const getInitialTheme = () => {
    const temp = localStorage.getItem("position");
    let savedPosition = JSON.parse(temp);
    if(savedPosition > listImages.length - 1 || savedPosition === null){
      return savedPosition = 0;
    } else {
      return savedPosition ;
    }
  };

  let image = getInitialTheme();
  const [theme, setTheme] = useState(listImages[image]);


  const handleBackground = () => {
    console.log('clicked');
    let position = JSON.parse(localStorage.getItem('position'));

    if(position == null || position === listImages.length) {
      position = 0;
      setTheme(listImages[position]);
    } else {
      setTheme(listImages[position]);
    }
  
    position += 1;
  
    localStorage.setItem('position', JSON.stringify(position));
  };

  const im = {
    color: "red",
    backgroundImage: `url(${theme})`,
    backgroundSize: "cover"
  };

  return(
    <div className='container' style={im}>
      <h1>Hello To our community!!</h1>
      <Switcher handleBackground={handleBackground}/>
    </div>

  );
};

export default Home;