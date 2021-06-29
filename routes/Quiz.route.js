const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz.model");

router.get("/", (req, res) => {
  res.send("issa router get");
});

//get a quiz

router.get("/:quizId", async (req, res) => {
  try {
    const quizFound = await Quiz.findById(req.params.quizId);
    res.json(quizFound);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const quiz = req.body;
  const newQuiz = new Quiz({
    ...quiz,
  });
  try {
    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:quizId", async (req, res) => {
  const quizFound = Quiz.findById(req.params.quizId);
  console.log(req.body.quizFound, "found");
  try {
    const addToQuiz = await quizFound.updateOne(
      {
        _id: req.params.quizId,
      },
      {
        $set: { questions: req.body.questions },
      }
    );

    const newQuiz = new Quiz({
      ...addToQuiz,
    });
    console.log(newQuiz, "sadasd");
    const updatedQuiz = await Quiz.find();
    console.log(updatedQuiz, "updated");
    res.json(updatedQuiz);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
