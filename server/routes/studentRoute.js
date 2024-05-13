const express = require("express");
const {
  createStudent,
  getStudentdata,
  deleteStudent,
  upDateStudent,
  getById,
} = require("../controller/studentController");

const studentRoute = express.Router();

studentRoute.post("", createStudent);
studentRoute.get("", getStudentdata);
studentRoute.delete("/:id", deleteStudent);
studentRoute.put("/:id", upDateStudent);
studentRoute.get("/:id", getById);
module.exports = studentRoute;
