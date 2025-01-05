import React, { useState } from 'react';
import './Header.css'; // Asegúrate de tener un archivo CSS asociado.

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">NeoLux Store</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
