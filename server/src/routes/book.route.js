const express = require("express");
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/book.controller");

const bookRouter = express.Router();

bookRouter.get("/books", getBooks);
bookRouter.get("/getById/:id", getBookById);
bookRouter.post("/create", createBook);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);

module.exports = bookRouter;
