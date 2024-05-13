const studentModel = require("../model/studentModel");

const createStudent = async (req, resp) => {
  const { name, address, rollno } = req.body;
  const newStudent = new studentModel({
    name: name,
    address: address,
    rollno: rollno,
  });
  try {
    await newStudent.save();
    resp.status(201).json(newStudent);
  } catch (error) {
    resp.status(500).json({ message: "Something went wrong" });
  }
};

//get the data from database

const getStudentdata = async (req, resp) => {
  try {
    const student = await studentModel.find({ id: req.body._id });
    resp.status(201).json(student);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
};

// delete the student rectord from database

const deleteStudent = async (req, resp) => {
  const id = req.params.id;
  try {
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
      return resp.status(404).json({ message: "Student not found" });
    }
    resp.status(202).json({ message: "Student deleted successfully" });
  } catch (error) {
    resp.status(500).json({ message: error.message });
    console.log(error);
  }
};

//update the student from db
const upDateStudent = async (req, resp) => {
  const { name, address, rollno } = req.body;
  const id = req.params.id;
  const newStudent = {
    name: name,
    address: address,
    rollno: rollno,
  };
  try {
    await studentModel.findByIdAndUpdate(id, newStudent, { new: true });
    resp.status(200).json(newStudent);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "Something went wrong" });
  }
};

//get by id

const getById = async (req, resp) => {
  const id = req.params.id;
  try {
    const student = await studentModel.findById(id);
    resp.status(200).json(student);
  } catch (error) {
    resp.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createStudent,
  getStudentdata,
  deleteStudent,
  upDateStudent,
  getById,
};
