import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
  }
`;

export default GlobalStyle;
