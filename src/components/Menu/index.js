import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo video
      </Button>
    </nav>
  );
}
