const express = require('express');
const routes = express.Router();
const { listarUsuarios, crearUsuario, eliminarUsuario, actualizarUsuario, listarUsuarioPorId } = require('../controllers/usuario.controller');
const { validaCampos, validarId, validarExistencia } = require('../middlewares/validar-usuario');

routes.get('/', [], listarUsuarios)
routes.get('/:id', [
    validarId
], listarUsuarioPorId)

routes.post('/agregar', [
    validaCampos,
    validarExistencia
], crearUsuario)
routes.put('/actualizar/:id', [
    validarId,
    validaCampos
], actualizarUsuario)
routes.delete('/eliminar/:id', [
    validarId
], eliminarUsuario)


module.exports = routes