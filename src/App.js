import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

/* Custom functions */
import { UserStorage } from './context/UserContext';

/* Components & Assets */
import Header from './screens/Header';
import Footer from './screens/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/conta" element={<Account />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
