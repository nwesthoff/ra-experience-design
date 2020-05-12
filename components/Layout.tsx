import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400"
        rel="stylesheet"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/analyse">
          <a>Analyse</a>
        </Link>{" "}
        |{" "}
        <Link href="/synthesise">
          <a>Synthesise</a>
        </Link>{" "}
        |{" "}
        <Link href="/simulate">
          <a>Simulate</a>
        </Link>{" "}
        |{" "}
        <Link href="/evaluate">
          <a>Evaluate</a>
        </Link>{" "}
        |{" "}
        <Link href="/repeat">
          <a>Repeat</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <span>This Footer will be everywhere</span>
    </footer>
  </div>
);

export default Layout;
