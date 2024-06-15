import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';

import './index.css'; // Importe o arquivo de estilos aqui
import Produto from './pages/Produto';


const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produto />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
