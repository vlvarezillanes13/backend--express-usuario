const express = require('express');
const routes = express.Router();
const { listarPokemones, litarPokemonPorId } = require('../controllers/pokemon.controller');
const { validarId } = require('../middlewares/validar-pokemon');


routes.get('/', [], listarPokemones)
routes.get('/:id', [
    validarId
], litarPokemonPorId)


module.exports = routes