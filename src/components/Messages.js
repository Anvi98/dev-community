import React, { useState, useEffect } from 'react';

const Messages = props => {

  return(
    <div>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      <h1>SKdfdklnfsdlkln</h1>
      {props.chatProps.map((payload, index) =>{
        return(
          <h3 key={payload.id}>{payload.message}</h3>
        )
      })}
    </div>
  );

};

export default Messages;