import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { UserContext } from "../src/UserContext";
import { Layout } from "antd";

export default function Index() {
  const { Content } = Layout;
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);

  function changeUsername() {
    setUser({ name });
  }

  return (
    <Layout>
      <Content style={{ margin: "24px 16px 0" }}>
        <h1>Hello world {user.name}!</h1>
        Username :
        <input
          placeholder="John"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button value="Save" onClick={(e) => changeUsername()}></Button>
      </Content>
    </Layout>
  );
}
