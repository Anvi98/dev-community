import React, { useState, useEffect }from 'react';
import Messages from './Messages';
import io from 'socket.io-client';

const socket = io('http://localhost:7001');

const Chat = () => {

  const [message, setMessage ] = useState('');
  const [chat , setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    socket.emit('message', {message});
    setMessage('');
  };

  useEffect(() => {
    socket.on('message', payload =>{
      setChat([...chat, payload]);
    })
  })

  return(
    <div className='chatContainer' onSubmit={sendMessage}>
      <Messages chatProps={chat}/>
      <form className="send-container">
        <input 
          type="text" 
          className='chat-input'
          value={message}
          onChange={e => setMessage(e.target.value)}/>
      </form>
    </div>
  );
};

export default Chat; 