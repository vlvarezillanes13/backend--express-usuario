const { request, response } = require("express");

const listarUsuarios = async (req = request, resp = response) => {
  req.getConnection((err, conn) => {
    if (err) return resp.send(err);
    conn.query(" SELECT * FROM usuario", (err, data) => {
      if (err) return resp.send(err);
      return resp.status(200).json({
        ok: true,
        data,
      });
    });
  });
};

const listarUsuarioPorId = async (req = request, resp = response) => {
  req.getConnection((err, conn) => {
    if (err) return resp.send(err);
    conn.query(
      " SELECT * FROM usuario WHERE id = ?",
      [req.params.id],
      (err, data) => {
        if (err) return resp.send(err);
        return resp.status(200).json({
          ok: true,
          data: data[0],
        });
      }
    );
  });
};

const crearUsuario = async (req = request, resp = response) => {
  req.getConnection((err, conn) => {
    if (err) return resp.send(err);
    conn.query("INSERT INTO usuario set ?", [req.body], (err, data) => {
      if (err) return resp.send(err);
      return resp.status(200).json({
        ok: true,
        msg: "USUARIO CREADO!",
      });
    });
  });
};

const actualizarUsuario = async (req = request, resp = response) => {
  req.getConnection((err, conn) => {
    if (err) return resp.send(err);
    conn.query(
      "UPDATE usuario set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, data) => {
        if (err) return resp.send(err);
        return resp.status(200).json({
          ok: true,
          msg: "USUARIO ACTUALIZADO!",
        });
      }
    );
  });
};

const eliminarUsuario = async (req = request, resp = response) => {
  req.getConnection((err, conn) => {
    if (err) return resp.send(err);
    conn.query(
      "DELETE FROM usuario WHERE id = ?",
      [req.params.id],
      (err, data) => {
        if (err) return resp.send(err);
        return resp.status(200).json({
          ok: true,
          msg: "USUARIO ELIMINADO!",
        });
      }
    );
  });
};

module.exports = {
  listarUsuarios,
  listarUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
