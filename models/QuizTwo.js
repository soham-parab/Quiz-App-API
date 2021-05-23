const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();

const quizTwo = {
   quizName: "How aware are you of the Crypto space?",
   questions: [
      {
         id: uuidv4(),
         question:
            "What does P2P stand for?",
         points: 2,
         answer: [
            {
               option: "Password to Password",
               isRight: false,
            },
            {
               option: "Peer to Peer",
               isRight: true,
            },

            {
               option: "Product to Product",
               isRight: false,
            },
            {
               option: "Private Key to Public Key",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "What is a miner?",
         points: 2,
         answer: [
            {
               option: "A type of blockchain",
               isRight: false,
            },
            {
               option: " An algorithm that predicts the next part of the chain",
               isRight: false,
            },

            {
               option: "Computers that validate and process blockchain transactions",
               isRight: true,
            },
            {
               option: "person doing calculations to verify a transaction",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "Where can you buy cryptocurrency?",
         points: 2,
         answer: [
            {
               option: "A private transaction",
               isRight: false,
            },
            {
               option: "An exchange",
               isRight: false,
            },

            {
               option: "A Bitcoin ATM",
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
         question: "What is a blockchain?",
         points: 2,
         answer: [
            {
               option: "A distributed ledger on a peer to peer network",
               isRight: true,
            },
            {
               option: "A type of cryptocurrency",
               isRight: false,
            },

            {
               option: "An exchange",
               isRight: false,
            },
            {
               option: "A centralized ledger",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "What incentivizes the miners to give correct validation of transactions?",
         points: 2,
         answer: [
            {
               option: "A nonce",
               isRight: false,
            },
            {
               option: "A block reward",
               isRight: true,
            },

            {
               option: "Thumbs up from the community",
               isRight: false,
            },
            {
               option: "More memory",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "What is Proof of Stake?",
         points: 2,
         answer: [
            {
               option: "A certificate needed to use the blockchain",
               isRight: false,
            },
            {
               option: "A password needed to access an exchange",
               isRight: false,
            },

            {
               option: "How private keys are made",
               isRight: false,
            },
            {
               option: "A transaction and block verification protocol",
               isRight: true,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "What is a Satoshi?",
         points: 2,
         answer: [
            {
               option: "A denomination in Bitcoin like pence and pounds",
               isRight: true,
            },
            {
               option: "A comment from Satoshi Nakomoto on BitcoinTalk",
               isRight: false,
            },

            {
               option: "100 Bitcoin",
               isRight: false,
            },
            {
               option: "A transaction send to the Bitcoin Foundation",
               isRight: false,
            },
         ],
      },
      {
         id: uuidv4(),
         question: "How is the price of Bitcoin determined?",
         points: 2,
         answer: [
            {
               option: "Through supply and demand across multiple Bitcoin exchanges",
               isRight: true,
            },
            {
               option: "The price is tied to USD",
               isRight: false,
            },

            {
               option: "Determined by the developers of Bitcoin?",
               isRight: false,
            },
            {
               option: "Determined by the demand for transactions at the moment",
               isRight: false,
            },
         ],
      },
   ],
};

module.exports = quizTwo;
