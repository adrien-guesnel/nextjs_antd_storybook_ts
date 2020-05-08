import React from "react";
import Button from "../components/Button";
import { Layout } from "antd";

export default function Index() {
  const { Content } = Layout;

  return (
    <Layout>
      <Content style={{ margin: "24px 16px 0" }}>
        <h1>hello world !</h1>
        <Button value="My button"></Button>
      </Content>
    </Layout>
  );
}
