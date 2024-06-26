const Book = require("../models/book.model");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");

const getBooks = asyncErrorHandler(async (req, res) => {
  let query = {};

  if (req.query.author) {
    query.author = req.query.author;
  }

  if (req.query.publicationYear) {
    query.publicationYear = req.query.publicationYear;
  }

  const books = await Book.find(query);
  res.status(200).json({ success: true, data: books });
});

const getBookById = asyncErrorHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    throw { statusCode: 404, message: "Book not found" };
  }
  res.status(200).json({ success: true, data: book });
});

const createBook = asyncErrorHandler(async (req, res) => {
  const { title, author, publicationYear } = req.body;
  const existingBook = await Book.findOne({ title });

  if (existingBook) {
    throw {
      statusCode: 400,
      message: "A book with the same title already exists",
      success: false,
    };
  }
  const book = await Book.create({ title, author, publicationYear });
  res.status(201).json({ success: true, data: book });
});

const updateBook = asyncErrorHandler(async (req, res) => {
  const { title, author, publicationYear } = req.body;
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, publicationYear }, { new: true });
  if (!updatedBook) {
    throw { statusCode: 404, message: "Book not found" };
  }
  res.status(200).json({ success: true, data: updatedBook });
});

const deleteBook = asyncErrorHandler(async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  if (!deletedBook) {
    throw { statusCode: 404, message: "Book not found" };
  }
  res.status(200).json({ success: true, message: "Book deleted" });
});

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
