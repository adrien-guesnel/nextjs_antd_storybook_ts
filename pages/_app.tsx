import React from "react";
import { AppProps } from "next/app";
import "../assets/styles/antd.less";
import "../assets/styles/theme.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
