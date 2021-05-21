const express = require("express");
const cors = require("cors");
const app = express();
const quizRouteOne = require("./routes/QuizOne.route");
const quizRouteTwo = require("./routes/QuizTwo.route");

const PORT = process.env.PORT || 3500;

app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello Express app!");
});
app.use("/quizone", quizRouteOne);
app.use("/quiztwo", quizRouteTwo);

app.listen(PORT),
   () => {
      console.log("something something");
   };
