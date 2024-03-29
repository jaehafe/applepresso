import React, { createContext, useEffect, useState } from 'react';
import { requestLogin, requestLogout } from '../constants/request';
import { errorNotify, ToastContainer } from '../hooks/useToast';

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('BANA_USER')) || null);

  const login = async (info) => {
    const data = await requestLogin(info);

    // setCurrentUser(data);

    if (!data) {
      errorNotify('아이디 혹은 비밀번호가 일치하지 않습니다.');
    }

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
    errorNotify('로그인 후 이용이 가능합니다');
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
      <ToastContainer />
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
