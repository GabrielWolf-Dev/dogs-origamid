import React from 'react';
import { useLocation } from 'react-router-dom';

/* Components & Assets */
import UserHeaderNav from './UserHeaderNav';

import styles from '../style.module.css';

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
    
      default:
        setTitle('Minha conta');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader;