const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please Enter Book Title"],
    },
    author: {
        type: String,
        required: [true, "Please Enter Author Name"],
    },
    publicationYear: {
        type: Number,
        required: [true, "Please Enter Publication Year"],
        min: [1000, "Publication year must be greater than or equal to 1000"],
        max: [new Date().getFullYear(), "Publication year must be less than or equal to current year"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Book = model('Book', bookSchema);

module.exports = Book;
