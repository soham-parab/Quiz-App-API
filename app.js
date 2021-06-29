const express = require("express");
const cors = require("cors");
const app = express();
// const quizRouteOne = require("./routes/QuizOne.route");
// const quizRouteTwo = require("./routes/QuizTwo.route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3400;

require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});
// app.use("/quizone", quizRouteOne);
// app.use("/quiztwo", quizRouteTwo);

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
