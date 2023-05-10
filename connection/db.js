import pgPkg from 'pg'
import dotenv from 'dotenv'
// Load environment variables from corresponding .env file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Destructure the Pool class from the pgPkg package
const { Pool } = pgPkg

// Create a new Pool instance with database connection configurations
const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
})

// Connect to the PostgreSQL database
pool
  .connect()
  .then(() => {
    console.log('CONNECTED TO POSTGRESQL DATABASE')
  })
  .catch((error) => {
    console.error('FAILED TO CONNECT TO POSTGRESQL DATABASE', error)
  })

export default pool
