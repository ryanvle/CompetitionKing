const mysql = require('mysql2')
const config = require('../config/config')


class SqlConnection {
    constructor() {
        this.dbuser = config.username;
        this.dbhost = config.host;
        this.dbpassword = config.password;
        this.port = config.port;
    }
    
    EstablishConnection() {
        console.log('Attempting to Establish Connection to DB')
        let con = mysql.createConnection({
            host: this.dbhost,
            user: this.dbuser,
            password: this.dbpassword,
            port: this.port,
            connectTimeout: 30000,
        })
        con.connect(function(err) {
            if(err) throw err;
            console.log("connected")
        })
    }
}

module.exports = SqlConnection;