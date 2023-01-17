const mongoose = require("mongoose");
const validator = require("validator");
const alldata = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email id is already exist"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },
});

const data = new mongoose.model("singh", alldata);

module.exports = data;
