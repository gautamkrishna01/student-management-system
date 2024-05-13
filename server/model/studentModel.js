const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rollno: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
