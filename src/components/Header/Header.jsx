import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header;