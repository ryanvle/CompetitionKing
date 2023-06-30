const mysql = require('mysql2')
const config = require('../config')

const connection = mysql.createPool({
    host: config.host,
    user: config.username,
    password: config.password,
    port: config.port,
    connectTimeout: 30000,
})

module.exports = connection;