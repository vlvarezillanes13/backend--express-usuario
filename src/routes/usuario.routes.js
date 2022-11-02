const express = require('express');
const { check } = require('express-validator');
const { listarUsuarios, crearUsuario, eliminarUsuario, actualizarUsuario, listarUsuarioPorId } = require('../controllers/usuario.controller');
const { validaCampos, validarId } = require('../middlewares/validar-campos');
const routes = express.Router();

routes.get('/', [], listarUsuarios)
routes.get('/:id', [
    validarId
], listarUsuarioPorId)

routes.post('/agregar', [
    validaCampos
], crearUsuario)
routes.put('/actualizar/:id', [
    validarId,
    validaCampos
], actualizarUsuario)
routes.delete('/eliminar/:id', [
    validarId
], eliminarUsuario)


module.exports = routes