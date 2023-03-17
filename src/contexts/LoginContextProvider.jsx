import React, { createContext, useEffect, useState } from 'react';
import { requestLogin, requestLogout } from '../constants/request';

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('BANA_USER')) || null
  );

  const login = async (info) => {
    const data = await requestLogin(info);
    setCurrentUser(data);
    return data;
  };

  const logout = async () => {
    const { accessToken } = JSON.parse(localStorage.getItem('BANA_USER'));
    console.log(accessToken);
    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    const data = await requestLogout(accessToken);
    setCurrentUser(null);
    localStorage.removeItem('BANA_USER');
    console.log('data', data);
    return data;
  };

  useEffect(() => {
    localStorage.setItem('BANA_USER', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <LoginContext.Provider value={{ login, logout, currentUser }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
