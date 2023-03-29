import React, { useContext, useEffect } from 'react';
import { errorNotify } from '../hooks/useToast';
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContextProvider';

export default function ProtectedRoute({ children }) {
  // const { accessToken } = JSON.parse(localStorage.getItem('BANA_USER')) || null;
  const { currentUser } = useContext(LoginContext);

  if (currentUser?.accessToken) {
    return <Navigate to="/main/home" replace />;
  }

  return children;
}
