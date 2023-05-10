import pool from '../../connection/db.js'
import QUERY from './query.js'

// Create a new user
const createUser = async (req, res) => {
  const { name } = req.body
  try {
    const result = await pool.query(QUERY.INSERT_USER, [name])
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Failed to create user' })
  }
}

// Retrieve all users
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(QUERY.GET_ALL_USERS)
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('Error getting all users:', error)
    res.status(500).json({ error: 'Failed to get users' })
  }
}

// Retrieve a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params

  try {
    const userDetails = await pool.query(QUERY.GET_USER_BY_ID, [id])
    const gameDetails = await pool.query(QUERY.GET_GAMES_BY_USER_ID, [id])
    if (userDetails.rows.length === 0) {
      res.status(404).json({ error: 'User not found' })
    } else {
      res
        .status(200)
        .json({ ...userDetails.rows[0], gameDetails: gameDetails.rows })
    }
  } catch (error) {
    console.error(`Error getting user ${id}:`, error)
    res.status(500).json({ error: `Failed to get user ${id}` })
  }
}

const getUserGameById = async (req, res) => {
  const { id, id_game } = req.params

  try {
    const userDetails = await pool.query(QUERY.GET_GAME_BY_USER_ID, [
      id,
      id_game
    ])
    if (userDetails.rows.length === 0) {
      res.status(404).json({ error: 'User not found' })
    } else {
      res.status(200).json(userDetails.rows[0])
    }
  } catch (error) {
    console.error(`Error getting user ${id}:`, error)
    res.status(500).json({ error: `Failed to get user ${id}` })
  }
}

// Update a user by ID
const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  try {
    const result = await pool.query(QUERY.UPDATE_USER, [name, email, id])
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' })
    } else {
      res.status(200).json(result.rows[0])
    }
  } catch (error) {
    console.error(`Error updating user ${id}:`, error)
    res.status(500).json({ error: `Failed to update user ${id}` })
  }
}

// Delete a user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    const result = await pool.query(QUERY.DELETE_USER, [id])
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' })
    } else {
      res.status(200).json({ message: `User ${id} deleted successfully` })
    }
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error)
    res.status(500).json({ error: `Failed to delete user ${id}` })
  }
}

const assignGameToUser = async (req, res) => {
  const { userId, gameId, gameSpecifics } = req.body

  try {
    await pool.query(QUERY.ASSIGN_GAME_TO_USER, [userId, gameId, gameSpecifics])
    res.status(201).json({ message: 'Game assigned to user successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  assignGameToUser,
  getUserGameById
}
