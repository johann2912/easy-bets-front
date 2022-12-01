import { useState } from 'react';

const useToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'));

  const login = (login, user) => {
    localStorage.setItem('login', login);
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const logout = async () => {
    localStorage.removeItem('login');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

export default useToken;
