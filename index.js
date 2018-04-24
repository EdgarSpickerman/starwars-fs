require('dotenv').config();
const port = process.env.PORT || 80;
const express = require('express');
const bodyParser = require("body-parser");
const apiRouter = require("./lib/router").api;

const app = express();

const serverSuccess = (port) =>
  console.log(`Server is running on http://localhost:${port}`);

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static("lib/public"));

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  res.sendStatus(404);
})

app.on("error", (err) => console.log(err))

app.listen(port, serverSuccess(port));