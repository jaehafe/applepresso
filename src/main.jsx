import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './style/ResetCss';
import { GlobalStyles } from './style/GlobalStyle';
import LoginContextProvider from './contexts/LoginContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import EasyOrderContextProvider from './contexts/EasyOrderContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <LoginContextProvider>
    <EasyOrderContextProvider>
      <CartContextProvider>
        <ResetCss />
        <GlobalStyles />
        <App />
      </CartContextProvider>
    </EasyOrderContextProvider>
  </LoginContextProvider>
  // </React.StrictMode>
);
