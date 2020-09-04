/* eslint-disable*/
const boom = require("@hapi/boom");

const notFoundHandlrer = (req, res) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  res.status(statusCode).json({
    hola: "esta pagina no existe",
  });
};

module.exports = {
  notFoundHandlrer,
};
