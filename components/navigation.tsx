import { Layout, Menu } from "antd";

import Link from "next/link";
import React from "react";

const { Header } = Layout;

export default function Navigation() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link href="/index">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/infos">Infos</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
