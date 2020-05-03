import React from "react";
import { Button as AntButton } from "antd";

interface Props {
  value: string;
}

export default function Button({ value }: Props) {
  return <AntButton type="primary">{value}</AntButton>;
}
