import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

/* Components & Assets */
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Link para a home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header;