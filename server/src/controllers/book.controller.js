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
    return res.status(404).json({ success: false, message: "Book not found" });
  }
  res.status(200).json({ success: true, data: book });
});

const createBook = asyncErrorHandler(async (req, res) => {
  const { title, author, publicationYear } = req.body;
  const book = await Book.create({ title, author, publicationYear });
  res.status(201).json({ success: true, data: book });
});

const updateBook = asyncErrorHandler(async (req, res) => {
  const { title, author, publicationYear } = req.body;
  let book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }
  book.title = title;
  book.author = author;
  book.publicationYear = publicationYear;
  book = await book.save();
  res.status(200).json({ success: true, data: book });
});

const deleteBook = asyncErrorHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }
  await book.remove();
  res.status(200).json({ success: true, message: "Book deleted" });
});

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
