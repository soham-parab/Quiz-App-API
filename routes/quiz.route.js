const express = require("express");
const router = express.Router();

const Quiz = require("../models/QuizDB");

router.get("/", async (req, res) => {
   res.send("quizzzzzzzzzzzzzzzzzzz");
});

module.exports = router;
