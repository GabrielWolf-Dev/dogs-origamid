import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* Custom functions */
import { UserContext } from '../../context/UserContext';

/* Components & Assets */
import LoginForm from './components/LoginForm';
import LoginCreate from './components/LoginCreate';
import LoginPasswdLost from './components/LoginPasswdLost';
import LoginPasswdReset from './components/LoginPasswdReset';
import NotFound from '../NotFound';

import styles from './style.module.css';

function Login() {
  const { login } = React.useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswdLost />} />
          <Route path="resetar" element=    {<LoginPasswdReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login;