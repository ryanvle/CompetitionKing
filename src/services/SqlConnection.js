const { Pool } = require ('pg')
const config = require('../config/config')



const pool = new Pool({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
    database: config.database,
    ssl: { rejectUnauthorized: false },
});

module.exports = pool;