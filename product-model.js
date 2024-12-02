const mongoose = require('mongoose');

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'], // Custom error message
    minlength: [2, 'Product name must be at least 2 characters long'], // Minimum length validation
    maxlength: [100, 'Product name cannot be more than 100 characters'], // Maximum length validation
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'], // Minimum value validation
    max: [10000, 'Price cannot exceed 10000'], // Maximum value validation
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'], // Minimum length for description
    maxlength: [500, 'Description cannot be more than 500 characters'], // Maximum length for description
  },
  quantity: {
    type: Number,
    required: [true, ' quantity is required'],
    min: [0, 'Stock must be a positive number'], // Minimum stock validation
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
  }
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
