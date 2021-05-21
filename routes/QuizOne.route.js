const express = require("express");
const router = express.Router();

const QuizOne = require("../models/QuizOne");

router.get("/", async (req, res) => {
   res.send(QuizOne);
});

module.exports = router;
