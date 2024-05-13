const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoute");

app.use(express.json());

app.use("/student", studentRoute);

//connect the database

mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then(() => {
    console.log("Connecting to MongoDB successfully");
    app.listen(PORT, () => {
      console.log("connecting the port" + PORT);
    });
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", +error);
  });
