import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button";

interface Props extends ButtonProps {
  value: string;
}

export default function Button({ value, ...buttonProps }: Props) {
  return (
    <AntButton type="primary" {...buttonProps}>
      {value}
    </AntButton>
  );
}
