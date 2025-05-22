import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  body: String,
  title: String,
  userID: Number,
 
});

export const userModel = mongoose.model('User', userSchema);