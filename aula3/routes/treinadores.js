const express = require('express');
const router = express.Router();

const controller = require("../controllers/TreinadoresController")

router.get('', controller.getAll)
router.post('', controller.add)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:treinadorId/pokemons', controller.addPokemon)
router.patch('/:treinadorId/pokemons/:pokemonId/treinar', controller.treinarPokemon)
router.get('/:treinadorId/pokemons/:pokemonId', controller.getPokemonById)
router.get('/:treinadorId/pokemons', controller.getAllPokemons)
router.patch('/:treinadorId/pokemons/:pokemonId', controller.updatePokemon)
<<<<<<< HEAD
router.post('/login',controller.login)
=======
router.post('/login', controller.login)
>>>>>>> 94da74c30417ba76d1856d90be6b169b7e7fb663

module.exports = router
