const QUERY = {
  INSERT_USER: `INSERT INTO users (name) VALUES ($1) RETURNING *`,
  GET_ALL_USERS: `SELECT * FROM users`,
  GET_USER_BY_ID: `SELECT * FROM users WHERE id_user = $1`,
  GET_GAMES_BY_USER_ID: `SELECT games.*
                        FROM games
                        JOIN user_games ON games.id_game = user_games.fk_id_game
                        WHERE user_games.fk_id_user = $1`,
  GET_GAME_BY_USER_ID: `SELECT games.*, user_games.*
                        FROM games
                        JOIN user_games ON games.id_game = user_games.fk_id_game
                        WHERE user_games.fk_id_user = $1 AND games.id_game = $2`,

  UPDATE_USER: `UPDATE users SET name = $1 WHERE id_user = $2 RETURNING *`,
  DELETE_USER: `DELETE FROM users WHERE id_user = $1 RETURNING *`,
  ASSIGN_GAME_TO_USER: `INSERT INTO user_games 
                            (fk_id_user, fk_id_game, game_specifics) 
                        VALUES ($1, $2, $3)`
}

export default QUERY
