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

  blockquote {
    font-family: 'IBM Plex Serif', serif;
    font-style: italic;
    font-size: 2rem;
    line-height: 1.3em;
    color: ${theme.colors.primary};

    @media (max-width: ${theme.breakpoints.phone}px) {
      font-size: 1.6rem;
      margin: 2rem 1.2rem;
    }
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
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
