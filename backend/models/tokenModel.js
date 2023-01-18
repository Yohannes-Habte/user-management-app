import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const tokenSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, requred: true, ref: "User" },
  token: { type: String, required: true},
  createdAt: { type: Date, required: true },
  expiresAt: { type: Date, required: true },
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;
