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
      questionnumber: String,
      questioncomplete1: String,
      key1forquestioncomplete1: String,
      answerchoose1 : String,
      resultchoose1: String,
      questioncomplete2: String,
      key1forquestioncomplete2: String,
      answerchoose2 : String,
      resultchoose2: String,
      questioncomplete3: String,
      key1forquestioncomplete3: String,
      answerchoose3 : String,
      resultchoose3: String,
      questioncomplete4: String,
      key1forquestioncomplete4: String,
      answerchoose4 : String,
      resultchoose4: String,
      questioncomplete5: String,
      key1forquestioncomplete5: String,
      answerchoose5 : String,
      resultchoose5: String,
      questioncomplete6: String,
      key1forquestioncomplete6: String,
      answerchoose6 : String,
      resultchoose6: String,
      questioncomplete7: String,
      key1forquestioncomplete7: String,
      answerchoose7 : String,
      resultchoose7: String,
      questioncomplete8: String,
      key1forquestioncomplete8: String,
      answerchoose8 : String,
      resultchoose8: String,
      questioncomplete9: String,
      key1forquestioncomplete9: String,
      answerchoose9 : String,
      resultchoose9: String,
      questioncomplete10: String,
      key1forquestioncomplete10: String,
      answerchoose10 : String,
      resultchoose10: String,
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
      detector: String,
    },

    update: {
      generic : String,
      select : String
    },

    selectedpharmacist: {},

    results: [
      {
        firstname: String,
        lastname: String,
        code: String,
        score: String,
        examname: String,
        questionnumber: String,
        createdAt: Date,
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
    ],

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
