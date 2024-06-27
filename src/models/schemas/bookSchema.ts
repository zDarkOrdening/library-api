import { Schema } from "mongoose";

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,

  },
  genre: {
    type: String,
    required: true,
    trim: true,

  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },

}, {
  timestamps: true
})

export default bookSchema