const { request, response } = require("express");
const { urlPokemon } = require("../constantes/url");
const fetch = require("node-fetch");

const listarPokemones = async (req = request, resp = response) => {

  const data = await fetch(`${urlPokemon}`);

  if (!data.ok) {
    throw new Error(`Error : ${data.status}`);
  }

  const json = await data.json();

  return resp.status(200).json({
    ok: true,
    data: json,
  });
  
};

const litarPokemonPorId = async (req = request, resp = response) => {

    const id = req.params.id;
    const data = await fetch(`${urlPokemon}/${id}`);
  
    if (!data.ok) {
      throw new Error(`Error : ${data.status}`);
    }
  
    const json = await data.json();
  
    return resp.status(200).json({
      ok: true,
      data: json,
    });
    
  };

module.exports = {
  listarPokemones,
  litarPokemonPorId
};
