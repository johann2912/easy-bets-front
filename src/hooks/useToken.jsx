import { useState } from 'react';
import { setToken, getToken, clearToken } from '../api/localStorage';

const useToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  const login = (token) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    clearToken();
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

export default useToken;
