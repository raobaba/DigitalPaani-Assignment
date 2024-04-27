const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const errorHandler = require('./middlewares/errorHandler')
const Connection = require("./config/db");
const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
Connection();
app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

app.use(errorHandler);

module.exports = app;
