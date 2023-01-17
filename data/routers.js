const express = require("express");
const router = new express.Router();
const data = require("../models/data");

router.post("/getdata", async (req, res) => {
  try {
    const user = new data(req.body);
    const datass = await user.save();
    res.status(200).send(datass);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

router.get("/getdata", async (req, res) => {
  try {
    const user = await data.find();

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.put("/getdata/:id", async (req, res) => {
  const updateddata = await data.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(updateddata);
});

router.delete("/getdata/:id", async (req, res) => {
  const deletedata = await data.deleteOne({ _id: req.params.id });
  res.send(deletedata);
});

module.exports = router;
