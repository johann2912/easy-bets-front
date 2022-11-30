import React, { createContext } from 'react';
import useToken from '../hooks/useToken.jsx';

export const SessionContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const Context = ({ children }) => {
  const { isLoggedIn, login, logout } = useToken();
  return (
    <SessionContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      <SessionContext.Consumer>{children}</SessionContext.Consumer>
    </SessionContext.Provider>
  );
};

export default Context;
