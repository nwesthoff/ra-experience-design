import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";
import { theme } from "../config/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    );
  }
}
