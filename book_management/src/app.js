const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const errorHandler = require('./middlewares/errorHandler')
const Connection = require("./config/db");
const userRouter = require("./routes/user.route");
const bookRouter = require("./routes/book.route");

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Management by DigitalPaani',
      version: '1.0.0',
    },
    servers:[
      {
         url:'http://localhost:8000'
      },
      {
        url:"https://digitalpaani-book-management.onrender.com"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
Connection();
app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

app.use(errorHandler);

module.exports = app;
