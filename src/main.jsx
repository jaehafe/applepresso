import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './style/ResetCss';
import './main.css'; // 추가
import { GlobalStyles } from './style/GlobalStyle';
import LoginContextProvider from './contexts/LoginContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import EasyOrderContextProvider from './contexts/EasyOrderContextProvider';
import SelectedStoreProvider from './contexts/SelectedStoreProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <LoginContextProvider>
    <SelectedStoreProvider>
      <EasyOrderContextProvider>
        <CartContextProvider>
          <ResetCss />
          <GlobalStyles />
          <App />
        </CartContextProvider>
      </EasyOrderContextProvider>
    </SelectedStoreProvider>
  </LoginContextProvider>
  // </React.StrictMode>
);
