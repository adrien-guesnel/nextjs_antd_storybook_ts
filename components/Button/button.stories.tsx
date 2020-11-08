import React from "react";
import Button from "./index";

export default {
  component: Button,
  title: "Button",
};

export const Basic = (args) => (
    <Button {...args} />
);

Basic.args = { value: 'My button' };