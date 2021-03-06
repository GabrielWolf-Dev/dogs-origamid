import React from 'react';
import { Link } from 'react-router-dom';

/* Custom functions */
import { UserContext } from '../../context/UserContext';

/* Components & Assets */
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import styles from './style.module.css';

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Link para a home">
          <Dogs />
        </Link>
        {
          data ? (
            <>
            <Link className={styles.login} to="/conta">
              {data.nome}
            </Link>
            </>
          ) : (
            <Link className={styles.login} to="/login">
              Login / Criar
            </Link>
          )
        }
      </nav>
    </header>
  )
}

export default Header;