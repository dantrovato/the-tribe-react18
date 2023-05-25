const app = express();

import express from "express";
import bodyParser from "body-parser";

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/members", (req, res) => {
  res.send("Hello World!");
});
app.post("/members", (req, res) => {
  // get the password  from the request body
  const { password } = req.body; // get the password  from the request body
  // check if the password is correct by comparing it to the one in the .env file
  if (password === process.env.PASSWORD) {
    // if it is correct create a session and send session token to the client
  }
});

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
