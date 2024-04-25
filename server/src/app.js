const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const Connection = require('./config/db')
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
Connection();


app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;