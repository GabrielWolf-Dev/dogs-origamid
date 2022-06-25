import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Components & Assets */
import LoginForm from './subcomponents/LoginForm';
import LoginCreate from './subcomponents/LoginCreate';
import LoginPasswdLost from './subcomponents/LoginPasswdLost';
import LoginPasswdReset from './subcomponents/LoginPasswdReset';

function Login() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswdLost />} />
        <Route path="resetar" element={<LoginPasswdReset />} />
      </Routes>
    </div>
  )
}

export default Login;