const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Working");
});

const routes = require("./routes");

app.use("/api", routes);

const port = 3001;

app.use(express.static(__dirname + "/client"));

app.listen(port, () => {
  console.log("This server is running");
});
