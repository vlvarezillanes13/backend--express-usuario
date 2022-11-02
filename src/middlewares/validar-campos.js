const { request, response } = require("express");
const { validationResult } = require("express-validator");

const validaCampos = (req = request, resp = response, next) => {
  const body = req.body;
  if (!body.dni) {
    return resp.status(400).json({
      ok: false,
      errors: "Sin DNI",
    });
  } else if (!body.username) {
    return resp.status(400).json({
      ok: false,
      errors: "Sin username",
    });
  } else if (!body.password) {
    return resp.status(400).json({
      ok: false,
      errors: "Sin password",
    });
  } else if (!body.nombre) {
    return resp.status(400).json({
      ok: false,
      errors: "Sin nombre",
    });
  } else if (!body.apellidos) {
    return resp.status(400).json({
      ok: false,
      errors: "Sin apellidos",
    });
  }
};

const validarId = (req = request, resp = response, next) => {
  req.getConnection((err, conn) => {
    if (err) return resp.send(err);
    conn.query(
      " SELECT * FROM usuario WHERE id = ?",
      [req.params.id],
      (err, data) => {
        if (err) return resp.send(err);
        if (data.length === 0) {
          return resp.status(400).json({
            ok: false,
            errors: "USUARIO NO ENCONTRADO!",
          });
        } else {
          next();
        }
      }
    );
  });
};

module.exports = {
  validaCampos,
  validarId,
};
