import React, { useState, useEffect }from 'react';
import Messages from './Messages';
import io from 'socket.io-client';
import { v4 as uuidv4 } from "uuid";
import { dummyUsers } from '../dummyUsers';

const socket = io('http://localhost:7001');
// const setInitialUsers = (users) => {
//   localStorage.setItem('users', JSON.stringify(users));
// };

const Chat = () => {
  const getInitialUsers = (users) => {
    const temp = JSON.parse(localStorage.getItem('users'));
    return temp;
  };
  const [message, setMessage ] = useState('');
  const [chat , setChat] = useState([]);
  const [users, setUsers] = useState(getInitialUsers(dummyUsers));
  const addNewUser = () => {
    const newUser = {
      id: uuidv4(),
      name: prompt('add username:'),
    }
    setUsers([...users, newUser]);
  };


  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    const currentUser = 'vv3';
    let tempInput = message;
    tempInput = tempInput.split(' ');
    let temp = users.filter(user => user.username === currentUser);

    if(temp.length !== 1 ){
      console.log('not a member');
      if(tempInput[0] === '/register'){
        const newUser = {
          id: uuidv4(),
          name: tempInput[1],
          email: tempInput[2],
          pwd: tempInput[3]
        };
        setUsers([...users, newUser]);
        socket.emit('message', {id: uuidv4(), message: message});
        setMessage('');
      } else {
        socket.emit('message', {id: uuidv4(), message: 'not a member'});
        setMessage(''); 
      }
    } else {
      socket.emit('message', {id: uuidv4(), message: message});
      setMessage('');
    }

  };

  useEffect(() => {
    socket.on('message', payload =>{
      setChat([...chat, payload]);
    });
  })

  return(
  <>
    <div className='chatContainer' onSubmit={sendMessage}>
      <Messages chatProps={chat}/>
    </div>
    <form className="send-container">
        <input 
          type="text" 
          className='chat-input'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </form>
  </>
  );
};

export default Chat; 