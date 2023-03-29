import React, { createContext, useEffect, useState } from 'react';
import { requestLogin, requestLogout } from '../constants/request';

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('BANA_USER')) || null
  );

  const login = async (info) => {
    const data = await requestLogin(info);
    console.log('!!!!!!!!!!!!!!!!!!', data);
    // setCurrentUser(data);

    if (data !== undefined && data !== null) {
      setCurrentUser(data);
    }
    return data;
  };

  const logout = async () => {
    const { accessToken } = JSON.parse(localStorage.getItem('BANA_USER')) || null;
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

  const loginModal = () => {
    alert('로그인 후 이용이 가능합니다');
  };
  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        logout,
        currentUser,
        loginModal,
        isOpenLoginModal,
        setIsOpenLoginModal,
        handleOpenLoginModal,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
