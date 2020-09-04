/* eslint-disable*/
const express = require("express");
// middleware 
const { isNumeroCalculadora} = require('../../../utils/middleware/calculadora')
// Service Calculadora
const { operaciones } = require("../../../services/calculadora/math");



const calculadora = (app) => {
  const router = express.Router();
  app.use("/api/calculadora", router);
  router.get("/:value1/:operator/:value2", isNumeroCalculadora(), (req, res) => {
    const { value1, value2, operator } = req.params;
    res.status(200).json(operaciones(value1, value2, operator));
  });
};

module.exports = calculadora
