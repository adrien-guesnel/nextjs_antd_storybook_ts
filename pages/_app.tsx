import React from "react";
import { AppProps } from "next/app";
import { UserProvider } from "../src/UserContext";
import "../assets/styles/antd.less";
import "../assets/styles/theme.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
