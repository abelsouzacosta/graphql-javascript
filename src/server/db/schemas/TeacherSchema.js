import { Schema } from "mongoose";

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: {
      values: ["M", "F", "m", "f"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  age: Number,
});

export default TeacherSchema;
