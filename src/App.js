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
import Photo from './components/Feed/components/Photo';
import UserProfile from './pages/User/components/UserProfile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <UserStorage>
        <Header />
          <main className='AppBody'>
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
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
        <Footer />
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
