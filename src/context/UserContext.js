import React from 'react';
import { useNavigate } from 'react-router-dom';

/* Custom functions */
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET
} from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');

    navigate('/login');
  }, [navigate]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    
    setData(data);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username,
        password
      });
      const tokenRes = await fetch(url, options);
      if(!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
  
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch(error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if(token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          console.log(response);
          if(!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch(error) {
          userLogout();
          console.error(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        login
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
