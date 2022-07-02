import React from 'react';
import { NavLink } from 'react-router-dom';

/* Custom functions */
import { UserContext } from '../../../context/UserContext';

/* Components & Assets */
import { ReactComponent as MinhasFotos } from '../../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../assets/sair.svg';

import styles from '../style.module.css';

function UserHeaderNav() {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar />
        {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav;