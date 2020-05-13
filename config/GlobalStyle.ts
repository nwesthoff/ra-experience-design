import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
  }

  body {
    background-color: #000;
  }

  p {
    line-height: 1.5;
  }
`;

export default GlobalStyle;
