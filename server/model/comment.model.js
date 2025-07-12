import mongoose from "mongoose";
const { Schema } = mongoose;

// {
//       id: 1,
//       commentorID: 121,
//       commentorName: "abcd",
//       comment: "lorem10",
//       reply: [],
//     },

const replySchema = new Schema({
  commentorID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  replyUserName: {
    type: String,
    required: true,
  },
  replyUserID: {
    type: String,
    required: true,
  },
  replys: {
    type: String,
    required: true,
  },
  title: String,
  userID: Number,
});

const commentSchema = new Schema({
  commentorID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  commentorName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  reply: [replySchema],
  title: String,
  userID: Number,
});

export const commentModel = mongoose.model("Comment", commentSchema);
