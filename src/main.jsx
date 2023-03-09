import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './style/ResetCss';
import { GlobalStyles } from './style/GlobalStyle';
import LoginContextProvider from './contexts/LoginContextProvider';
import CartContextProvider from './contexts/CartContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      {/* <CartContextProvider> */}
      <ResetCss />
      <GlobalStyles />
      <App />
      {/* </CartContextProvider> */}
    </LoginContextProvider>
  </React.StrictMode>
);
