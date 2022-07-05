import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* Custom functions */
import { UserContext } from '../../../context/UserContext';
import useMedia from '../../../hooks/useMedia';

/* Components & Assets */
import { ReactComponent as MinhasFotos } from '../../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../assets/sair.svg';

import styles from '../style.module.css';

function UserHeaderNav() {
  const mobile = useMedia('(max-width: 40rem)');
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  
  return (
    <>
      {
        mobile && 
        <button
          className={`
            ${styles.mobileButton}
            ${mobileMenu && styles.mobileButtonActive}
          `}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      }
      <nav
        className={`
          ${mobile ? styles.navMobile : styles.nav}
          ${mobileMenu && styles.navMobileActive}
        `}
      >
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
    </>
  )
}

export default UserHeaderNav;