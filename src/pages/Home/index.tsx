import React from 'react';
import ButtonAppBar from '../../components/ButtonAppBar';
import MessageComponent from '../../components/MessageComponent';
import './home.css'; // Importe o arquivo CSS aqui

export default function Home() {
  return (
    <div className="green-background"> {/* Aplique a classe CSS aqui */}
      <ButtonAppBar />
      <MessageComponent />
    </div>
  );
};


