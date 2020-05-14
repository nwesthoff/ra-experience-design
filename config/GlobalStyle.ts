import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    scroll-behavior: smooth;
  }

  p, a {
    color: white;
    line-height: 1.6em;
  }

  body {
    color: white;
    background-color: #000;
  }
`;

export default GlobalStyle;
