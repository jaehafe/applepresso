import React, { createContext, useEffect, useState } from 'react';
import { requestLogin } from '../constants/request';

export const LoginContext = createContext();

// localStorage.setItem('banapressoToken', JSON.stringify(res.data.accessToken));
function LoginContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('BANA_USER')) || null
  );
  console.log('currentUser', currentUser);

  const login = async (info) => {
    const data = await requestLogin(info);
    setCurrentUser(data);
    return data;
  };

  useEffect(() => {
    localStorage.setItem('BANA_USER', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <LoginContext.Provider value={{ login, currentUser }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
