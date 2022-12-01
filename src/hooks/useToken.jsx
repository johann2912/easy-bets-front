import { useState } from 'react';

const useToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'));

  const login = (login, user) => {
    const { document_number, user_type } = user;
    localStorage.setItem('login', login);
    localStorage.setItem('userType', user_type);
    localStorage.setItem('docUser', document_number);
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('login');
    localStorage.removeItem('docUser');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

export default useToken;
