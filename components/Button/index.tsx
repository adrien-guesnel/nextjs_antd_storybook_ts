import React from "react";

interface Props {
  value: string;
}

export default function Button({ value }: Props) {
  return <input type="button" value={value} />;
}
