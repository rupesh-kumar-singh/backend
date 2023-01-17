// const { application } = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/rupesh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("connection done");
  })
  .catch((e) => {
    console.log(e);
  });
