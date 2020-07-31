import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
import Logo2 from '../../assets/img/icm.png';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="logo" />
      </a>

      <div>
        <img className="Logo" src={Logo2} alt="logo2" />
      </div>

      {/* <Button as="a" className="ButtonLink" href="/">
        Novo video
      </Button> */}
    </nav>
  );
}
