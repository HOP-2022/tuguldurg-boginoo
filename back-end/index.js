const connect = require("./helper/db");
connect();

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const linkRoutes = require("./routes/linkRoute");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const port = process.env.BACK_END_PORT;
const app = express();
const { auth } = require("./middlewares/auth");

app.use(cors());
app.use(express.json());
app.use("/links", auth, linkRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

const corsOptions = {
  origin: process.env.FRONT_END,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
