import express from 'express'
const Router = express.Router()

import {
  createGame,
  getAllGames,
  getGameById,
  updateGame,
  deleteGame
} from '../controllers/game/game.js'

Router.get('/', (req, res) => getAllGames(req, res))
Router.get('/:id', (req, res) => getGameById(req, res))
Router.post('/', (req, res) => createGame(req, res))
Router.put('/', (req, res) => updateGame(req, res))
Router.delete('/', (req, res) => deleteGame(req, res))

export default Router
