require('dotenv').config()
const env = require('./src/env');
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: env.database.host,
      database: env.database.dbName,
      user: env.database.user,
      password: env.database.password,
      insecureAuth: true,
      timezone: 'UTC'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
};
