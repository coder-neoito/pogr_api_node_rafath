import express from 'express'
import usersRouter from './user.js'
import gamesRouter from './game.js'

const Router = express.Router()

Router.use('/users', usersRouter)

Router.use('/games', gamesRouter)

export default Router
