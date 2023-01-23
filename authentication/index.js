const connect = require("./helper/db");
connect();

const express = require("express");
const port = 9000;
const app = express();
const userRoutes = require("./routes/userRoute");

app.use(express.json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
