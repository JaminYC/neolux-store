import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">NeoLux Store</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
