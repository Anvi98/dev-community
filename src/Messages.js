import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:7001');

const Messages = () => {

  return(
    <div>Hay</div>
  );

};

export default Messages;