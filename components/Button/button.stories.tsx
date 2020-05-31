import { text, withKnobs } from "@storybook/addon-knobs";

import Button from "./index";
import React from "react";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
};

export const basic = () => (
  <>
    <Button value={text("Label", "Mon bouton")} />
  </>
);
