import mongoose, { Schema } from "mongoose"

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  status: {
    type: String,
    enum: ["pendiente", "en progreso", "completada"],
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
})

export const Task = mongoose.model("Task", TaskSchema)