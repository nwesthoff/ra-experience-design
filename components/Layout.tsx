import * as React from "react";
import Head from "next/head";
import { PageWrapper } from "./PageWrapper";
import GlobalStyle from "../config/GlobalStyle";
import Nav from "./Nav";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "RA Experience Design",
}) => {
  return (
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
        <Nav />
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
};

export default Layout;
