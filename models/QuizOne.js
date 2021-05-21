const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();

const quizOne = {
   quizName: "Do you suck at Finance?",
   questions: [
      {
         id: uuidv4(),
         question: "What % population of our country is financially literate?",
         points: 2,
         answer: [
            {
               option: "10%",
               isRight: false,
            },
            {
               option: "5%",
               isRight: false,
            },

            {
               option: "7%",
               isRight: true,
            },
            {
               option: "3%",
               isRight: false,
            },
         ],
      },
   ],
};

module.exports = quizOne;
