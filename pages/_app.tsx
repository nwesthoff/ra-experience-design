import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";
import { theme } from "../config/theme";
import ReferenceProvider from "../components/Bibliography/ReferenceProvider";
import myReferences from "../config/MyReferences";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ReferenceProvider references={myReferences}>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </ReferenceProvider>
      </ThemeProvider>
    );
  }
}
