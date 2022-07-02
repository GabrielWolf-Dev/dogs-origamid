import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

/* Custom functions & Helpers */
import { UserStorage } from './context/UserContext';
import ProtectedRoute from './helper/ProtectedRoute';

/* Components & Assets */
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';


function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*" 
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
