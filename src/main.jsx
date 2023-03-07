import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './style/ResetCss';
import { GlobalStyles } from './style/GlobalStyle';
import LoginContextProvider from './contexts/LoginContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <ResetCss />
      <GlobalStyles />
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);
