import React from 'react';
import { Link } from 'react-router-dom';
import './homeButton.css'; 

const HomeButton = () => {
  return (
    <div className="home-button-container"> 
      <Link to="/" className="home-button">
       <h6>Sair</h6>
      </Link>
    </div>
  );
};

export default HomeButton;
