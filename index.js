const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const port = 3000

const app = express();

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(cors());
app.use(require("./routes"));

mongoose
  .connect("mongodb+srv://zelim:nikulikolai123@cluster0")
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`server has been started on port ${port}`);
    });
  })
  .catch((e) => console.log(e));
