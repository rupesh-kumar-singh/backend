require("./db/conn");
const express = require("express");
const router = require("./data/routers");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`connecting is ${port}`);
});
