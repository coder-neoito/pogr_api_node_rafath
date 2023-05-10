import pool from '../../connection/db.js'
import QUERY from './query.js'

// Create a new game
const createGame = async (req, res) => {
  // Extract necessary data from the request body
  const {
    name,
    description,
    image_urls: imageUrls,
    price,
    genre,
    developer,
    release_date
  } = req.body

  try {
    // Insert the game details into the database
    const result = await pool.query(QUERY.INSERT_GAME, [
      name,
      description,
      imageUrls,
      price,
      genre,
      developer,
      release_date
    ])
    // Respond with the newly created game object
    res.status(201).json(result.rows[0])
  } catch (error) {
    // Handle errors during the game creation process
    console.error('Error creating game:', error)
    res.status(500).json({ error: 'Failed to create game' })
  }
}

// Retrieve all games
const getAllGames = async (req, res) => {
  try {
    const result = await pool.query(QUERY.GET_ALL_GAMES)
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('Error getting all games:', error)
    res.status(500).json({ error: 'Failed to get games' })
  }
}

// Retrieve a game by ID
const getGameById = async (req, res) => {
  const { id } = req.params

  try {
    const result = await pool.query(QUERY.GET_GAME_BY_ID, [id])
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Game not found' })
    } else {
      res.status(200).json(result.rows[0])
    }
  } catch (error) {
    console.error(`Error getting game ${id}:`, error)
    res.status(500).json({ error: `Failed to get game ${id}` })
  }
}

// Update a game by ID
const updateGame = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  try {
    const result = await pool.query(QUERY.UPDATE_GAME, [name, email, id])
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Game not found' })
    } else {
      res.status(200).json(result.rows[0])
    }
  } catch (error) {
    console.error(`Error updating game ${id}:`, error)
    res.status(500).json({ error: `Failed to update game ${id}` })
  }
}

// Delete a game by ID
const deleteGame = async (req, res) => {
  const { id } = req.params

  try {
    const result = await pool.query(QUERY.DELETE_GAME, [id])
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Game not found' })
    } else {
      res.status(200).json({ message: `Game ${id} deleted successfully` })
    }
  } catch (error) {
    console.error(`Error deleting game ${id}:`, error)
    res.status(500).json({ error: `Failed to delete game ${id}` })
  }
}

export { createGame, getAllGames, getGameById, updateGame, deleteGame }
