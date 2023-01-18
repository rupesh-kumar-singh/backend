const express = require("express");
const router = new express.Router();
const data = require("../models/data");

router.post("/students", async (req, res) => {
  try {
    const user = new data(req.body);
    const datass = await user.save();
    res.status(200).send(datass);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

router.get("/students", async (req, res) => {
  try {
    const user = await data.find();

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const user = req.params.id;
    const otpt = await data.findById({ _id: user });

    res.status(200).send(otpt);
  } catch (e) {
    res.status(200).send(e);
  }
});

router.put("/students/:id", async (req, res) => {
  const updateddata = await data.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(updateddata);
});

router.delete("/students/:id", async (req, res) => {
  const deletedata = await data.deleteOne({ _id: req.params.id });
  res.send(deletedata);
});

module.exports = router;
