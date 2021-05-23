const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();

const quizTwo = {
   quizName: "How aware are you of the Crypto space?",
   questions: [
      {
         id: uuidv4(),
         question:
            "How much of the population of our country invests in equities?",
         points: 2,
         answer: [
            {
               option: "5%",
               isRight: true,
            },
            {
               option: "10%",
               isRight: false,
            },

            {
               option: "3%",
               isRight: false,
            },
            {
               option: "7%",
               isRight: false,
            },
         ],
      },
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

module.exports = quizTwo;
