const connect = require("./helper/db");
connect();

const express = require("express");
const linkRoutes = require("./routes/linkRoute");
const port = 8000;
const app = express();

app.use(express.json());
app.use("/links", linkRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
