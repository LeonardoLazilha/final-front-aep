import React from 'react';
import ButtonAppBar from '../../components/ButtonAppBar';
import MessageComponent from '../../components/MessageComponent';
import './home.css';

export default function Home() {
  return (
    <div className="green-background"> 
      <ButtonAppBar />
      <MessageComponent />
    </div>
  );
};


