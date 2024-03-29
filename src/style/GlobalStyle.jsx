import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    width: 500px;
    margin: auto;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }


  * {
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --main-color: #F965A3;
  --box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%),
    0 12px 24px rgb(0 0 0 / 5%);
  --division: rgb(239, 224, 224);
  --subtitle-color: rgb(174, 153, 153);
  --button-color: rgba(233, 173, 182, 0.8);
  --background-color: #FAE3EB;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a,
  img,
  span,
  input,
  button,
  ion-icon {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input,
  button {
    background: none;
    border: none;
    font: inherit;
  }

  input {
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  iframe {
    border: 0;
  }

  
`;
