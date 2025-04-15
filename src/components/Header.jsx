// components/Header.js
import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>LA MEJOR OPCIÓN EN</h1>
        <h2>PRENDAS DEPORTIVAS</h2>
        <p>EN LOMAS DE ZAMORA</p>
        <div className="brand-tags">
          <span>TEDRA</span>
          <span>MUFFE</span>
          <span>HUMBRE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;