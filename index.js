const express = require("express");
require("dotenv").config();
const cors = require("cors");

const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");

dbConfig();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
