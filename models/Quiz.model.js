const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema({
  quizTopic: String,
  questions: [
    {
      question: String,
      correctAnswer: String,
      incorrectAnswers: Array,
      explanation: String,
    },
  ],
});

module.exports = mongoose.model("Quiz", QuizSchema);
