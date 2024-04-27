const express = require("express");
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");
const isAuthenticatedUser = require("../middlewares/auth");
const bookRouter = express.Router();

bookRouter.get("/books", getBooks);
bookRouter.get("/getById/:id", getBookById);
bookRouter.post("/create", isAuthenticatedUser, createBook);
bookRouter.put("/update/:id", isAuthenticatedUser, updateBook);
bookRouter.delete("/delete/:id", isAuthenticatedUser, deleteBook);

module.exports = bookRouter;
