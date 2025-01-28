const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String }, // URL for book image
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
