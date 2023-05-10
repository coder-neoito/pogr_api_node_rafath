import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const config = {
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  server: {
    port: process.env.SERVER_PORT || 3000,
    hostname: process.env.SERVER_HOSTNAME || 'localhost'
  }
}

export default config
