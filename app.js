const express = require("express");
const cors = require("cors");
const app = express();
const quizRoute = require("./routes/Quiz.route");

const PORT = process.env.PORT || 3500;

app.use(cors());

app.use("/", quizRoute);

app.listen(PORT),
   () => {
      console.log("something something");
   };
