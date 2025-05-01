import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#main-content" className="logo">
          <img src="../src/assets/logo.svg" alt="ColdTech Logo" />
          <span className="logo-text">ColdTech</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#cta">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;