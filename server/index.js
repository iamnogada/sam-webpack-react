const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("public"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(9000, () => console.log("Listening on port 9000!"));