import { Schema } from "mongoose";

const DisciplineSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
});

export default DisciplineSchema;
