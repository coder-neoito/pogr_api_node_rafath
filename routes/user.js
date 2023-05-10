import express from 'express'
const Router = express.Router()

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  assignGameToUser,
  getUserGameById
} from '../controllers/user/user.js'

Router.get('/', (req, res) => getAllUsers(req, res))
Router.get('/:id', (req, res) => getUserById(req, res))
Router.get('/:id/:id_game', (req, res) => getUserGameById(req, res))
Router.post('/', (req, res) => createUser(req, res))
Router.post('/assign', (req, res) => assignGameToUser(req, res))

Router.put('/', (req, res) => updateUser(req, res))
Router.delete('/', (req, res) => deleteUser(req, res))

export default Router
