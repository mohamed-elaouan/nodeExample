const express = require("express");

const app = express();

app.use(express.json());
app.listen(5000, () => {
  console.log("server is running ");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
