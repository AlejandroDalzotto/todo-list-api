import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const connect = () => {
  const uri = process.env.DB_URI ?? ""

  mongoose.connect(uri)
    .then(() => console.log("Connected!"));
}