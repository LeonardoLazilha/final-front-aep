import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Sobre from './pages/Sobre';
import './index.css'; 
import Produto from './pages/Produto';


const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
