import { Card } from "antd";
import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <Card>
      <h1>Hello world !</h1>
      <p>Now, you can develop your own project.</p>
      <p>
        Some components are already developed to guide you, for more
        informations go to <Link href="/infos">Infos page</Link>
      </p>
    </Card>
  );
}
