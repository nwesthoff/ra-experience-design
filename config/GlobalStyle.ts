import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    scroll-behavior: smooth;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6em;
    color: white;
  }

  a {
    color: white;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
  }

  body {
    color: white;
    background-color: #000;
  }
`;

export default GlobalStyle;
