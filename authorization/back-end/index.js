const connect = require("./helper/db");
connect();

const express = require("express");
const cors = require("cors");
const port = 9000;
const app = express();
const userRoutes = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use("/roles", userRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
