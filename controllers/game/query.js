const QUERY = {
  INSERT_GAME: `INSERT INTO games 
                  (name, description, image_urls, price, genre, developer, release_date) 
                VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *`,
  GET_ALL_GAMES: `SELECT * FROM games`,
  GET_GAME_BY_ID: `SELECT * FROM games WHERE id_game = $1`,
  UPDATE_GAME: `UPDATE games SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
  DELETE_GAME: `DELETE FROM games WHERE id = $1 RETURNING *`
}

export default QUERY
