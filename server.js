const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    /********************************/
    /*** PUT HERE ALL YOUR LOGIC ****/
    /********************************/
    // Example of simple route that return json
    server.get("/myRoute", (req, res) => {
      res.status(200).json({ name: "Hello World!" });
    });

    // Handling other requests with Next.js
    server.get("*", handle);

    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Next.js ready on http://localhost:3000`);
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
