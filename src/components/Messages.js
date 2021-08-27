import React, { useState, useEffect } from 'react';

const Messages = props => {

  return(
    <div>
      {props.chatProps.map((payload, index) =>{
        return(
          <h3>{payload.message}</h3>
        )
      })}
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
      <h1>Hello To our community!!</h1>
    </div>
  );

};

export default Messages;