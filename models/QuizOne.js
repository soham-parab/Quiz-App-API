const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();

const quizOne = {
   quizName: "Do you suck at Finance?",
   questions: [
      {
         id: uuidv4(),
         question: "What percentage population of our country is financially literate?",
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
         question: "Your piece of ownership in a company is called:  ",
         points: 2,
         answer: [
            {
               option: "Portion",
               isRight: false,
            },
            {
               option: "Dividend",
               isRight: false,
            },

            {
               option: "Profit",
               isRight: false,
            },
            {
               option: "Share of Stock",
               isRight: true,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "Which of the following is a risk to consider when investing?",
         points: 2,
         answer: [
            {
               option: "Inflation",
               isRight: false,
            },
            {
               option: "You could lose all your money",
               isRight: false,
            },

            {
               option: "Liquidity",
               isRight: false,
            },
            {
               option: "All of the above",
               isRight: true,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "When is officially a 'Bull Market' in stocks?",
         points: 2,
         answer: [
            {
               option: "There's no official definition",
               isRight: false,
            },
            {
               option: "When a major market index hits a record new.",
               isRight: false,
            },

            {
               option: "When a broad market index records a 20% gain from its previous low.",
               isRight: true,
            },
            {
               option: "When the Analysts/Pundits of the major news channels announce so.",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "Which from below is a good explanation of Market Cap?",
         points: 2,
         answer: [
            {
               option: "Total size of the market, divided by market share of the company",
               isRight: false,
            },
            {
               option: "Total shares issued by the company, multiplied by its profit per share",
               isRight: false,
            },

            {
               option: "Total shares issued by the company, divided by its stock price",
               isRight: false,
            },
            {
               option: "Total shares issued by the company multiplied by its stock price",
               isRight: true,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "A market financial situation which is characterized by the investor’s confidence, optimism and positive expectations that good results will continue is called....?",
         points: 2,
         answer: [
            {
               option: "Bear Market",
               isRight: false,
            },
            {
               option: "Bull Market",
               isRight: true,
            },

            {
               option: "Buyer's Market.",
               isRight: false,
            },
            {
               option: "None of the above.",
               isRight: false,
            },
         ],
      },
     
      {
         id: uuidv4(),
         question: "Which investment among these do you suppose has consistently provided the highest long-term returns in India?",
         points: 2,
         answer: [
            {
               option: "Stocks and Equities",
               isRight: true,
            },
            {
               option: "Independent Houses and plots",
               isRight: false,
            },

            {
               option: "Gold schemes run by reputed jewellers",
               isRight: false,
            },
            {
               option: "Apartments by reputed builders in Metro cities",
               isRight: false,
            },
         ],
      },
   ],
};







module.exports = quizOne;
