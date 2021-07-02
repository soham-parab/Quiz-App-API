const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema({
  quizTopic: String,
  questions: [
    {
      options: [
        {
          answer: String,

          isRight: Boolean,
        },
      ],
      question: String,
      correctAnswer: String,
      incorrectAnswers: Array,
      explanation: String,
    },
  ],
});

module.exports = mongoose.model("Quiz", QuizSchema);
