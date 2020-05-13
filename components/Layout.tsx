import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { PageWrapper } from "./PageWrapper";
import GlobalStyle from "../config/GlobalStyle";

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
        <Link href="/chapters/1-analyse">
          <a>Analyse</a>
        </Link>{" "}
        |{" "}
        <Link href="/chapters/2-synthesise">
          <a>Synthesise</a>
        </Link>{" "}
        |{" "}
        <Link href="/chapters/3-simulate">
          <a>Simulate</a>
        </Link>{" "}
        |{" "}
        <Link href="/chapters/4-evaluate">
          <a>Evaluate</a>
        </Link>{" "}
        |{" "}
        <Link href="/chapters/5-repeat">
          <a>Repeat</a>
        </Link>
      </nav>
    </header>
    {children}
    <PageWrapper>
      <footer>
        Made with ❤️ by{" "}
        <a href="https://nilswesthoff.com" target="blank">
          Nils
        </a>
      </footer>
    </PageWrapper>
  </div>
);

export default Layout;
