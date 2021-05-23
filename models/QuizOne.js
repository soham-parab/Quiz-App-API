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
         question: "Which statements from below are true?",
         points: 2,
         answer: [
            {
               option: "A stock market index is a list of all the companies listed on the stock market",
               isRight: false,
            },
            {
               option: "Debt and Equity Mutual funds are taxed similarly since 2018",
               isRight: false,
            },

            {
               option: "Absolute return is the most efficient way to compare returns of two investments.",
               isRight: false,
            },
            {
               option: "Short term capital gains tax is typically higher than long term capital gains tax",
               isRight: true,
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
         question: "Out of the Equity related strategies from below, which has been known to provide the highest long term returns, time and time again?",
         points: 2,
         answer: [
            {
               option: "Buy at low price, sell at high price. Repeat diligently.",
               isRight: false,
            },
            {
               option: "Buy stocks of a company which has gone up recently. Sell before price drops. Repeat with another such company.",
               isRight: false,
            },

            {
               option: "Buy stocks of several good companies and wait for several years.",
               isRight: true,
            },
            {
               option: "Identify one great company and only invest in it every year.",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "An investment of 10 Lakhs in a good piece of Real Estate in India in 1998 would've grown to about 1.8 Crores by 2015. That's an 18X return over that 20 year period. If you were however unlucky enough to have put that 1 Lakh in an equity mutual fund, which had the poorest performance over the same period, how much do you suppose your return would have been? ",
         points: 2,
         answer: [
            {
               option: "Higher than real estate, around 20X.",
               isRight: true,
            },
            {
               option: "Due to 2008 market crash, 1 Lakh would've gotten reduced to 50,000. So, 5x.",
               isRight: false,
            },

            {
               option: "Around half of Real Estate returns, around 10X.",
               isRight: false,
            },
            {
               option: "Almost 2 times the returns of Real estate. Around 30X.",
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
