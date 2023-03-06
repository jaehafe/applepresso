import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './style/ResetCss';
import { GlobalStyles } from './style/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <ResetCss />
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>
);
