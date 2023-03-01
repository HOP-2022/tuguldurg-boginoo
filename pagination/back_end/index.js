const connect = require("./helper/db");
connect();

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.BACK_END_PORT;
const app = express();
const dataRoutes = require("./routes/dataRoute");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/datas", dataRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

console.log("ddddd");
const corsOptions = {
  origin: process.env.FRONT_END,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
