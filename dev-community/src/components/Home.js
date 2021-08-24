import React, { useState } from 'react';
import Switcher from './Switcher';
import '../components/App.css';


const Home = () => {

  // const getInitialTheme = () => {
  //   const temp = JSON.parse(localStorage.getItem('theme'));
  //   return temp || '../assets/pics/2.jpeg'; 
  // }
  const listImages = ['pics/2.jpeg','pics/3.jpeg','pics/4.jpeg','pics/5.jpeg'];

  const [theme, setTheme] = useState(listImages[0]);

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