const express = require("express");

const path = require("path");
const logger = require("morgan");

require("dotenv").config();
require("./config/database.js");

const app = express();

var port = "3000";

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/restaurants", require("./routes/api/index.js"));
app.post("/restaurantPost", require("./routes/api/index.js"));

app.get("/restaurant/:id/home/", require("./routes/api/review.js"));
app.post("/restaurant/:id/post/", require("./routes/api/review.js"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;

const server = app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

module.exports = server;
