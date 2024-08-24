const mongoose = require("mongoose");

// SCORE SCHEMA
const score = new mongoose.Schema( {
  
  
        firstname: String,
        lastname: String,
        code: String,
        score: String,
        examname: String,
        questionnumber: String,
        examtime: String,
        answerc1 : String,
        answerc2 : String,
        answerc3 : String,
        answerc4 : String,
        answerc5 : String,
        answerc6 : String,
        answerc7 : String,
        answerc8 : String,
        answerc9 : String,
        answerc10 : String,
        answerassy1 : String,
        answerassy2 : String,
        answerassy3 : String,
        answerassy4 : String,
        answerassy5 : String,
        answerassy6 : String,
        answerassy7 : String,
        answerassy8 : String,
        answerassy9 : String,
        answerassy10 : String,
        answerchoose1 : String,
        answerchoose2 : String,
        answerchoose3 : String,
        answerchoose4 : String,
        answerchoose5 : String,
        answerchoose6 : String,
        answerchoose7 : String,
        answerchoose8 : String,
        answerchoose9 : String,
        answerchoose10 : String,
        answertf1 : String,
        answertf2 : String,
        answertf3 : String,
        answertf4 : String,
        answertf5 : String,
        answertf6 : String,
        answertf7 : String,
        answertf8 : String,
        answertf9 : String,
        answertf10 : String,
      },  
  { timestamps: true }
);

const Score = mongoose.model("Score", score);

module.exports = Score;
