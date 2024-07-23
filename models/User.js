import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Define the User model using the schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true, // remove empty
    unique: true,
    lowercase: true,
    index: { unique: true }, // create index on email field for faster lookup
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model using the schema

export const User = model("user", userSchema);
