/* eslint-disable*/
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { notFoundHandlrer} = require('./utils/middleware/errorHandlers')

const  calc = require('./routes/utils/calculadora')

const app = express();

// body parser
app.use(express.json());

// Middleware
app.use(helmet());
app.use(cors());

//routes

calc(app)


// app.use("/", (_req, res) => res.redirect("/api"));

// Error Handlres
app.use(notFoundHandlrer)


app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});
