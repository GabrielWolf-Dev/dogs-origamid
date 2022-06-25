import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

/* Components & Assets */
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
