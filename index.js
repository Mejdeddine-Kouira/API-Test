const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./.env" });
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() =>{
    console.log("Connected to MongoDB")
  })
  .catch((err) =>{
    console.log("Failed to connect to MongoDB " + err)
  })

app.listen(PORT, ()=>{
  console.log("listening on port "+ PORT)
})