require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBDATABASE,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBDATABASE + '_test',
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBDATABASE,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: 'postgres',
    logging: false
  }
};
