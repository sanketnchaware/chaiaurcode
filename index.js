const express = require("express");
require("dotenv").config();

const port = process.env.PORT;
console.log("port:", port);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello This is home route");
});

app.get("/play", (req, res) => {
  res.send("Hello This is Play game route");
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
