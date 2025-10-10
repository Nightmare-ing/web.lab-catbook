// TODO (step0) import mongoose
const mongoose = require("mongoose");

// TODO (step0) define your Comment schema
const CommentSchema = new mongoose.Schema({
  creator_name: String,
  parent: String,
  content: Stirng,
});

// TODO (step0) create and export the model for the Comment schema
module.exports = mongoose.model("comment", CommentSchema);
