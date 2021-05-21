const express = require("express");
const router = express.Router();

const QuizTwo = require("../models/QuizTwo");

router.get("/", async (req, res) => {
   res.send(QuizTwo);
});

module.exports = router;
