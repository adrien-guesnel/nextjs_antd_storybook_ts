import { Card, Form, Input, Layout } from "antd";
import React, { useContext, useState } from "react";

import Button from "../components/Button";
import { UserContext } from "../src/UserContext";

export default function Infos() {
  const { Content } = Layout;
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);

  function changeUsername() {
    setUser({ name });
  }

  return (
    <Card>
      <p>
        This project use a context (UserContext) that save informations in local
        storage of the navigator.
      </p>
      <p>An example of use here to save the name of the user.</p>
      <h1>Hello {user.name}!</h1>
      <Form initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Enter an username" }]}
        >
          <Input
            placeholder="John"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button value="Save" onClick={(e) => changeUsername()}></Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
