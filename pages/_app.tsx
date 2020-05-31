import "../assets/styles/antd.less";
import "../assets/styles/theme.scss";

import { AppProps } from "next/app";
import { Layout } from "antd";
import Navigation from "../components/navigation";
import React from "react";
import { UserProvider } from "../src/UserContext";

const { Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Navigation />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-background">
            <Component {...pageProps} />
          </div>
        </Content>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
