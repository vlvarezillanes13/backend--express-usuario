const { request, response } = require("express");

const validarId = (req = request, resp = response, next) => {
  const id = req.params.id;

  if (id < 1) {
    return resp.status(400).json({
      ok: false,
      errors: "Id debe ser mayor a 0",
    });
  } else if (id > 905) {
    return resp.status(400).json({
      ok: false,
      errors: "Id debe ser menor  a 905",
    });
  }

  next();
};

module.exports = {
    validarId
}