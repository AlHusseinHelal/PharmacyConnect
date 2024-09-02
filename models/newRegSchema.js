const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

// REGISTRATION SCHEMA
const user = new mongoose.Schema(
  {
    firstname: {
      type: "string",
      trim: true,
      required: [true, "Name Is Required"],
    },
    lastname: {
      type: "string",
      trim: true,
      required: [true, "Name Is Required"],
    },
    email: {
      type: "string",
      trim: true,
      required: [true, "Email Is Required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: "string",
      hide: true,
      required: [true, "Password is required"],
    },
    passwordResetCode: String,
    passwordResetExpire: Date,
    passwordResetVerified: Boolean,
    verificationcode: String,
    verificationcodeExpire: Date,
    verificationcodeVerified: Boolean,

    code: {
      type: Number,
      trim: true,
      isNumeric: true,
    },
    role: {
      type: "string",
      enum: ["User", "Admin", "DIC", "Pyxis"],
      default: "User",
    },
    active: {
      type: Boolean,
      default: false,
    },
    profileimage: String,
    todolist: [
      {
        title: {
          type: "string",
          trim: true,
          required: [true, "Name Is Required"],
        },
        due: Date,
        description: String,
        completed: String,
        createdAt: Date,
        updatedAt: Date,
      },
    ],
    watchreceiver: [
      {
        nightpharmacist: String,
        ptname: String,
        ptmrn: String,
        message: String,
        high: Boolean,
        medium: Boolean,
        floor: String,
        dome: String,
        sendername: String,
        detector: String,
        comment: String,
        createdAt: Date,
        updatedAt: Date,
      },
    ],
    watchsender: [
      {
        nightpharmacist: String,
        ptname: String,
        ptmrn: String,
        message: String,
        high: Boolean,
        medium: Boolean,
        floor: String,
        dome: String,
        detector: String,
        comment: String,
        createdAt: Date,
        updatedAt: Date,
      },
    ],
    dicsearch: [
      {
        question: String,
        answer: String,
        refrence: String,
        refrencelink:String,
        drugname: String,
        createdAt: Date,
        updatedAt: Date,
      },
    ],
    dicsender: [
      {
        question: {
          type: "string",
          trim: true,
          required: [true, "Name Is Required"],
        },
        answer: String,
        detector: String,
        createdAt: Date,
        updatedAt: Date,
        refrence: String,
        refrencelink:String,
        drugname: String,
      },
    ],

    userquestionsearch: [
      {
        question : String,
        answer : String,
        refrence: String,
        refrencelink:String,
        drugname: String,
      }
    ],

    searchmedication: String,

    // dicreceiver: [
    //   {
    //     question: {
    //       type: "string",
    //       trim: true,
    //     },
    //     answer: String,
    //     detector: String,
    //     sendername: String,
    //     senderimage: String,
    //     createdAt: Date,
    //     updatedAt: Date,
    //   },
    // ],
    outfinddate: [
      {
        patientname: String,
        mrn: String,
        ptfloor: String,
        requestype: String,
        oraliv: String,
        roundcomment: String,
        prepcomment: String,
        attachfile: String,
        createdAt : Date,
        updatedAt : Date,
      },
    ],
    infinddate: [
      {
        patientname: String,
        mrn: String,
        ptfloor: String,
        requestype: String,
        oraliv: String,
        roundcomment: String,
        prepcomment: String,
        attachfile: String,
        createdAt : Date,
        updatedAt : Date,
      },
    ],
    labfinddate: [
      {
        labpatientname: String,
        mrnlab: String,
        labptfloor: String,
        labrequestype: String,
        medstartdate: {
          type: String,
        },
        phaname: String,
        medstarttime: String,
        samplewddate: String,
        samplewdtime: String,
        levelrequestreason: String,
        comment: String,
        labcomment: String,
        createdAt : Date,
        updatedAt : Date,
      },
    ],
    disfinddate: [
      {
        patientname: String,
        mrn: String,
        ptfloor: String,
        requestype: String,
        oraliv: String,
        roundcomment: String,
        prepcomment: String,
        attachfile: String,
        createdAt : Date,
        updatedAt : Date,
      },
    ],

    nursefinddate: [
      {
        patientname: String,
        mrn: String,
        ptfloor: String,
        requestype: String,
        oraliv: String,
        roundcomment: String,
        prepcomment: String,
        attachfile: String,
        createdAt : Date,
        updatedAt : Date,
      },
    ],

    examchoose: {
      examname: String,
      examtime: String,
      questionchoose1: String,
      answer1questionchoose1: String,
      answer2questionchoose1: String,
      answer3questionchoose1: String,
      answer4questionchoose1: String,
      correctanswerquestion1: String,
      answerc1: String,

      questionchoose2: String,
      answer1questionchoose2: String,
      answer2questionchoose2: String,
      answer3questionchoose2: String,
      answer4questionchoose2: String,
      correctanswerquestion2: String,
      answerc2: String,

      questionchoose3: String,
      answer1questionchoose3: String,
      answer2questionchoose3: String,
      answer3questionchoose3: String,
      answer4questionchoose3: String,
      correctanswerquestion3: String,
      answerc3: String,

      questionchoose4: String,
      answer1questionchoose4: String,
      answer2questionchoose4: String,
      answer3questionchoose4: String,
      answer4questionchoose4: String,
      correctanswerquestion4: String,
      answerc4: String,

      questionchoose5: String,
      answer1questionchoose5: String,
      answer2questionchoose5: String,
      answer3questionchoose5: String,
      answer4questionchoose5: String,
      correctanswerquestion5: String,
      answerc5: String,

      questionchoose6: String,
      answer1questionchoose6: String,
      answer2questionchoose6: String,
      answer3questionchoose6: String,
      answer4questionchoose6: String,
      correctanswerquestion6: String,
      answerc6: String,

      questionchoose7: String,
      answer1questionchoose7: String,
      answer2questionchoose7: String,
      answer3questionchoose7: String,
      answer4questionchoose7: String,
      correctanswerquestion7: String,
      answerc7: String,

      questionchoose8: String,
      answer1questionchoose8: String,
      answer2questionchoose8: String,
      answer3questionchoose8: String,
      answer4questionchoose8: String,
      correctanswerquestion8: String,
      answerc8: String,

      questionchoose9: String,
      answer1questionchoose9: String,
      answer2questionchoose9: String,
      answer3questionchoose9: String,
      answer4questionchoose9: String,
      correctanswerquestion9: String,
      answerc9: String,

      questionchoose10: String,
      answer1questionchoose10: String,
      answer2questionchoose10: String,
      answer3questionchoose10: String,
      answer4questionchoose10: String,
      correctanswerquestion10: String,
      answerc10: String,

      questionchoose11: String,
      answer1questionchoose11: String,
      answer2questionchoose11: String,
      answer3questionchoose11: String,
      answer4questionchoose11: String,
      correctanswerquestion11: String,
      answerc11: String,
      
      questionchoose12: String,
      answer1questionchoose12: String,
      answer2questionchoose12: String,
      answer3questionchoose12: String,
      answer4questionchoose12: String,
      correctanswerquestion12: String,
      answerc12: String,
      
      questionchoose13: String,
      answer1questionchoose13: String,
      answer2questionchoose13: String,
      answer3questionchoose13: String,
      answer4questionchoose13: String,
      correctanswerquestion13: String,
      answerc13: String,
      
      questionchoose14: String,
      answer1questionchoose14: String,
      answer2questionchoose14: String,
      answer3questionchoose14: String,
      answer4questionchoose14: String,
      correctanswerquestion14: String,
      answerc14: String,
      
      questionchoose15: String,
      answer1questionchoose15: String,
      answer2questionchoose15: String,
      answer3questionchoose15: String,
      answer4questionchoose15: String,
      correctanswerquestion15: String,
      answerc15: String,
      
      questionchoose16: String,
      answer1questionchoose16: String,
      answer2questionchoose16: String,
      answer3questionchoose16: String,
      answer4questionchoose16: String,
      correctanswerquestion16: String,
      answerc16: String,
      
      questionchoose17: String,
      answer1questionchoose17: String,
      answer2questionchoose17: String,
      answer3questionchoose17: String,
      answer4questionchoose17: String,
      correctanswerquestion17: String,
      answerc17: String,
      
      questionchoose18: String,
      answer1questionchoose18: String,
      answer2questionchoose18: String,
      answer3questionchoose18: String,
      answer4questionchoose18: String,
      correctanswerquestion18: String,
      answerc18: String,
      
      questionchoose19: String,
      answer1questionchoose19: String,
      answer2questionchoose19: String,
      answer3questionchoose19: String,
      answer4questionchoose19: String,
      correctanswerquestion19: String,
      answerc19: String,
      
      questionchoose20: String,
      answer1questionchoose20: String,
      answer2questionchoose20: String,
      answer3questionchoose20: String,
      answer4questionchoose20: String,
      correctanswerquestion20: String,
      answerc20: String,
      

      questionassy1: String,
      key1forquestion1: String,
      key2forquestion1: String,
      key3forquestion1: String,
      key4forquestion1: String,
      answerassy1: String,
      resultassy1 : String,

      questionassy2: String,
      key1forquestion2: String,
      key2forquestion2: String,
      key3forquestion2: String,
      key4forquestion2: String,
      answerassy2: String,
      resultassy2 : String,

      questionassy3: String,
      key1forquestion3: String,
      key2forquestion3: String,
      key3forquestion3: String,
      key4forquestion3: String,
      resultassy3 : String,
      answerassy3: String,

      questionassy4: String,
      key1forquestion4: String,
      key2forquestion4: String,
      key3forquestion4: String,
      key4forquestion4: String,
      answerassy4: String,
      resultassy4 : String,

      questionassy5: String,
      key1forquestion5: String,
      key2forquestion5: String,
      key3forquestion5: String,
      key4forquestion5: String,
      answerassy5: String,
      resultassy5 : String,

      questionassy6: String,
      key1forquestion6: String,
      key2forquestion6: String,
      key3forquestion6: String,
      key4forquestion6: String,
      answerassy6: String,
      resultassy6 : String,

      questionassy7: String,
      key1forquestion7: String,
      key2forquestion7: String,
      key3forquestion7: String,
      key4forquestion7: String,
      answerassy7: String,
      resultassy7 : String,

      questionassy8: String,
      key1forquestion8: String,
      key2forquestion8: String,
      key3forquestion8: String,
      key4forquestion8: String,
      answerassy8: String,
      resultassy8 : String,

      questionassy9: String,
      key1forquestion9: String,
      key2forquestion9: String,
      key3forquestion9: String,
      key4forquestion9: String,
      answerassy9: String,
      resultassy9 : String,

      questionassy10: String,
      key1forquestion10: String,
      key2forquestion10: String,
      key3forquestion10: String,
      key4forquestion10: String,
      answerassy10: String,
      resultassy10 : String,

      questionassy11: String,
      key1forquestion11: String,
      key2forquestion11: String,
      key3forquestion11: String,
      key4forquestion11: String,
      answerassy11: String,
      resultassy11 : String,

      questionassy12: String,
      key1forquestion12: String,
      key2forquestion12: String,
      key3forquestion12: String,
      key4forquestion12: String,
      answerassy12: String,
      resultassy12 : String,

      questionassy13: String,
      key1forquestion13: String,
      key2forquestion13: String,
      key3forquestion13: String,
      key4forquestion13: String,
      answerassy13: String,
      resultassy13 : String,

      questionassy14: String,
      key1forquestion14: String,
      key2forquestion14: String,
      key3forquestion14: String,
      key4forquestion14: String,
      answerassy14: String,
      resultassy14 : String,

      questionassy15: String,
      key1forquestion15: String,
      key2forquestion15: String,
      key3forquestion15: String,
      key4forquestion15: String,
      answerassy15: String,
      resultassy15 : String,

      questionassy16: String,
      key1forquestion16: String,
      key2forquestion16: String,
      key3forquestion16: String,
      key4forquestion16: String,
      answerassy16: String,
      resultassy16 : String,

      questionassy17: String,
      key1forquestion17: String,
      key2forquestion17: String,
      key3forquestion17: String,
      key4forquestion17: String,
      answerassy17: String,
      resultassy17 : String,

      questionassy18: String,
      key1forquestion18: String,
      key2forquestion18: String,
      key3forquestion18: String,
      key4forquestion18: String,
      answerassy18: String,
      resultassy18 : String,

      questionassy19: String,
      key1forquestion19: String,
      key2forquestion19: String,
      key3forquestion19: String,
      key4forquestion19: String,
      answerassy19: String,
      resultassy19 : String,

      questionassy20: String,
      key1forquestion20: String,
      key2forquestion20: String,
      key3forquestion20: String,
      key4forquestion20: String,
      answerassy20: String,
      resultassy20 : String,

      questioncomplete1: String,
      key1forquestioncomplete1: String,
      key2forquestioncomplete1: String,
      key3forquestioncomplete1: String,
      key4forquestioncomplete1: String,
      key5forquestioncomplete1: String,
      answercomplete1 : String,
      resultcomplete1: String,

      questioncomplete2: String,
      key1forquestioncomplete2: String,
      key2forquestioncomplete2: String,
      key3forquestioncomplete2: String,
      key4forquestioncomplete2: String,
      key5forquestioncomplete2: String,
      answercomplete2 : String,
      resultcomplete2: String,

      questioncomplete3: String,
      key1forquestioncomplete3: String,
      key2forquestioncomplete3: String,
      key3forquestioncomplete3: String,
      key4forquestioncomplete3: String,
      key5forquestioncomplete3: String,
      answercomplete3 : String,
      resultcomplete3: String,

      questioncomplete4: String,
      key1forquestioncomplete4: String,
      key2forquestioncomplete4: String,
      key3forquestioncomplete4: String,
      key4forquestioncomplete4: String,
      key5forquestioncomplete4: String,
      answercomplete4 : String,
      resultcomplete4: String,

      questioncomplete5: String,
      key1forquestioncomplete5: String,
      key2forquestioncomplete5: String,
      key3forquestioncomplete5: String,
      key4forquestioncomplete5: String,
      key5forquestioncomplete5: String,
      answercomplete5 : String,
      resultcomplete5: String,

      questioncomplete6: String,
      key1forquestioncomplete6: String,
      key2forquestioncomplete6: String,
      key3forquestioncomplete6: String,
      key4forquestioncomplete6: String,
      key5forquestioncomplete6: String,
      answercomplete6 : String,
      resultcomplete6: String,

      questioncomplete7: String,
      key1forquestioncomplete7: String,
      key2forquestioncomplete7: String,
      key3forquestioncomplete7: String,
      key4forquestioncomplete7: String,
      key5forquestioncomplete7: String,
      answercomplete7 : String,
      resultcomplete7: String,

      questioncomplete8: String,
      key1forquestioncomplete8: String,
      key2forquestioncomplete8: String,
      key3forquestioncomplete8: String,
      key4forquestioncomplete8: String,
      key5forquestioncomplete8: String,
      answercomplete8 : String,
      resultcomplete8: String,

      questioncomplete9: String,
      key1forquestioncomplete9: String,
      key2forquestioncomplete9: String,
      key3forquestioncomplete9: String,
      key4forquestioncomplete9: String,
      key5forquestioncomplete9: String,
      answercomplete9 : String,
      resultcomplete9: String,

      questioncomplete10: String,
      key1forquestioncomplete10: String,
      key2forquestioncomplete10: String,
      key3forquestioncomplete10: String,
      key4forquestioncomplete10: String,
      key5forquestioncomplete10: String,
      answercomplete10 : String,
      resultcomplete10: String,

      questioncomplete11: String,
      key1forquestioncomplete11: String,
      key2forquestioncomplete11: String,
      key3forquestioncomplete11: String,
      key4forquestioncomplete11: String,
      key5forquestioncomplete11: String,
      answercomplete11 : String,
      resultcomplete11: String,

      questioncomplete12: String,
      key1forquestioncomplete12: String,
      key2forquestioncomplete12: String,
      key3forquestioncomplete12: String,
      key4forquestioncomplete12: String,
      key5forquestioncomplete12: String,
      answercomplete12 : String,
      resultcomplete12: String,

      questioncomplete13: String,
      key1forquestioncomplete13: String,
      key2forquestioncomplete13: String,
      key3forquestioncomplete13: String,
      key4forquestioncomplete13: String,
      key5forquestioncomplete13: String,
      answercomplete13 : String,
      resultcomplete13: String,

      questioncomplete14: String,
      key1forquestioncomplete14: String,
      key2forquestioncomplete14: String,
      key3forquestioncomplete14: String,
      key4forquestioncomplete14: String,
      key5forquestioncomplete14: String,
      answercomplete14 : String,
      resultcomplete14: String,

      questioncomplete15: String,
      key1forquestioncomplete15: String,
      key2forquestioncomplete15: String,
      key3forquestioncomplete15: String,
      key4forquestioncomplete15: String,
      key5forquestioncomplete15: String,
      answercomplete15 : String,
      resultcomplete15: String,

      questioncomplete16: String,
      key1forquestioncomplete16: String,
      key2forquestioncomplete16: String,
      key3forquestioncomplete16: String,
      key4forquestioncomplete16: String,
      key5forquestioncomplete16: String,
      answercomplete16 : String,
      resultcomplete16: String,

      questioncomplete17: String,
      key1forquestioncomplete17: String,
      key2forquestioncomplete17: String,
      key3forquestioncomplete17: String,
      key4forquestioncomplete17: String,
      key5forquestioncomplete17: String,
      answercomplete17 : String,
      resultcomplete17: String,

      questioncomplete18: String,
      key1forquestioncomplete18: String,
      key2forquestioncomplete18: String,
      key3forquestioncomplete18: String,
      key4forquestioncomplete18: String,
      key5forquestioncomplete18: String,
      answercomplete18 : String,
      resultcomplete18: String,

      questioncomplete19: String,
      key1forquestioncomplete19: String,
      key2forquestioncomplete19: String,
      key3forquestioncomplete19: String,
      key4forquestioncomplete19: String,
      key5forquestioncomplete19: String,
      answercomplete19 : String,
      resultcomplete19: String,

      questioncomplete20: String,
      key1forquestioncomplete20: String,
      key2forquestioncomplete20: String,
      key3forquestioncomplete20: String,
      key4forquestioncomplete20: String,
      key5forquestioncomplete20: String,
      answercomplete20 : String,
      resultcomplete20: String,


      questiontruefalse1: String,
      answer1truefalse1: String,
      answer2truefalse1: String,
      correctanswertruefalse1: String,
      answertf1 : String,

      questiontruefalse2: String,
      answer1truefalse2: String,
      answer2truefalse2: String,
      correctanswertruefalse2: String,
      answertf2 : String,

      questiontruefalse3: String,
      answer1truefalse3: String,
      answer2truefalse3: String,
      correctanswertruefalse3: String,
      answertf3 : String,

      questiontruefalse4: String,
      answer1truefalse4: String,
      answer2truefalse4: String,
      correctanswertruefalse4: String,
      answertf4 : String,

      questiontruefalse5: String,
      answer1truefalse5: String,
      answer2truefalse5: String,
      correctanswertruefalse5: String,
      answertf5 : String,

      questiontruefalse6: String,
      answer1truefalse6: String,
      answer2truefalse6: String,
      correctanswertruefalse6: String,
      answertf6 : String,

      questiontruefalse7: String,
      answer1truefalse7: String,
      answer2truefalse7: String,
      correctanswertruefalse7: String,
      answertf7 : String,

      questiontruefalse8: String,
      answer1truefalse8: String,
      answer2truefalse8: String,
      correctanswertruefalse8: String,
      answertf8 : String,

      questiontruefalse9: String,
      answer1truefalse9: String,
      answer2truefalse9: String,
      correctanswertruefalse9: String,
      answertf9 : String,

      questiontruefalse10: String,
      answer1truefalse10: String,
      answer2truefalse10: String,
      correctanswertruefalse10: String,
      answertf10 : String,

      questiontruefalse11: String,
      answer1truefalse11: String,
      answer2truefalse11: String,
      correctanswertruefalse11: String,
      answertf11 : String,

      questiontruefalse12: String,
      answer1truefalse12: String,
      answer2truefalse12: String,
      correctanswertruefalse12: String,
      answertf12 : String,

      questiontruefalse13: String,
      answer1truefalse13: String,
      answer2truefalse13: String,
      correctanswertruefalse13: String,
      answertf13 : String,

      questiontruefalse14: String,
      answer1truefalse14: String,
      answer2truefalse14: String,
      correctanswertruefalse14: String,
      answertf14 : String,

      questiontruefalse15: String,
      answer1truefalse15: String,
      answer2truefalse15: String,
      correctanswertruefalse15: String,
      answertf15 : String,

      questiontruefalse16: String,
      answer1truefalse16: String,
      answer2truefalse16: String,
      correctanswertruefalse16: String,
      answertf16 : String,

      questiontruefalse17: String,
      answer1truefalse17: String,
      answer2truefalse17: String,
      correctanswertruefalse17: String,
      answertf17 : String,

      questiontruefalse18: String,
      answer1truefalse18: String,
      answer2truefalse18: String,
      correctanswertruefalse18: String,
      answertf18 : String,

      questiontruefalse19: String,
      answer1truefalse19: String,
      answer2truefalse19: String,
      correctanswertruefalse19: String,
      answertf19 : String,

      questiontruefalse20: String,
      answer1truefalse20: String,
      answer2truefalse20: String,
      correctanswertruefalse20: String,
      answertf20 : String,

      questionnumber: String,

      detector: String,
    },

    update: {
      generic : String,
      select : String
    },

    selectedpharmacist: {},

    // results: [
    //   {
    //     firstname: String,
    //     lastname: String,
    //     code: String,
    //     score: String,
    //     examname: String,
    //     questionnumber: String,
    //     createdAt: Date,
    //     answerc1 : String,
    //     answerc2 : String,
    //     answerc3 : String,
    //     answerc4 : String,
    //     answerc5 : String,
    //     answerc6 : String,
    //     answerc7 : String,
    //     answerc8 : String,
    //     answerc9 : String,
    //     answerc10 : String,
    //     answerc11 : String,
    //     answerc12 : String,
    //     answerc13 : String,
    //     answerc14 : String,
    //     answerc15 : String,
    //     answerc16 : String,
    //     answerc17 : String,
    //     answerc18 : String,
    //     answerc19 : String,
    //     answerc20 : String,
    //     answerassy1 : String,
    //     answerassy2 : String,
    //     answerassy3 : String,
    //     answerassy4 : String,
    //     answerassy5 : String,
    //     answerassy6 : String,
    //     answerassy7 : String,
    //     answerassy8 : String,
    //     answerassy9 : String,
    //     answerassy10 : String,
    //     answerassy11 : String,
    //     answerassy12 : String,
    //     answerassy13 : String,
    //     answerassy14 : String,
    //     answerassy15 : String,
    //     answerassy16 : String,
    //     answerassy17 : String,
    //     answerassy18 : String,
    //     answerassy19 : String,
    //     answerassy20 : String,
    //     answercomplete1 : String,
    //     answercomplete2 : String,
    //     answercomplete3 : String,
    //     answercomplete4 : String,
    //     answercomplete5 : String,
    //     answercomplete6 : String,
    //     answercomplete7 : String,
    //     answercomplete8 : String,
    //     answercomplete9 : String,
    //     answercomplete10 : String,
    //     answercomplete11 : String,
    //     answercomplete12 : String,
    //     answercomplete13 : String,
    //     answercomplete14 : String,
    //     answercomplete15 : String,
    //     answercomplete16 : String,
    //     answercomplete17 : String,
    //     answercomplete18 : String,
    //     answercomplete19 : String,
    //     answercomplete20 : String,
    //     answertf1 : String,
    //     answertf2 : String,
    //     answertf3 : String,
    //     answertf4 : String,
    //     answertf5 : String,
    //     answertf6 : String,
    //     answertf7 : String,
    //     answertf8 : String,
    //     answertf9 : String,
    //     answertf10 : String,
    //     answertf11 : String,
    //     answertf12 : String,
    //     answertf13 : String,
    //     answertf14 : String,
    //     answertf15 : String,
    //     answertf16 : String,
    //     answertf17 : String,
    //     answertf18 : String,
    //     answertf19 : String,
    //     answertf20 : String,
    //   },
    // ],

    ldsearch: {
      searchText: String,
    },

    labsearch : String
  },
  {
    timestamps: true,
  }
);

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  this.cpassword = undefined;
  next();
});

// user.pre("save", function (next) {
//   this.firstname =
//     this.firstname.trim()[0].toUpperCase() +
//     this.firstname.slice(1).toLowerCase();
//   next();
// });

user.pre("save", function (next) {
  this.firstname =
    this.email.split(".")[0].trim()[0].toUpperCase() +
    this.email.split(".")[0].slice(1).toLowerCase();
  next();
});

user.pre("save", function (next) {
  this.lastname =
    this.email.split(".")[1].split("@")[0].trim()[0].toUpperCase() +
    this.email.split(".")[1].split("@")[0].slice(1).toLowerCase();
  next();
});

user.pre("save", function (next) {
    this.examchoose.key1forquestion1 =
    this.examchoose.key1forquestion1.toLowerCase() 

  next();
});

// user.pre("save", function (next) {
//   this.lastname =
//     this.lastname.trim()[0].toUpperCase() +
//     this.lastname.slice(1).toLowerCase();
//   next();
// });

user.post("save", (doc) => {
  if (doc.profileimage) {
    const profileimageUrl = `http://localhost:7777/ProfileImage/${doc.profileimage}`;
    doc.profileimage = profileimageUrl;
  }
});

user.post("init", (doc) => {
  if (
    doc.profileimage !== "/img/Avatar/Untitled-1-1.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-2.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-3.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-4.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-6.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-7.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-8.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-9.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-10.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-11.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-12.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-13.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-14.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-15.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-16.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-17.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-18.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-19.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-20.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-21.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-22.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-23.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-24.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-25.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-26.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-27.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-28.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-29.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-30.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-31.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-32.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-33.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-34.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-35.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-36.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-37.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-38.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-39.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-40.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-41.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-42.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-43.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-44.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-45.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-46.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-47.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-48.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-49.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-50.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-51.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-52.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-53.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-60.png"
  ) {
    const profileimageUrl = `http://localhost:7777/ProfileImage/${doc.profileimage}`;
    doc.profileimage = profileimageUrl;
  
  }
});

const User = mongoose.model("User", user);

module.exports = User;
