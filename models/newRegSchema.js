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

    code: {
      type: Number,
      trim: true,
      isNumeric: true,
    },
    role: {
      type: "string",
      enum: ["User", "Admin", "DIC"],
      default: "User",
    },
    active: {
      type: Boolean,
      default: true,
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
      },
    ],

    dicreceiver: [
      {
        question: {
          type: "string",
          trim: true,
        },
        answer: String,
        detector: String,
        sendername: String,
        senderimage: String,
        createdAt: Date,
        updatedAt: Date,
      },
    ],
    outfinddate: [
      {
        patientname: String,
        mrn: String,
        ptfloor: String,
        requestype: String,
        oraliv: String,
        roundcomment: String,
        prepcomment: String,
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
      },
    ],
    labfinddate: [
      {
        labpatientname: String,
        mrnlab: {
          type: Number,
        },
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
      },
    ],

    examchoose: {
      examname: String,
      questionchoose1: String,
      answer1questionchoose1: String,
      answer2questionchoose1: String,
      answer3questionchoose1: String,
      answer4questionchoose1: String,
      correctanswerquestion1: String,
      questionchoose2: String,
      answer1questionchoose2: String,
      answer2questionchoose2: String,
      answer3questionchoose2: String,
      answer4questionchoose2: String,
      correctanswerquestion2: String,
      questionchoose3: String,
      answer1questionchoose3: String,
      answer2questionchoose3: String,
      answer3questionchoose3: String,
      answer4questionchoose3: String,
      correctanswerquestion3: String,
      questionchoose4: String,
      answer1questionchoose4: String,
      answer2questionchoose4: String,
      answer3questionchoose4: String,
      answer4questionchoose4: String,
      correctanswerquestion4: String,
      questionchoose5: String,
      answer1questionchoose5: String,
      answer2questionchoose5: String,
      answer3questionchoose5: String,
      answer4questionchoose5: String,
      correctanswerquestion5: String,
      questionchoose6: String,
      answer1questionchoose6: String,
      answer2questionchoose6: String,
      answer3questionchoose6: String,
      answer4questionchoose6: String,
      correctanswerquestion6: String,
      questionchoose7: String,
      answer1questionchoose7: String,
      answer2questionchoose7: String,
      answer3questionchoose7: String,
      answer4questionchoose7: String,
      correctanswerquestion7: String,
      questionchoose8: String,
      answer1questionchoose8: String,
      answer2questionchoose8: String,
      answer3questionchoose8: String,
      answer4questionchoose8: String,
      correctanswerquestion8: String,
      questionchoose9: String,
      answer1questionchoose9: String,
      answer2questionchoose9: String,
      answer3questionchoose9: String,
      answer4questionchoose9: String,
      correctanswerquestion9: String,
      questionchoose10: String,
      answer1questionchoose10: String,
      answer2questionchoose10: String,
      answer3questionchoose10: String,
      answer4questionchoose10: String,
      correctanswerquestion10: String,
      questionassy1: String,
      key1forquestion1: String,
      key2forquestion1: String,
      key3forquestion1: String,
      key4forquestion1: String,
      questionassy2: String,
      key1forquestion2: String,
      key2forquestion2: String,
      key3forquestion2: String,
      key4forquestion2: String,
      questionassy3: String,
      key1forquestion3: String,
      key2forquestion3: String,
      key3forquestion3: String,
      key4forquestion3: String,
      questionassy4: String,
      key1forquestion4: String,
      key2forquestion4: String,
      key3forquestion4: String,
      key4forquestion4: String,
      questionassy5: String,
      key1forquestion5: String,
      key2forquestion5: String,
      key3forquestion5: String,
      key4forquestion5: String,
      questionassy6: String,
      key1forquestion6: String,
      key2forquestion6: String,
      key3forquestion6: String,
      key4forquestion6: String,
      questionassy7: String,
      key1forquestion7: String,
      key2forquestion7: String,
      key3forquestion7: String,
      key4forquestion7: String,
      questionassy8: String,
      key1forquestion8: String,
      key2forquestion8: String,
      key3forquestion8: String,
      key4forquestion8: String,
      questionassy9: String,
      key1forquestion9: String,
      key2forquestion9: String,
      key3forquestion9: String,
      key4forquestion9: String,
      questionassy10: String,
      key1forquestion10: String,
      key2forquestion10: String,
      key3forquestion10: String,
      key4forquestion10: String,
      questionnumber: String,
      detector: String,
    },

    selectedpharmacist: {

    },

    results: [
      {
        firstname: String,
        lastname: String,
        code: String,
        score: String,
        examname: String,
        questionnumber: String,
        createdAt: Date,
      },
    ],

    ldsearch: {
      searchText : String,
    },
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

user.pre("save", function (next) {
  this.firstname =
    this.firstname.trim()[0].toUpperCase() +
    this.firstname.slice(1).toLowerCase();
  next();
});

user.pre("save", function (next) {
  this.lastname =
    this.lastname.trim()[0].toUpperCase() +
    this.lastname.slice(1).toLowerCase();
  next();
});

user.post("save", (doc) => {
  if (doc.profileimage) {
    const profileimageUrl = `${process.env.BASE_URL}/ProfileImage/${doc.profileimage}`;
    doc.profileimage = profileimageUrl;
  }
});

user.post("init", (doc) => {
  if (
    doc.profileimage !== "/img/Avatar/Untitled-1-01.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-02.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-03.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-04.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-06.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-07.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-08.png" &&
    doc.profileimage !== "/img/Avatar/Untitled-1-09.png" &&
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
    doc.profileimage !== "/img/Avatar/Untitled-1-24.png"
  ) {
    const profileimageUrl = `${process.env.BASE_URL}/ProfileImage/${doc.profileimage}`;
    doc.profileimage = profileimageUrl;
  }
});

const User = mongoose.model("User", user);

module.exports = User;
