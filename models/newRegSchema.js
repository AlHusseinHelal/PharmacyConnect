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

    examchoose: {},

    selectedpharmacist: {},

    results : [
      {
        firstname : String,
        lastname : String,
        code : String,
        score : String,
        examname : String,
        questionnumber : String,
        createdAt: Date,

      }
    ],

    ldsearch : {},
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
