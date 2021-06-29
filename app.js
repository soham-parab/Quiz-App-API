const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const QuizRoute = require("./routes/Quiz.route");

const PORT = process.env.PORT || 3400;

require("dotenv/config");

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/quiz", QuizRoute);
app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db!");
  }
);

app.listen(PORT),
  () => {
    console.log("something something");
  };
